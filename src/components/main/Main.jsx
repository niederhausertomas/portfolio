import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import CarouselHover from '../carouselHover/CarouselHover'
import Studies from '../Studies'
import { useTranslation } from 'react-i18next'

const sectionTitleClass = 'w-full text-center font-serif text-[#1a1a1a] text-3xl md:text-4xl font-normal mb-12 md:mb-14'

const Main = () => {
  const { t } = useTranslation()

  return (
    <main className="w-full bg-[#fafafa] max-w-4xl mx-auto px-6 md:px-8">
      <section className="py-20 md:py-28 scroll-mt-20" id="experience">
        <h2 className={sectionTitleClass}>{t('experience')}</h2>
        <Experience />
      </section>

      <section className="py-20 md:py-28 scroll-mt-20" id="projects">
        <h2 className={sectionTitleClass}>{t('projects')}</h2>
        <CarouselHover />
      </section>

      <section className="py-20 md:py-28 scroll-mt-20" id="skills">
        <h2 className={sectionTitleClass}>{t('skills')}</h2>
        <Skills />
      </section>

      <section className="py-20 md:py-28 scroll-mt-20" id="studies">
        <h2 className={sectionTitleClass}>{t('studies')}</h2>
        <Studies />
      </section>

      <section className="py-20 md:py-28 scroll-mt-20" id="about">
        <h2 className={sectionTitleClass}>{t('aboutMe')}</h2>
        <div className="text-center px-0 mx-auto max-w-[640px]">
          <p className="text-justify text-base my-6 text-[#555] leading-relaxed font-light">
            {t("Hello! I'm Tomás, a passionate front-end developer. After a career as a lawyer, I discovered my true calling in programming and made the life-changing decision to dive into tech.")}
          </p>
          <p className="text-justify text-base my-6 text-[#555] leading-relaxed font-light">
            {t("I'm skilled in C++, HTML, CSS, JavaScript, and React.js, having studied at institutions like the National Technological University of Argentina, CoderHouse, and Devrock School. I've also gained hands-on experience with WordPress/PHP, Vue.js, MySQL, and TypeScript, continually learning through tutorials and developer communities to stay current.")}
          </p>
          <p className="text-justify text-base my-6 text-[#555] leading-relaxed font-light">
            {t("I thrive in collaborative environments, value open communication, and enjoy helping others succeed. My goal is to keep growing as a programmer and, one day, pass on my knowledge to others.")}
          </p>
        </div>
      </section>

      <Contact />
    </main>
  )
}

export default Main
