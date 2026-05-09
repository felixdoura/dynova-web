import wordmark from '../../assets/brand/dynova-wordmark-inverse.svg'
import './Footer.css'

/**
 * Footer — cierre de la página.
 * Iconos como SVG inline para no depender de librerías externas.
 */

const IconArrowUpRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
)

const IconInstagram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const IconLinkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const IconMail = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">

      <div className="footer__manifesto">
        <div className="dyn-container">
          <p className="dyn-eyebrow footer__eyebrow">/ Manifiesto</p>
          <h2 className="footer__claim">
            No seguimos<br />
            tendencias.<br />
            <span className="footer__claim-hl">Las creamos.</span>
          </h2>
        </div>
      </div>

      <div className="dyn-container">
        <div className="footer__grid">

          <div className="footer__brand">
            <img src={wordmark} alt="Dynova" className="footer__wordmark" />
            <p className="dyn-body footer__tagline">
              Donde tu marca rompe límites.
            </p>
          </div>

          <div className="footer__col">
            <h3 className="dyn-label footer__col-title">Servicios</h3>
            <ul className="footer__list">
              <li><a href="#servicios">Comunicación On &amp; Off Line</a></li>
              <li><a href="#servicios">Desarrollo Web</a></li>
              <li><a href="#servicios">Eventos &amp; Experiencias</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="dyn-label footer__col-title">Agencia</h3>
            <ul className="footer__list">
              <li><a href="#manifiesto">Manifiesto</a></li>
              <li><a href="#casos">Casos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="dyn-label footer__col-title">Contacto</h3>
            <ul className="footer__list">
              <li>
                <a href="mailto:hola@dynova.ar" className="footer__link-arrow">
                  hola@dynova.ar
                  <IconArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="tel:+5491100000000" className="footer__link-arrow">
                  +54 9 11 0000-0000
                  <IconArrowUpRight size={14} />
                </a>
              </li>
              <li className="footer__location">
                Buenos Aires · Argentina
              </li>
            </ul>
          </div>

        </div>

        <div className="footer__bottom">
          <p className="dyn-mono footer__copy">
            © {year} Dynova · Todos los derechos reservados
          </p>

          <ul className="footer__social" aria-label="Redes sociales">
            <li>
              <a href="#" aria-label="Instagram" className="footer__social-link">
                <IconInstagram size={18} />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <IconLinkedin size={18} />
              </a>
            </li>
            <li>
              <a href="mailto:hola@dynova.ar" aria-label="Email" className="footer__social-link">
                <IconMail size={18} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
