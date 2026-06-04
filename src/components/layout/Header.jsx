// Navbar section
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact Us', href: '/contact' },
]

const headerStyles = `
  .header-cta {
    --header-cta-bg: #f97316;
    --header-cta-bg-hover: #fb923c;
    --header-cta-outline: rgba(249, 115, 22, 0.24);
    --header-cta-shadow: rgba(0, 0, 0, 0.25);
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 9999px;
    padding: 0.6rem 1.25rem;
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--color-text);
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(10px);
    z-index: 0;
    overflow: hidden;
  }

  .header-cta::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    background: conic-gradient(from 0deg, #f59e0b, #fb923c, #f45328, #2dd4bf, #6366f1, #f59e0b);
    animation: header-rotate-border 4s linear infinite;
    z-index: -2;
  }

  .header-cta::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: inherit;
    background: white;
    z-index: -1;
    transition:
      inset 0.5s ease,
      background 0.5s ease;
  }

  .header-cta:hover {
    color: #ffffff;
    outline: 0.1em solid transparent;
    outline-offset: 0.2em;
    box-shadow:
      0 0 1em 0 var(--header-cta-bg),
      0 16px 34px rgba(249, 115, 22, 0.28);
    animation:
      header-cta-ripple 1s linear infinite,
      header-cta-colorize 1s infinite;
    transition: 0.5s;
  }

  .header-cta:hover::before {
    opacity: 0;
    filter: blur(0);
    animation-play-state: paused;
  }

  .header-cta:hover::after {
    inset: 0;
    background: var(--header-cta-bg);
  }

  .header-cta:active {
    transform: scale(0.95);
  }

  .header-cta span {
    transition: 0.5s;
  }

  .header-cta:hover span {
    text-shadow: 5px 5px 5px var(--header-cta-shadow);
  }

  .header-cta:active span {
    text-shadow: none;
  }

  .header-cta img {
    transition: 0.5s;
  }

  .header-cta:hover img {
    filter: brightness(0) invert(1) drop-shadow(5px 5px 2.5px var(--header-cta-shadow));
  }

  .header-cta:active img {
    filter: none;
  }

  @keyframes header-rotate-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes header-cta-colorize {
    0% {
      background: var(--header-cta-bg);
    }
    50% {
      background: var(--header-cta-bg-hover);
    }
    100% {
      background: var(--header-cta-bg);
    }
  }

  @keyframes header-cta-ripple {
    0% {
      outline: 0em solid transparent;
      outline-offset: -0.1em;
    }
    50% {
      outline: 0.2em solid var(--header-cta-outline);
      outline-offset: 0.2em;
    }
    100% {
      outline: 0.4em solid transparent;
      outline-offset: 0.4em;
    }
  }

  .nav-link {
    position: relative;
    overflow: hidden;
  }

  .nav-link__label,
  .nav-link__hover-line,
  .nav-link__active-line,
  .nav-link__glow {
    position: absolute;
  }

  .nav-link__label {
    position: relative;
    display: inline-block;
    transition:
      transform 280ms cubic-bezier(0.22, 1, 0.36, 1),
      color 220ms ease;
  }

  .nav-link__hover-line,
  .nav-link__active-line,
  .nav-link__glow {
    left: 1rem;
    right: 1rem;
    bottom: 0.2rem;
    border-radius: 9999px;
    pointer-events: none;
  }

  .nav-link__hover-line {
    height: 2px;
    background: var(--color-nav-highlight);
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 340ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  .nav-link__active-line {
    height: 2.5px;
    background: linear-gradient(90deg, rgba(244, 83, 40, 0.35) 0%, var(--color-nav-highlight) 22%, var(--color-nav-highlight) 78%, rgba(244, 83, 40, 0.35) 100%);
    transform: scaleX(0);
    transform-origin: 50% 50%;
    transition: transform 420ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nav-link__glow {
    height: 8px;
    bottom: -0.05rem;
    background: radial-gradient(circle at center, rgba(244, 83, 40, 0.24) 0%, rgba(244, 83, 40, 0.08) 52%, rgba(244, 83, 40, 0) 100%);
    opacity: 0;
    transform: translateY(5px) scaleX(0.45);
    transition:
      opacity 260ms ease,
      transform 380ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nav-link:hover .nav-link__label,
  .nav-link:focus-visible .nav-link__label {
    transform: translateY(-1px);
  }

  .nav-link:hover .nav-link__hover-line,
  .nav-link:focus-visible .nav-link__hover-line {
    transform: scaleX(1);
  }

  .nav-link:hover .nav-link__glow,
  .nav-link:focus-visible .nav-link__glow {
    opacity: 1;
    transform: translateY(0) scaleX(1);
  }

  .nav-link-active {
    color: var(--color-nav-highlight);
  }

  .nav-link-active .nav-link__label {
    transform: translateY(-1px);
  }

  .nav-link-active .nav-link__hover-line {
    transform: scaleX(0);
  }

  .nav-link-active .nav-link__active-line {
    transform: scaleX(1);
  }

  .nav-link-active .nav-link__glow {
    opacity: 1;
    transform: translateY(0) scaleX(1);
  }
`

function LogoBlock({ logoSrc, onNavigate }) {
  return (
    <Link
      to="/"
      onClick={onNavigate('/')}
      className="flex shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1] rounded-xl"
      aria-label="GrowGen Solutions"
    >
      {/* MANUAL KEEP: logo sizing is tuned against the nav and CTA lockup. */}
      {logoSrc ? (
        <img
          src={logoSrc}
          alt="GrowGen Solutions"
          className="site-header__logo w-auto object-contain lg:h-14"
        />
      ) : (
        <div className="site-header__logo-placeholder flex items-center justify-center rounded-xl border border-border bg-white px-3 lg:h-14 lg:w-[172px]">
          <span className="site-header__logo-placeholder-label text-text-muted uppercase font-semibold">
            Logo Placeholder
          </span>
        </div>
      )}
    </Link>
  )
}

function NavLinks({ onNavigate, mobile = false }) {
  return (
    <nav
      className={
        mobile
          ? 'flex flex-col gap-2'
          // MANUAL KEEP: desktop nav sizing is intentionally custom to balance the enlarged CTA/logo at 2xl.
          : 'site-nav--desktop hidden min-w-0 flex-1 items-center justify-center lg:flex lg:gap-1 lg:px-3 xl:gap-2 xl:px-4 2xl:gap-3 2xl:px-6 3xl:gap-4 3xl:px-10'
      }
      aria-label="Primary"
    >
      {navigationItems.map((item) => (
        <NavLink
          key={item.label}
          to={item.href}
          onClick={onNavigate(item.href)}
          className={({ isActive }) =>
            [
              mobile
                ? 'site-nav__link site-nav__link--mobile site-nav__mobile-link w-full rounded-full px-4 py-3 text-left font-medium transition-colors duration-200'
                : 'site-nav__link nav-link px-3 py-2 font-medium transition-colors duration-300 lg:px-3 xl:px-4 2xl:px-5 3xl:px-6',
              isActive
                ? mobile
                  ? 'site-nav__mobile-link--active bg-[#2B1CC1]/10 text-[#2B1CC1]'
                  : 'nav-link-active text-[#2B1CC1]'
                : 'text-text hover:text-[#2B1CC1]',
              mobile && !isActive ? 'w-full rounded-full text-left hover:bg-surface-alt' : '',
              // Added tab focus effect logic using the requested color
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1]'
            ].filter(Boolean).join(' ')
          }
        >
          <span className="nav-link__label relative z-10">{item.label}</span>
          {mobile ? null : (
            <>
              <span aria-hidden="true" className="nav-link__hover-line" />
              <span aria-hidden="true" className="nav-link__active-line" />
              <span aria-hidden="true" className="nav-link__glow" />
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default function Header({ logoSrc }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  const startProjectIconSrc = '/icons/start-project.svg'
  const lastScrollYRef = useRef(0)
  const location = useLocation()
  const navigate = useNavigate()

  const closeMenu = () => setIsMenuOpen(false)

  const handleRouteNavigation = (targetPath) => (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return
    }

    event.preventDefault()

    closeMenu()
    setIsHeaderVisible(true)

    if (targetPath === location.pathname) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      return
    }

    lastScrollYRef.current = 0
    navigate(targetPath, {
      state: {
        scrollMode: 'smooth-top',
        scrollSource: 'header-nav',
      },
    })
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Route changes must close the mobile menu and reveal the sticky header.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false)
    setIsHeaderVisible(true)
    lastScrollYRef.current = window.scrollY
  }, [location.pathname])

  // Keep the production header behavior stable:
  // - transparent at the top
  // - hide on downward scroll
  // - reveal on upward scroll or while the mobile menu is open
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Switch to the glass treatment once the page has moved past the hero edge.
      setIsScrolled(currentScrollY > 20)

      // Always show the header near the top of the page or while the menu is open.
      if (currentScrollY <= 50 || isMenuOpen) {
        setIsHeaderVisible(true)
      } else {
        const scrollDelta = currentScrollY - lastScrollYRef.current

        // Ignore micro-scroll jitter so the header does not flicker.
        if (scrollDelta > 10) {
          setIsHeaderVisible(false)
        }
        // Reveal the header once the user intentionally scrolls upward.
        else if (scrollDelta < -10) {
          setIsHeaderVisible(true)
        }
      }

      lastScrollYRef.current = currentScrollY
    }

    // Sync the initial visual state on mount.
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMenuOpen])

  return (
    <>
      <style>{headerStyles}</style>
      <header
        className={[
          // Shared responsive shell:
          // laptop spacing stays visually close to the current layout,
          // while desktop and large-desktop gain the approved horizontal breathing room.
          'site-header sticky top-0 z-50 mx-auto w-full max-w-[1720px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] 3xl:max-w-[1880px]',
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full',
          isScrolled ? 'bg-transparent' : 'bg-transparent',
        ].join(' ')}
      >
        <div
          className={[
            // The navbar pill keeps its laptop width, then expands progressively on larger screens.
            // ADDED: `relative z-50` explicitly so it floats cleanly above the z-40 backdrop overlay
            'site-header__inner relative z-50 mx-auto w-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
            isScrolled
              ? 'border border-white/30 bg-white/34 shadow-[0_10px_24px_rgba(15,23,42,0.05)] backdrop-blur-md'
              : 'border border-transparent bg-transparent',
          ].join(' ')}
        >
          <div className="site-header__pill flex items-center justify-between gap-2 md:gap-3 lg:gap-4 xl:gap-6 2xl:gap-8 3xl:gap-10">
            <LogoBlock logoSrc={logoSrc} onNavigate={handleRouteNavigation} />

            {/* Promote the inline nav only when there is enough horizontal room for every link and CTA. */}
            <NavLinks onNavigate={handleRouteNavigation} />

            <div className="hidden lg:flex">
              {/* MANUAL KEEP: CTA width and 2xl scale are intentionally custom to preserve the navbar composition. */}
              <Link
                to="/contact"
                onClick={handleRouteNavigation('/contact')}
                className="site-header__cta header-cta w-[200px] shrink-0 justify-center whitespace-nowrap rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1] 2xl:w-[232px] 2xl:px-7 2xl:py-4 3xl:w-[252px] 3xl:px-8"
              >
                <img
                  src={startProjectIconSrc}
                  alt=""
                  aria-hidden="true"
                  className="h-[18px] w-[18px] shrink-0 2xl:h-5 2xl:w-5"
                />
                <span>Start Project Brief</span>
              </Link>
            </div>

            <button
              type="button"
              className="site-header__toggle inline-flex shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/70 text-text transition-colors hover:border-[#2B1CC1] hover:text-[#2B1CC1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1] lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          // CHANGED: Added `absolute left-0 right-0 top-full` to prevent it from pushing the document layout.
          <div className="lg:hidden absolute left-0 right-0 top-full">
            {/* CHANGED: Configured sizes dynamically to perfectly cover the viewport regardless of its nested tree bounds */}
            <div 
              className="fixed top-0 left-1/2 z-40 h-[100vh] w-[100vw] -translate-x-1/2 bg-[#020617]/18 backdrop-blur-[2px]" 
              onClick={closeMenu} 
              aria-hidden="true" 
            />
            <div
              id="mobile-navigation"
              className="site-header__menu site-header__inner relative z-50 mx-auto mt-2 w-full border border-white/30 bg-white/42 backdrop-blur-lg"
            >
              <div className="site-header__menu-panel mx-auto flex w-full flex-col">
                <NavLinks mobile onNavigate={handleRouteNavigation} />

                <Link
                  to="/contact"
                  onClick={handleRouteNavigation('/contact')}
                  className="site-header__cta header-cta inline-flex w-full max-w-[220px] self-center items-center justify-center gap-2 rounded-full px-5 py-3 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B1CC1] sm:w-[200px]"
                >
                  <img
                    src={startProjectIconSrc}
                    alt=""
                    aria-hidden="true"
                    className="h-[15px] w-[15px] shrink-0"
                  />
                  <span>Start Project Brief</span>
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}