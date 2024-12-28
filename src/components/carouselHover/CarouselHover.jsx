import { Link } from "react-router-dom"
import { useState } from "react"
import biorceWeb from '../../assets/images/biorce-web.png'
import aguaKangen from '../../assets/images/aguaKangen.png'
import sunraising from '../../assets/images/sunraising.png'
import collette from '../../assets/images/Collette.png'
import elNidoFutbol from '../../assets/images/ElNidoFutbol.png'
import laPlayita from '../../assets/images/LaPlayita.png'
import felipeNiederhauser from '../../assets/images/Felipe-Niederhauser.png'
import sebasHuergo from '../../assets/images/sebasHuergo.png'
import proyectoDental from '../../assets/images/ProyectoDental.png'
import bCome from '../../assets/images/BcomeBlackFriday.png'


const projects = [
  {
    id: 1,
    name: 'Biorce',
    href: 'https://www.biorce.com/',
    imageSrc: biorceWeb
  },
  {
    id: 2,
    name: 'Kangen',
    href: 'https://www.kangenargentina.com/',
    imageSrc: aguaKangen
  },
  {
    id: 3,
    name: 'BCome.',
    href: 'https://bcome-tech.github.io/',
    imageSrc: bCome
  },
  {
    id: 4,
    name: 'B-energy',
    href: 'https://benergy.ar/',
    imageSrc: sunraising
  },
  {
    id: 5,
    name: 'Collette',
    href: 'https://colletteconsignment.com/',
    imageSrc: collette
  },
  {
    id: 6,
    name: 'El Nido Fútbol',
    href: 'https://el-nido.com.ar/',
    imageSrc: elNidoFutbol
  },
  {
    id: 7,
    name: 'La Playita',
    href: 'https://www.laplayita.com.ar/',
    imageSrc: laPlayita
  },
  {
    id: 8,
    name: 'Felipe Niederhauser Photo Journalist',
    href: 'https://felipe-niederhauser.netlify.app/',
    imageSrc: felipeNiederhauser
  },
  {
    id: 9,
    name: 'Sebas Huergo',
    href: 'https://niederhausertomas.github.io/SebasHuergo/',
    imageSrc: sebasHuergo
  },
  {
    id: 10,
    name: 'Proyecto Dental',
    href: 'https://github.com/niederhausertomas/Proyecto-Dental.git',
    imageSrc: proyectoDental
  }
]

const CarouselHover = () => {
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  return (
    <div className="md:flex justify-center gap-1 mx-auto">
      {projects.map((project) => (
        <div 
          key={project.id}
          className="items-center flex justify-center"
          onMouseEnter={() => setHoveredProjectId(project.id)}
          onMouseLeave={() => setHoveredProjectId(null)}
        >
          <div className={`transition-all duration-700 rounded-lg w-[80%] md:w-[40px] hover:md:w-[500px] overflow-hidden relative`}>
            <img className="h-[40px] hover:h-[400px] md:h-[400px] w-full object-cover" src={project.imageSrc} alt="" />
            <Link
              to={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0 inline-block rounded bg-gray-300 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-black hover:bg-gray-100 z-5"
            >
              {project.name}
            </Link>
          </div>    
        </div>
      ))}
    </div>
  )
}

export default CarouselHover
