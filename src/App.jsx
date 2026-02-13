import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Experience from './components/experience/Experience'
import CarouselHover from './components/carouselHover/CarouselHover'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Studies from './components/Studies'
import { useTranslation } from 'react-i18next'

const sectionTitleClass = 'w-full text-center font-serif text-[#1a1a1a] text-3xl md:text-4xl font-normal mb-12 md:mb-14'

function AppContent() {
  const { t } = useTranslation()
  const [currentSection, setCurrentSection] = useState('home')

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Header onViewProjects={() => setCurrentSection('projects')} />
      case 'projects':
        return (
          <div className="bg-[#fafafa] min-h-full py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <h2 className={sectionTitleClass}>{t('projects')}</h2>
              <CarouselHover />
            </div>
          </div>
        )
      case 'experience':
        return (
          <div className="bg-[#fafafa] min-h-full pt-20 md:pt-28 pb-8 md:pb-12">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <h2 className={sectionTitleClass}>{t('experience')}</h2>
              <Experience />
            </div>
          </div>
        )
      case 'studies':
        return (
          <div className="bg-[#fafafa] min-h-full py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-6 md:px-8">
              <h2 className={sectionTitleClass}>{t('studies')}</h2>
              <Studies />
            </div>
          </div>
        )
      case 'about':
        return <About />
      case 'contact':
        return (
          <div className="bg-[#fafafa] min-h-full">
            <Contact />
          </div>
        )
      default:
        return <Header onViewProjects={() => setCurrentSection('projects')} />
    }
  }

  return (
    <div className="md:pl-[160px] h-screen flex flex-col overflow-hidden bg-[#fafafa]">
      <Navbar currentSection={currentSection} onSectionChange={setCurrentSection} />
      <div className={`flex-1 min-h-0 ${
          currentSection === 'contact' || currentSection === 'studies'
            ? 'overflow-y-auto md:overflow-hidden'
            : 'overflow-y-auto'
        }`}>
        {renderSection()}
      </div>
      <Footer onNavigateToContact={() => setCurrentSection('contact')} />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
