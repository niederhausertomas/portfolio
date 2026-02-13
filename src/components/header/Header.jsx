import Navbar from '../navbar/Navbar'
import tomas from '../../assets/images/tomas.png'
import { useTranslation } from 'react-i18next'

const scrollToSection = (id) => {
  const el = document.querySelector(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="bg-black w-screen">
      <Navbar />
      <div className="w-full flex flex-wrap p-0 items-center mb-24 md:mb-48">
        <div className="flex justify-center w-full">
          <img
            className="h-[220px] w-[220px] md:h-[250px] md:w-[250px] object-cover rounded-full mt-[70px] mb-4 ring-2 ring-[#333] ring-offset-2 ring-offset-black shadow-xl"
            alt="Tomás Niederhauser"
            src={tomas}
          />
        </div>
        <h2 className="w-full text-center text-[#dfdede] text-3xl md:text-[40px] mt-2 mb-2 font-medium">
          Tomás <br />
          Niederhauser
        </h2>
        <div className="w-full text-center m-0 flex justify-center items-center">
          <h1 className="font-mono text-2xl md:text-5xl text-[#dfdede] whitespace-nowrap overflow-hidden animate-[typing_4s_steps(24)_alternate,blink_1s_infinite_alternate] border-r-2 border-[#dfdede] w-[24ch]">
            {t('frontEndDeveloper')}
          </h1>
        </div>
        <div className="w-full flex justify-center mt-6">
          <button
            type="button"
            onClick={() => scrollToSection('#projects')}
            className="px-6 py-3 rounded-lg bg-accent text-black font-medium hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-black transition-all duration-200"
          >
            {t('viewProjects')}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
