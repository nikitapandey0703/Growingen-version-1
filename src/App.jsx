import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { AboutPage } from './features/about'
import { ContactPage } from './features/contact'
import { HomePage } from './features/home/pages/HomePage'
import { PortfolioPage } from './features/portfolio'
import { ServicesPage } from './features/service'
import ScrollNavigator from './components/common/ScrollNavigator'
import ScrollToTop from './components/common/ScrollToTop'


function App() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <ScrollToTop />
      <Header logoSrc="/images/hero/logo.png" />
      <div className="flex-1 bg-transparent">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <ScrollNavigator />
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
