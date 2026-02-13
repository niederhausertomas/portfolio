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

export default function Navbar({ currentSection, onSectionChange }) {
  const { i18n, t } = useTranslation()

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')
  }

  const navigation = [
    { name: t('home'), section: 'home' },
    { name: t('projects'), section: 'projects' },
    { name: t('experience'), section: 'experience' },
    { name: t('studies'), section: 'studies' },
    { name: t('aboutMe'), section: 'about' },
    { name: t('contact'), section: 'contact' },
  ]

  const handleNavClick = (section) => {
    onSectionChange(section)
    document.querySelector('[data-mobile-menu-toggle]')?.click()
  }

  const navLinkClass = (section) =>
    `text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a1a1a] rounded px-1 py-2 text-left ${
      currentSection === section ? 'text-[#1a1a1a]' : 'text-[#666] hover:text-[#1a1a1a]'
    }`

  const closeMobileMenu = () => {
    document.querySelector('[data-mobile-menu-toggle]')?.click()
  }

  return (
    <>
      {/* Mobile: barra superior con hamburger */}
      <Disclosure
        as="nav"
        className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-4 bg-[#fafafa] border-b border-[#e5e5e5] md:hidden"
      >
        {({ open }) => (
          <>
            <Disclosure.Button
              data-mobile-menu-toggle
              className="inline-flex items-center justify-center rounded-md p-2 text-[#1a1a1a] hover:bg-[#eee] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
              aria-label="Abrir menú"
            >
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </Disclosure.Button>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadResume}
                className="px-3 py-2 text-sm font-medium text-[#1a1a1a] hover:underline"
              >
                {t('resume')}
              </button>
              <button
                onClick={changeLanguage}
                className="p-2 rounded-md text-[#666] hover:text-[#1a1a1a] hover:bg-[#eee]"
                aria-label="Idioma"
              >
                {i18n.language === 'es' ? <FlagIcon code="ES" size={22} /> : <FlagIcon code="GB" size={22} />}
              </button>
            </div>
            {/* Overlay: al hacer click fuera del menú se cierra */}
            {open && (
              <div
                className="fixed inset-0 top-16 z-40 bg-black/20 md:hidden"
                onClick={closeMobileMenu}
                onKeyDown={(e) => e.key === 'Escape' && closeMobileMenu()}
                aria-hidden="true"
              />
            )}
            <Disclosure.Panel className="absolute left-0 right-0 top-16 z-[51] bg-[#fafafa] border-b border-[#e5e5e5] shadow-sm">
              <div className="space-y-1 px-4 py-4">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.section}
                    as="button"
                    onClick={() => handleNavClick(item.section)}
                    className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${navLinkClass(item.section)}`}
                  >
                    {item.name.toUpperCase()}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Desktop: sidebar fija a la izquierda */}
      <aside
        aria-label="Navegación principal"
        className="hidden md:flex fixed left-0 top-0 bottom-0 z-40 w-[160px] flex-col border-r border-[#e5e5e5] bg-[#fafafa]"
      >
        <nav className="flex flex-col gap-1 pt-24 px-4">
          {navigation.map((item) => (
            <button
              key={item.section}
              onClick={() => onSectionChange(item.section)}
              className={navLinkClass(item.section)}
            >
              {item.name.toUpperCase()}
            </button>
          ))}
        </nav>
        <div className="mt-auto px-4 pb-8 flex flex-col gap-3">
          <button
            onClick={downloadResume}
            className="text-left text-sm font-medium text-[#1a1a1a] hover:underline py-1"
          >
            {t('resume')}
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={changeLanguage}
              className="p-2 rounded-md text-[#666] hover:text-[#1a1a1a] hover:bg-[#eee] transition-colors"
              aria-label="Idioma"
            >
              {i18n.language === 'es' ? <FlagIcon code="ES" size={20} /> : <FlagIcon code="GB" size={20} />}
            </button>
            <a
              href="https://wa.me/34600517772"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-[#666] hover:text-[#1a1a1a] hover:bg-[#eee] transition-colors"
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
