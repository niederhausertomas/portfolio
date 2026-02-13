import { useTranslation } from 'react-i18next'

const sectionTitleClass = 'w-full text-center font-serif text-[#1a1a1a] text-3xl md:text-4xl font-normal mb-12 md:mb-14'

const About = () => {
  const { t } = useTranslation()
  return (
    <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-8">
      <h2 className={sectionTitleClass}>{t('aboutMe')}</h2>
      <div className="text-center px-0 mx-auto max-w-[640px]">
        <p className="text-justify text-base my-6 text-[#555] leading-relaxed font-light">
          {t('aboutP1')}
        </p>
        <p className="text-justify text-base my-6 text-[#555] leading-relaxed font-light">
          {t('aboutP2')}
        </p>
        <p className="text-justify text-base my-6 text-[#555] leading-relaxed font-light">
          {t('aboutP3')}
        </p>
        <p className="text-justify text-base my-6 text-[#555] leading-relaxed font-light">
          {t('aboutP4')}
        </p>
      </div>
    </section>
  )
}

export default About
