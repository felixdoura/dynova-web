import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Layout.css'

/**
 * Layout — wrapper que envuelve cualquier página.
 * Pone Navbar arriba (sticky), main para contenido, Footer al final.
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="layout__main" id="top">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
