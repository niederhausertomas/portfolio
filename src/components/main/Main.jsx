
import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
import Experience from '../experience/Experience'
import CarouselHover from '../carouselHover/CarouselHover'
import Studies from '../Studies'
import { useTranslation } from 'react-i18next'

const Main = () => {
	const { t } = useTranslation()

  return (
    <main className='w-full'>

      <h2 className="p-10 pb-0 mb-0 w-full text-[50px] text-center text-[#dfdede] mt-[30px]" id="experience">
        {t("experience")}
      </h2>
      <Experience/>

      <h2 className="text-center m-[50px] text-[#dfdede] text-[50px]" id="projects">
        {t("projects")}
      </h2>
      <CarouselHover/>
      
      <h2 className="p-10 w-full h-[150px] text-[50px] text-center text-[#dfdede] mt-[30px]" id="Skills">
        {t("skills")}
      </h2>
      <Skills/>

      
      <h2 className="p-10 pb-0 mb-0 w-full text-[50px] text-center text-[#dfdede] mt-[30px]" id="studies">
        {t("studies")}
      </h2>
      <Studies/>

      <h2 className="p-10 w-full h-[150px] text-[50px] text-center text-[#dfdede]" id="about">
        {t("aboutMe")}
      </h2>
      
    <div className="text-center px-[25px] mx-auto max-w-[700px]">
        <p className="text-justify text-base m-[25px] text-[#aaa8a8]">
          {t("Hello! I'm Tomás, a passionate front-end developer. After a career as a lawyer, I discovered my true calling in programming and made the life-changing decision to dive into tech.")}
		    </p>

		    <p className="text-justify text-base m-[25px] text-[#aaa8a8]">  
          {t("I'm skilled in C++, HTML, CSS, JavaScript, and React.js, having studied at institutions like the National Technological University of Argentina, CoderHouse, and Devrock School. I've also gained hands-on experience with WordPress/PHP, Vue.js, MySQL, and TypeScript, continually learning through tutorials and developer communities to stay current.")}
		    </p>

		    <p className="text-justify text-base m-[25px] text-[#aaa8a8]">  
			    {t("I thrive in collaborative environments, value open communication, and enjoy helping others succeed. My goal is to keep growing as a programmer and, one day, pass on my knowledge to others.")}
        </p>
      </div>

      <Contact/>
    </main>
  )
}

export default Main
