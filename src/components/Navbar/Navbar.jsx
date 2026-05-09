import { useState, useEffect } from 'react'
import wordmark from '../../assets/brand/dynova-wordmark-inverse.svg'
import './Navbar.css'

/**
 * Navbar — sticky, fondo translúcido con blur cuando hay scroll.
 * Iconos hamburguesa/cerrar como SVG inline.
 */

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Manifiesto', href: '#manifiesto' },
  { label: 'Casos', href: '#casos' },
  { label: 'Contacto', href: '#contacto' },
]

const IconMenu = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const IconX = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="dyn-container navbar__inner">

        <a href="#top" className="navbar__brand" aria-label="Dynova — Inicio">
          <img src={wordmark} alt="Dynova" className="navbar__wordmark" />
        </a>

        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contacto" className="navbar__cta">
          Empezar
        </a>

        <button
          className="navbar__toggle"
          onClick={() => setIsOpen(v => !v)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu size={24} />}
        </button>

      </div>

      <div className={`navbar__drawer ${isOpen ? 'navbar__drawer--open' : ''}`}>
        <nav aria-label="Navegación móvil">
          <ul className="navbar__drawer-list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__drawer-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                className="navbar__cta navbar__cta--mobile"
                onClick={handleLinkClick}
              >
                Empezar
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
