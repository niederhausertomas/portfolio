import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import { FlagIcon } from 'react-flag-kit';

const downloadResume = () => {
  const url = './ResumeTomasNiederhauser.pdf';
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'ResumeTomasNiederhauser.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const scrollToSection = (id) => {
  const element = document.querySelector(id);
  const offset = 80;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

export default function Navbar() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const navigation = [
    { name: t('experience'), href: '#experience' },
    { name: t('projects'), href: '#projects' },
    { name: t('skills'), href: '#Skills' },
    { name: t('studies'), href: '#studies' },
    { name: t('aboutMe'), href: '#about' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <Disclosure as="nav" className="fixed bg-black top-0 w-screen z-50">
      {({ open }) => (
        <>
          <div className="md:mx-auto px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="bg-white inline-flex items-center justify-center rounded-md p-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className="text-[#aaa8a8] hover:text-[#d1cfcf] px-3 py-2 text-sm hover:pt-[11px] hover:-mb-[3px] transition-all duration-500"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={downloadResume}
                className="fixed top-[15px] right-[140px] text-center z-[10] cursor-pointer bg-white px-3 py-1 rounded flex items-center justify-center"
              >
                {t('resume')}
              </button>

              <button
                onClick={() => changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
                className="fixed top-[15px] right-[70px] items-center text-[#aaa8a8] hover:text-[#d1cfcf] md:px-3 py-2 text-sm z-[10]"
              >
                {i18n.language === 'es' ? (
                  <FlagIcon code="ES" size={25} />
                ) : (
                  <FlagIcon code="GB" size={25} />
                )}
              </button>

              <a
                href="https://wa.me/34600517772"
                target="blank"
                className="fixed top-[10px] right-[20px] h-[40px] w-[40px] leading-[35px] text-center text-[#aaa8a8] rounded-full cursor-pointer z-[10] flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="button"
                  onClick={() => scrollToSection(item.href)}
                  className="text-[#aaa8a8] hover:text-[#d1cfcf] block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
