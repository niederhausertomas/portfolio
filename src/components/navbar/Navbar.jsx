import { useState, useEffect } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { FlagIcon } from 'react-flag-kit'

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = './ResumeTomasNiederhauser.pdf'
  link.setAttribute('download', 'ResumeTomasNiederhauser.pdf')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const scrollToSection = (id) => {
  const element = document.querySelector(id)
  if (element) {
    const offset = 80
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const sectionIds = ['#experience', '#projects', '#skills', '#studies', '#about', '#contact']

function getActiveSection() {
  const scrollY = window.scrollY + 120
  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const el = document.querySelector(sectionIds[i])
    if (el && el.offsetTop <= scrollY) return sectionIds[i]
  }
  return sectionIds[0]
}

export default function Navbar() {
  const { i18n, t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#experience')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      setActiveSection(getActiveSection())
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setActiveSection(href)
    scrollToSection(href)
    document.querySelector('[data-mobile-menu-toggle]')?.click()
  }

  const handleDesktopNavClick = (href) => {
    setActiveSection(href)
    scrollToSection(href)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const navigation = [
    { name: t('experience'), href: '#experience' },
    { name: t('projects'), href: '#projects' },
    { name: t('skills'), href: '#skills' },
    { name: t('studies'), href: '#studies' },
    { name: t('aboutMe'), href: '#about' },
    { name: t('contact'), href: '#contact' },
  ]

  const navButtonClass = (href) =>
    `px-3 py-2 text-sm rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black ${
      activeSection === href
        ? 'text-[#22d3ee] font-medium focus:text-[#22d3ee] focus:ring-[#22d3ee]'
        : 'text-[#aaa8a8] hover:text-[#e5e5e5] focus:text-[#aaa8a8] focus:ring-[#aaa8a8]'
    }`

  return (
    <Disclosure as="nav" className={`fixed top-0 w-screen z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
      {({ open }) => (
        <>
          <div className="md:mx-auto px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between w-full">
              <div className="flex items-center min-w-0">
                <div className="flex items-center sm:hidden mr-2">
                  <Disclosure.Button
                    data-mobile-menu-toggle
                    className="bg-white/10 hover:bg-white/20 inline-flex items-center justify-center rounded-md p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                  >
                    {open ? (
                      <XMarkIcon className="block h-6 w-6 text-white" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:flex sm:space-x-1">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleDesktopNavClick(item.href)}
                      className={navButtonClass(item.href)}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={downloadResume}
                  className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#4a4a4a] text-[#e5e5e5] font-medium hover:bg-[#3a3a3a] border border-[#555] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#6b6b6b] focus:ring-offset-2 focus:ring-offset-black"
                >
                  {t('resume')}
                </button>
                <button
                  onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                  className="p-2 rounded-md text-[#aaa8a8] hover:text-[#e5e5e5] hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a español'}
                >
                  {i18n.language === 'es' ? (
                    <FlagIcon code="ES" size={25} />
                  ) : (
                    <FlagIcon code="GB" size={25} />
                  )}
                </button>
                <a
                  href="https://wa.me/34600517772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 flex items-center justify-center rounded-full text-[#aaa8a8] hover:text-accent hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-black/98 border-b border-white/10">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${navButtonClass(item.href)}`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="pt-2 border-t border-white/10 mt-2">
                <Disclosure.Button
                  as="button"
                  onClick={downloadResume}
                  className="w-full text-left px-3 py-2 rounded-md text-accent font-medium"
                >
                  {t('resume')}
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
