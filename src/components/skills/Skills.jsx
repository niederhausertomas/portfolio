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
import mysqlLogo from '../../assets/images/Mysql.png'
import typescriptLogo from '../../assets/images/Typescript.png'

const Skills = () => {
  return (
    <div className="py-8 md:px-10">
      <div className="w-full flex items-center justify-center flex-wrap my-5 overflow-hidden">
        <ul className="list-none text-center p-0 flex flex-nowrap animate-marquee">
          <li className="h-[190px] w-[90px] text-center">
            <img src={htmlLogo} alt="html logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={cssLogo} alt="CSS logo" className="h-[50px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[100px] md:w-[90px] text-center">
            <img src={sassLogo} alt="SASS logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={bootstrapLogo} alt="Bootstrap logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={tailwindLogo} alt="Tailwind logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={javascriptLogo} alt="javascript logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={reactLogo} alt="React.js logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={firebaseLogo} alt="Firebase logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={gitLogo} alt="Git logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={githubLogo} alt="Github logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={cPlusPlusLogo} alt="C++ logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={wordpressLogo} alt="Wordpress logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={vueJsLogo} alt="Vue.js logo" className="h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={mysqlLogo} alt="Mysql logo" className="h-[30px] md:h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
          <li className="h-[190px] w-[90px] text-center">
            <img src={typescriptLogo} alt="Typescript logo" className="h-[30px] md:h-[40px] mt-[75px] mb-[75px] mx-[2px] md:mx-[25px] block" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
