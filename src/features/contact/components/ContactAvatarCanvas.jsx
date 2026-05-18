import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Html, OrbitControls, useFBX, useGLTF, useTexture } from '@react-three/drei'
import { Box3, MeshStandardMaterial, SRGBColorSpace, Vector3 } from 'three'
import { clone } from 'three/examples/jsm/utils/SkeletonUtils.js'

const avatarSources = {
  idle: {
    type: 'gltf',
    path: '/images/contact/avatars/woman-holding-a-laptop-and-making-a-gesture-2026-02-08-19-50-44-utc/icons8_girl_holding_laptop_and_having_an_idea.glb',
  },
  focus: {
    type: 'gltf',
    path: '/images/contact/avatars/woman-with-a-thought-bubble-2026-02-08-19-32-32-utc/icons8_woman_with_speech_bubble.glb',
  },
  success: {
    type: 'gltf',
    path: '/images/contact/avatars/woman-in-a-dynamic-pose-2026-02-08-19-36-35-utc/icons8_joyful_young_woman_jumping.glb',
  },
  phone: {
    type: 'fbx',
    path: '/images/contact/avatars/a-young-person-in-a-cartoon-style-points-to-a-whit-2026-02-06-22-39-48-utc/icons8_young_woman_standing_and_pointing_at_her_phone.fbx',
  },
}

const phoneAvatarTextures = {
  bodyColor:
    '/images/contact/avatars/woman-holding-a-laptop-and-making-a-gesture-2026-02-08-19-50-44-utc/textures/icons8_young_white_woman_base_color.jpg',
  bodyRoughness:
    '/images/contact/avatars/woman-holding-a-laptop-and-making-a-gesture-2026-02-08-19-50-44-utc/textures/icons8_young_white_woman_roughness.jpg',
  bodyMetalness:
    '/images/contact/avatars/woman-holding-a-laptop-and-making-a-gesture-2026-02-08-19-50-44-utc/textures/icons8_young_white_woman_metallic.jpg',
  phoneColor:
    '/images/contact/avatars/a-young-person-in-a-cartoon-style-points-to-a-whit-2026-02-06-22-39-48-utc/textures/phone_base_color.jpg',
  phoneRoughness:
    '/images/contact/avatars/a-young-person-in-a-cartoon-style-points-to-a-whit-2026-02-06-22-39-48-utc/textures/phone_roughness.jpg',
  phoneMetalness:
    '/images/contact/avatars/a-young-person-in-a-cartoon-style-points-to-a-whit-2026-02-06-22-39-48-utc/textures/phone_metallic.jpg',
  phoneAlpha:
    '/images/contact/avatars/a-young-person-in-a-cartoon-style-points-to-a-whit-2026-02-06-22-39-48-utc/textures/phone_alpha.jpg',
}

function AvatarModel({ status }) {
  const safeStatus = Object.hasOwn(avatarSources, status) ? status : 'idle'
  const source = avatarSources[safeStatus]
  const gltf = useGLTF(
    source.type === 'gltf' ? source.path : avatarSources.idle.path,
  )
  const fbx = useFBX(
    source.type === 'fbx' ? source.path : avatarSources.phone.path,
  )
  const textures = useTexture(phoneAvatarTextures)
  const preparedTextures = useMemo(() => {
    const nextTextures = Object.fromEntries(
      Object.entries(textures).map(([key, texture]) => [key, texture.clone()]),
    )

    nextTextures.bodyColor.colorSpace = SRGBColorSpace
    nextTextures.phoneColor.colorSpace = SRGBColorSpace
    nextTextures.bodyColor.needsUpdate = true
    nextTextures.phoneColor.needsUpdate = true
    nextTextures.bodyColor.flipY = true
    nextTextures.bodyRoughness.flipY = true
    nextTextures.bodyMetalness.flipY = true
    nextTextures.phoneColor.flipY = true
    nextTextures.phoneRoughness.flipY = true
    nextTextures.phoneMetalness.flipY = true
    nextTextures.phoneAlpha.flipY = true

    return nextTextures
  }, [textures])
  const rawScene = source.type === 'fbx' ? fbx : gltf.scene

  const { scene: clonedScene, scaleMultiplier } = useMemo(() => {
    const sceneClone = clone(rawScene)
    let nextScaleMultiplier = 1

    if (source.type === 'fbx') {
      sceneClone.traverse((child) => {
        if (!child.isMesh) {
          return
        }

        const applyMaterial = (material) => {
          if (!material?.name) {
            return material
          }

          if (material.name.includes('young_white_woman')) {
            return new MeshStandardMaterial({
              name: material.name,
              map: preparedTextures.bodyColor,
              roughnessMap: preparedTextures.bodyRoughness,
              metalnessMap: preparedTextures.bodyMetalness,
              roughness: 0.92,
              metalness: 0.08,
            })
          }

          if (material.name.includes('pink_phone')) {
            return new MeshStandardMaterial({
              name: material.name,
              map: preparedTextures.phoneColor,
              roughnessMap: preparedTextures.phoneRoughness,
              metalnessMap: preparedTextures.phoneMetalness,
              alphaMap: preparedTextures.phoneAlpha,
              transparent: true,
              roughness: 0.72,
              metalness: 0.22,
            })
          }

          return material
        }

        child.material = Array.isArray(child.material)
          ? child.material.map(applyMaterial)
          : applyMaterial(child.material)

        child.castShadow = true
        child.receiveShadow = true
      })

      const avatarHeight = new Box3().setFromObject(sceneClone).getSize(new Vector3()).y

      if (avatarHeight > 0) {
        nextScaleMultiplier = 2.75 / avatarHeight
      }
    }

    return {
      scene: sceneClone,
      scaleMultiplier: nextScaleMultiplier,
    }
  }, [preparedTextures, rawScene, source.type])

  const transformByStatus = {
    idle: { position: [0, -1.46, 0], rotation: [0, 0.38, 0], scale: 0.82 },
    focus: { position: [0, -1.46, 0], rotation: [0, 0.46, 0], scale: 0.8 },
    success: { position: [0, -1.56, 0], rotation: [0, 0.3, 0], scale: 0.78 },
    phone: { position: [0.03, -1.55, 0], rotation: [0, 0.22, 0], scale: 1 },
  }

  const transform = transformByStatus[safeStatus]

  return (
    <Float
      speed={safeStatus === 'success' ? 2.2 : 1.5}
      rotationIntensity={safeStatus === 'success' ? 0.16 : 0.08}
      floatIntensity={safeStatus === 'success' ? 0.2 : 0.12}
    >
      <primitive
        object={clonedScene}
        scale={transform.scale * scaleMultiplier}
        position={transform.position}
        rotation={transform.rotation}
      />
    </Float>
  )
}

function AvatarFallback() {
  return (
    <Html center>
      <div className="rounded-full bg-white/80 px-3 py-1 text-[12px] font-medium text-[#475467] shadow-[0_8px_20px_rgba(15,23,42,0.08)]">
        Loading avatar...
      </div>
    </Html>
  )
}

export default function ContactAvatarCanvas({ status, className = '' }) {
  return (
    <div className={`relative h-[285px] w-full sm:h-[330px] lg:h-[382px] ${className}`}>
      <div className="pointer-events-none absolute inset-x-[22%] bottom-[10%] h-[12px] rounded-full bg-[radial-gradient(circle,rgba(17,24,39,0.14)_0%,rgba(17,24,39,0)_74%)] blur-[10px]" />

      <Canvas camera={{ position: [0, 0.14, 9.3], fov: 22 }}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 5, 5]} intensity={2.4} />
        <directionalLight position={[-4, 2, 1]} intensity={1.2} color="#ffd7cf" />
        <spotLight position={[0, 5, 4]} angle={0.28} penumbra={0.6} intensity={1.6} />

        <Suspense fallback={<AvatarFallback />}>
          <AvatarModel status={status} />
        </Suspense>

        <OrbitControls enablePan={false} enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  )
}

useGLTF.preload(avatarSources.idle.path)
useGLTF.preload(avatarSources.focus.path)
useGLTF.preload(avatarSources.success.path)
useFBX.preload(avatarSources.phone.path)
