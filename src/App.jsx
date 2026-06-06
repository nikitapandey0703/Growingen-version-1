import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { HomePage } from './features/home/pages/HomePage'
import ScrollToTop from './components/common/ScrollToTop'

const AboutPage = lazy(() =>
  import('./features/about/pages/AboutPage').then((module) => ({
    default: module.AboutPage,
  }))
)
const ContactPage = lazy(() =>
  import('./features/contact/pages/ContactPage').then((module) => ({
    default: module.ContactPage,
  }))
)
const PortfolioPage = lazy(() =>
  import('./features/portfolio/pages/PortfolioPage').then((module) => ({
    default: module.PortfolioPage,
  }))
)
const ServicesPage = lazy(() =>
  import('./features/service/pages/ServicesPage').then((module) => ({
    default: module.ServicesPage,
  }))
)
const ScrollNavigator = lazy(() => import('./components/common/ScrollNavigator'))

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <ScrollToTop />
      <Header logoSrc="/images/hero/logo.png" />
      <div className="flex-1 bg-transparent">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <ScrollNavigator />
      </Suspense>
      <Footer
        logoSrc="/images/hero/logo.png"
        illustrationSrc="/images/banners/footer-character.png"
        width="100%"
        maxWidth="100%"
        minHeight="490px"
      />
     

    </div>
    
  )
}

export default App
