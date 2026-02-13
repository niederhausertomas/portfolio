import tomas from '../../assets/images/tomas.png'
import { useTranslation } from 'react-i18next'

const Header = ({ onViewProjects }) => {
  const { t } = useTranslation()

  return (
    <header className="bg-[#fafafa] min-h-full flex flex-col">
      <section
        className="w-full max-w-4xl mx-auto px-6 pt-20 md:pt-24 pb-20 flex flex-col justify-center items-center flex-1"
        aria-label={t('home')}
      >
        <div className="flex flex-col md:flex-row md:items-end md:gap-12 w-full md:w-auto">
          <img
            className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-full mb-6 md:mb-0 flex-shrink-0 border border-[#e5e5e5]"
            alt="Tomás Niederhauser"
            src={tomas}
          />
          <div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] tracking-tight">
              Tomás <br />
              Niederhauser
            </h1>
            <p className="mt-4 text-lg md:text-xl text-[#666] font-light max-w-xl">
              {t('frontEndDeveloper')}.
            </p>

          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
