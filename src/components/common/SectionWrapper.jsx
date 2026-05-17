import { forwardRef } from 'react'

const SectionWrapper = forwardRef(function SectionWrapper(
  {
    as: Component = 'div',
    className = '',
    children,
    ...props
  },
  ref,
) {
  return (
    <Component
      ref={ref}
      className={[
        'site-container w-full',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </Component>
  )
})

export default SectionWrapper
