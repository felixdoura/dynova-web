import Layout from './components/Layout/Layout'
import './App.css'

/**
 * App — root. Por ahora monta el Layout con placeholders del Home.
 * En los próximos pasos vamos a reemplazar el contenido por las secciones reales:
 *   - Hero (Paso 3)
 *   - Servicios (Paso 4)
 *   - Manifiesto (Paso 5)
 *   - Casos (Paso 6)
 *   - Contacto (Paso 7)
 */
function App() {
  return (
    <Layout>

      <section className="placeholder placeholder--hero" id="hero">
        <div className="dyn-container">
          <p className="dyn-eyebrow">/ Paso 02 · Layout listo</p>
          <h1 className="dyn-h1 placeholder__title">
            Acá va el <span className="placeholder__hl">Hero</span>.
          </h1>
          <p className="dyn-lead placeholder__lead">
            En esta parte va la sección hero. Hay que probar algunas cosas todavía, uno de 
            los puntos es que hay que probar es que cuando se hace el scroll la barra superior
            desaparezca o difumine, también probar el comportamiento en dispositivos móviles.
          </p>
        </div>
      </section>

      <section className="placeholder placeholder--alt" id="servicios">
        <div className="dyn-container">
          <p className="dyn-eyebrow">/ Sección</p>
          <h2 className="dyn-h2 placeholder__title">Servicios</h2>
          <p className="dyn-lead placeholder__lead">(Paso 4)</p>
        </div>
      </section>

      <section className="placeholder" id="manifiesto">
        <div className="dyn-container">
          <p className="dyn-eyebrow">/ Sección</p>
          <h2 className="dyn-h2 placeholder__title">Manifiesto</h2>
          <p className="dyn-lead placeholder__lead">(Paso 5)</p>
        </div>
      </section>

      <section className="placeholder placeholder--alt" id="casos">
        <div className="dyn-container">
          <p className="dyn-eyebrow">/ Sección</p>
          <h2 className="dyn-h2 placeholder__title">Casos</h2>
          <p className="dyn-lead placeholder__lead">(Paso 6)</p>
        </div>
      </section>

      <section className="placeholder" id="contacto">
        <div className="dyn-container">
          <p className="dyn-eyebrow">/ Sección</p>
          <h2 className="dyn-h2 placeholder__title">Contacto</h2>
          <p className="dyn-lead placeholder__lead">(Paso 7)</p>
        </div>
      </section>

    </Layout>
  )
}

export default App
