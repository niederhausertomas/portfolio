import htmlLogo from '../../assets/images/html.png'
import cssLogo from '../../assets/images/css.png'
import sassLogo from '../../assets/images/sass.png'
import bootstrapLogo from '../../assets/images/Bootstrap.png'
import tailwindLogo from '../../assets/images/tailwind.png'
import javascriptLogo from '../../assets/images/javascript.png'
import reactLogo from '../../assets/images/react.png'
import firebaseLogo from '../../assets/images/firebase.png'
import gitLogo from '../../assets/images/git.png'
import githubLogo from '../../assets/images/github.png'
import cPlusPlusLogo from '../../assets/images/c++.png'
import wordpressLogo from '../../assets/images/wordpress.png'
import vueJsLogo from '../../assets/images/vueJs.png'
import typescriptLogo from '../../assets/images/Typescript.png'

const skills = [
  { src: htmlLogo, alt: 'HTML logo' },
  { src: cssLogo, alt: 'CSS logo', imgClassName: 'h-[50px]' },
  { src: sassLogo, alt: 'SASS logo', liClassName: 'w-[100px] md:w-[90px]' },
  { src: bootstrapLogo, alt: 'Bootstrap logo' },
  { src: tailwindLogo, alt: 'Tailwind logo' },
  { src: javascriptLogo, alt: 'JavaScript logo' },
  { src: reactLogo, alt: 'React.js logo' },
  { src: firebaseLogo, alt: 'Firebase logo' },
  { src: gitLogo, alt: 'Git logo' },
  { src: githubLogo, alt: 'GitHub logo' },
  { src: cPlusPlusLogo, alt: 'C++ logo' },
  { src: wordpressLogo, alt: 'WordPress logo' },
  { src: vueJsLogo, alt: 'Vue.js logo' },
  { src: typescriptLogo, alt: 'TypeScript logo', imgClassName: 'h-[30px] md:h-[40px]' },
]

const defaultImgClass = 'h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block'
const defaultLiClass = 'h-[190px] w-[90px] text-center'

const Skills = () => {
  return (
    <div className="py-8 md:px-10 group/skills">
      <div className="w-full flex items-center justify-center flex-wrap my-5 overflow-hidden">
        <ul className="list-none text-center p-0 flex flex-nowrap animate-marquee group-hover/skills:[animation-play-state:paused]">
          {skills.map((skill) => (
            <li
              key={skill.alt}
              className={`${defaultLiClass} ${skill.liClassName ?? ''}`}
            >
              <img
                src={skill.src}
                alt={skill.alt}
                className={skill.imgClassName ? `${skill.imgClassName} mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block` : defaultImgClass}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
