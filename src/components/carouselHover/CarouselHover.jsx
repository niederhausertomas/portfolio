import { useState } from 'react'
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

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
)

const projects = [
  { id: 1, name: 'Biorce', href: 'https://www.biorce.com/', imageSrc: biorceWeb },
  { id: 2, name: 'Kangen', href: 'https://www.kangenargentina.com/', imageSrc: aguaKangen },
  { id: 3, name: 'BCome.', href: 'https://bcome-tech.github.io/', imageSrc: bCome },
  { id: 4, name: 'B-energy', href: 'https://benergy.ar/', imageSrc: sunraising },
  { id: 5, name: 'Collette', href: 'https://colletteconsignment.com/', imageSrc: collette },
  { id: 6, name: 'El Nido Fútbol', href: 'https://el-nido.com.ar/', imageSrc: elNidoFutbol },
  { id: 7, name: 'La Playita', href: 'https://www.laplayita.com.ar/', imageSrc: laPlayita },
  { id: 8, name: 'Photo Journalist', href: 'https://felipe-niederhauser.netlify.app/', imageSrc: felipeNiederhauser },
  { id: 9, name: 'Sebas Huergo', href: 'https://niederhausertomas.github.io/SebasHuergo/', imageSrc: sebasHuergo },
  { id: 10, name: 'Proyecto Dental', href: 'https://github.com/niederhausertomas/Proyecto-Dental.git', imageSrc: proyectoDental },
]

const CarouselHover = () => {
  const [mobileExpandedId, setMobileExpandedId] = useState(null)

  return (
    <div className="md:flex justify-center gap-1 mx-auto md:items-end">
      {projects.map((project) => {
        const isMobileExpanded = mobileExpandedId === project.id
        return (
          <div key={project.id} className="items-center flex justify-center relative md:items-end">
            <div
              className={`
                transition-all duration-500 rounded-lg overflow-hidden
                w-[80%] md:w-[40px] hover:md:w-[500px] md:duration-700
                md:flex md:flex-col md:h-[456px]
                ${isMobileExpanded ? 'w-[95%]' : ''}
              `}
            >
              <div className="relative group md:flex-1 md:min-h-0 md:flex md:items-center">
                <img
                  className={`
                    h-[40px] md:h-full md:min-h-[400px] w-full object-cover transition-all duration-300 z-10
                    group-hover:md:scale-105
                    ${isMobileExpanded ? 'h-[280px]' : 'group-hover:h-[400px]'}
                  `}
                  src={project.imageSrc}
                  alt={project.name}
                  onClick={() => setMobileExpandedId(isMobileExpanded ? null : project.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setMobileExpandedId(isMobileExpanded ? null : project.id)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isMobileExpanded}
                  aria-label={isMobileExpanded ? `${project.name}, close` : `${project.name}, tap to expand`}
                />
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-20
                    flex items-center justify-center gap-1
                    rounded-lg bg-accent text-black px-4 py-2 text-sm font-medium
                    transition-all duration-300
                    ${isMobileExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                  `}
                >
                  {project.name}
                  <ExternalLinkIcon />
                </a>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center justify-center gap-1 flex-shrink-0 h-14 rounded-b-lg bg-gray-200 px-3 py-2 text-sm font-medium text-black z-20 hover:bg-accent transition-colors duration-200"
              >
                {project.name}
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CarouselHover
