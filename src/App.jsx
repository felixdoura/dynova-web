import wordmark from './assets/brand/dynova-wordmark-inverse.svg'
import './App.css'

/**
 * Pantalla de validación del design system.
 * Sirve para confirmar visualmente que cargan:
 *  - Tokens de color (canvas negro, amarillo neón)
 *  - Tipografía (DM Sans + DM Mono desde Google Fonts)
 *  - Logos
 *  - Glow amarillo (la "elevation" de la marca)
 *
 */
function App() {
  return (
    <main className="setup-check">
      <div className="dyn-container">

        <p className="dyn-eyebrow">SETUP / 01 · TOKENS CHECK</p>

        <img
          src={wordmark}
          alt="Dynova"
          className="setup-check__wordmark"
        />

        <h1 className="dyn-h1 setup-check__headline">
          Donde tu marca <span className="setup-check__hl">rompe</span> límites.
        </h1>

        <p className="dyn-lead setup-check__lead">
          Si estás viendo el negro profundo, el amarillo neón sobre el botón,
          y la tipografía DM Sans, los tokens del design system cargaron bien.
        </p>

        <div className="setup-check__actions">
          <button className="setup-check__cta">
            Empezar
          </button>
          <button className="setup-check__ghost">
            Ver paleta
          </button>
        </div>

        <ul className="setup-check__swatches">
          <li><span style={{ background: 'var(--dyn-black)' }} /> <code>--dyn-black</code></li>
          <li><span style={{ background: 'var(--dyn-coal)' }} /> <code>--dyn-coal</code></li>
          <li><span style={{ background: 'var(--dyn-iron)' }} /> <code>--dyn-iron</code></li>
          <li><span style={{ background: 'var(--dyn-yellow)' }} /> <code>--dyn-yellow</code></li>
          <li><span style={{ background: 'var(--dyn-white)' }} /> <code>--dyn-white</code></li>
        </ul>

      </div>
    </main>
  )
}

export default App
