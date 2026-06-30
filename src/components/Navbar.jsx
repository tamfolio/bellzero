import { Phone, Menu, X, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home',     href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About',    href: '#about' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle }     = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg      = scrolled ? 'var(--nav-bg)'  : 'transparent'
  const blur       = scrolled ? 'blur(12px)'     : 'none'
  const shadow     = scrolled ? '0 1px 24px rgba(0,0,0,0.15)' : 'none'
  const py         = scrolled ? '10px' : '20px'
  // Over the hero the overlay is always dark, so links stay white.
  // Once scrolled, use the theme-aware token.
  const linkColor  = scrolled ? 'var(--nav-link)' : 'rgba(255,255,255,0.85)'
  const linkHover  = scrolled ? 'var(--nav-link-hover)' : '#ffffff'

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-500"
      style={{ background: navBg, backdropFilter: blur, boxShadow: shadow, padding: `${py} 0` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home">
          <img src="/Images/bellzero-logo.svg" alt="Bellzero Auto" className="h-9 sm:h-10 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link text-sm font-medium transition-colors duration-200"
              style={{ color: linkColor, textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
            >
              {l.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: '36px', height: '36px',
              background: scrolled ? 'var(--card-bg)' : 'rgba(255,255,255,0.12)',
              border: `1px solid ${scrolled ? 'var(--card-border)' : 'rgba(255,255,255,0.2)'}`,
              color: scrolled ? 'var(--text-primary)' : '#fff',
              cursor: 'pointer',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <a
            href="tel:+19194754541"
            className="flex items-center gap-2 text-white text-sm font-semibold rounded-md transition-all duration-300 hover:scale-105"
            style={{ background: '#CC0000', padding: '9px 20px', textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#a80000')}
            onMouseLeave={e => (e.currentTarget.style.background = '#CC0000')}
          >
            <Phone size={13} />
            Call Now
          </a>
        </div>

        {/* Mobile: toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center justify-center rounded-full"
            style={{
              width: '34px', height: '34px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              cursor: 'pointer',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button className="text-white p-1" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t px-4 sm:px-6 py-5 flex flex-col gap-5"
          style={{
            background: 'var(--nav-bg)',
            backdropFilter: 'blur(12px)',
            borderColor: 'var(--card-border)',
          }}
        >
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--nav-link)', textDecoration: 'none' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+19194754541"
            className="flex items-center gap-2 text-white text-sm font-semibold rounded-md w-fit"
            style={{ background: '#CC0000', padding: '10px 20px', textDecoration: 'none' }}
          >
            <Phone size={13} />
            +1 919-475-4541
          </a>
        </div>
      )}
    </nav>
  )
}
