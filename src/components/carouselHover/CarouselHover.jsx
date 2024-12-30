import { Link } from "react-router-dom";
import { useState } from "react";
import biorceWeb from '../../assets/images/biorce-web.png';
import aguaKangen from '../../assets/images/aguaKangen.png';
import sunraising from '../../assets/images/sunraising.png';
import collette from '../../assets/images/Collette.png';
import elNidoFutbol from '../../assets/images/ElNidoFutbol.png';
import laPlayita from '../../assets/images/LaPlayita.png';
import felipeNiederhauser from '../../assets/images/Felipe-Niederhauser.png';
import sebasHuergo from '../../assets/images/sebasHuergo.png';
import proyectoDental from '../../assets/images/ProyectoDental.png';
import bCome from '../../assets/images/BcomeBlackFriday.png';

const projects = [
  {
    id: 1,
    name: 'Biorce',
    href: 'https://www.biorce.com/',
    imageSrc: biorceWeb,
  },
  {
    id: 2,
    name: 'Kangen',
    href: 'https://www.kangenargentina.com/',
    imageSrc: aguaKangen,
  },
  {
    id: 3,
    name: 'BCome.',
    href: 'https://bcome-tech.github.io/',
    imageSrc: bCome,
  },
  {
    id: 4,
    name: 'B-energy',
    href: 'https://benergy.ar/',
    imageSrc: sunraising,
  },
  {
    id: 5,
    name: 'Collette',
    href: 'https://colletteconsignment.com/',
    imageSrc: collette,
  },
  {
    id: 6,
    name: 'El Nido Fútbol',
    href: 'https://el-nido.com.ar/',
    imageSrc: elNidoFutbol,
  },
  {
    id: 7,
    name: 'La Playita',
    href: 'https://www.laplayita.com.ar/',
    imageSrc: laPlayita,
  },
  {
    id: 8,
    name: 'Photo Journalist',
    href: 'https://felipe-niederhauser.netlify.app/',
    imageSrc: felipeNiederhauser,
  },
  {
    id: 9,
    name: 'Sebas Huergo',
    href: 'https://niederhausertomas.github.io/SebasHuergo/',
    imageSrc: sebasHuergo,
  },
  {
    id: 10,
    name: 'Proyecto Dental',
    href: 'https://github.com/niederhausertomas/Proyecto-Dental.git',
    imageSrc: proyectoDental,
  },
];

const CarouselHover = () => {

  return (
    <div className="md:flex justify-center gap-1 mx-auto">
      {projects.map((project) => (
        <div
          key={project.id}
          className="items-center flex justify-center relative"
        >
          <div className="transition-all duration-700 rounded-lg w-[80%] md:w-[40px] hover:md:w-[500px] overflow-hidden relative">
          <div className="relative group">

            <img
              className="h-[40px] group-hover:h-[400px] md:h-[400px] w-full object-cover transition-all duration-300 z-10"
              src={project.imageSrc}
              alt={project.name}
            />

            <Link
              to={project.href}
              target="_blank"
              className="md:hidden absolute bottom-5 left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full border-2 border-gray-300 bg-black w-16 h-16 flex items-center justify-center text-xs font-medium text-gray-300 z-20"
            >
              <span className="text-center">{project.name}</span>
            </Link>
          </div>



            <Link
              to={project.href}
              target="_blank"
              className="hidden text-center absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-0 md:inline-block rounded bg-gray-300 px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-medium text-black z-20"
            >
              {project.name}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselHover;
