import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
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
    name: 'Biorce web',
    href: 'https://www.biorce.com/',
    imageSrc: biorceWeb,
    description: 'Web App React.js - Vite',
  },
  {
    id: 2,
    name: 'Agua Kangen',
    href: 'https://www.kangenargentina.com/',
    imageSrc: aguaKangen,
    description: 'Website for "Agua Kangen". HTML, CSS, JAVASCRIPT.',
  },
  {
    id: 3,
    name: 'B-come Black Friday',
    href: 'https://bcome-tech.github.io/',
    imageSrc: bCome,
    description: 'html - css - js',
  },
  {
    id: 4,
    name: 'B-energy',
    href: 'https://benergy.ar/',
    imageSrc: sunraising,
    description: 'Website for "B-energy". HTML, CSS, JAVASCRIPT.',
  },
  {
    id: 5,
    name: 'Collette',
    href: 'https://colletteconsignment.com/',
    imageSrc: collette,
    description: 'Website for Collette.',
  },
  {
    id: 6,
    name: 'El Nido Fútbol',
    href: 'https://el-nido.com.ar/',
    imageSrc: elNidoFutbol,
    description: 'Website for El Nido Fútbol.',
  },
  {
    id: 7,
    name: 'La Playita',
    href: 'https://www.laplayita.com.ar/',
    imageSrc: laPlayita,
    description: 'Website for La Playita.',
  },
  {
    id: 8,
    name: 'Felipe Niederhauser Photo Journalist',
    href: 'https://felipe-niederhauser.netlify.app/',
    imageSrc: felipeNiederhauser,
    description: 'Web App React.js',
  },
  {
    id: 9,
    name: 'Sebas Huergo web',
    href: 'https://niederhausertomas.github.io/SebasHuergo/',
    imageSrc: sebasHuergo,
    description: 'Website for the film director. HTML, CSS Y JAVASCRIPT.',
  },
  {
    id: 10,
    name: 'Proyecto Dental',
    href: 'https://github.com/niederhausertomas/Proyecto-Dental.git',
    imageSrc: proyectoDental,
    description: 'Dental Project',
  }
]

export default function Carousel() {
  return (
    <div className="relative overflow-hidden bg-black [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden sm:[&_.swiper-button-next]:block sm:[&_.swiper-button-prev]:block [&_.swiper-button-next]:!w-8 [&_.swiper-button-prev]:!w-8 [&_.swiper-button-next::after]:!text-xl [&_.swiper-button-prev::after]:!text-xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4 sm:py-12 lg:py-16 xs:aspect-auto w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          navigation={{
            enabled: true,
            hideOnClick: false,
          }}

          className=" xs:max-w-[300px] max-w-[600px] md:max-w-xl lg:max-w-2xl mx-auto"
          speed={800}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="aspect-[16/9]  rounded-lg relative min-w-[200px]">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-2 sm:mt-4 text-center">
                <h3 className="text-sm sm:text-base md:text-xl font-bold text-[#aaa8a8]">
                  {project.name}
                </h3>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-[#aaa8a8]">
                  {project.description}
                </p>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-4 inline-block rounded bg-white px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-black hover:bg-gray-100"
                >
                  Ver proyecto
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}





