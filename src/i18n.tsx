import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "home" : "Home",
          "projects" : "Projects",
          "skills" : "Skills",
          "studies" : "Studies",
          "aboutMe" : "About me",
          "aboutP1": "Hi, I'm Tomás - a Frontend Team Lead focused on building scalable, high-performance web applications with React and TypeScript.",
          "aboutP2": "I currently lead a team of engineers at Biorce, where I drive frontend architecture, technical direction, and delivery quality across the product. My role combines hands-on development with system design, performance optimization, and team leadership.",
          "aboutP3": "I specialize in designing scalable frontend architectures, improving developer experience, and aligning technical decisions with product and business goals. I care deeply about building systems that are maintainable, fast, and easy to evolve over time.",
          "aboutP4": "Before working in tech, I studied law - a background that shaped my structured thinking, communication skills, and approach to problem-solving. Since transitioning into software development, I've grown from developer to team lead, focusing on both technical excellence and team performance.",
          "aboutP5": "I enjoy working in environments where ownership, clarity, and continuous improvement are core values, and I'm always looking to grow as a technical leader while delivering meaningful product impact.",
          "contact" : "Contact",
          "resume" : "Resume",
          "experience":"Experience",
          "name":"Name",
          "e-mail":"E-mail",
          "message":"Message",
          "submit":"Submit",
          "professionalHeadline": "Frontend Developer | React | TypeScript",
          "professionalSubtitle": "I lead frontend teams, design scalable architectures, and improve performance and DX in React + TypeScript applications.",
          "messageSent": "Message sent!",
          "viewProjects": "View projects",
          "sendError": "Could not send. Try again later.",
          "exp0Date": "6/2024 - today",
          "exp0Name": "BIORCE / Frontend Team Lead / React Developer",
          "exp0Desc": "React.js",
          "exp1Date": "9/2023 - 6/2024",
          "exp1Name": "Chasers / Frontend Developer",
          "exp1Desc": "Vue.js",
          "exp2Date": "5/2023 - 9/2023",
          "exp2Name": "Impacting.Digital / Frontend Developer",
          "exp2Desc": "React.js - Wordpress",
          "exp3Date": "6/2022 - 5/2023",
          "exp3Name": "Chasers / Frontend Developer",
          "exp3Desc": "Vue.js - React.js",
          "exp4Date": "6/2022 - 5/2023",
          "exp4Name": "Freelance web developer",
          "exp4Desc": "HTML - CSS - Js - React.js (parallel to Chasers)",
          "exp5Date": "10/2016 - 6/2022",
          "exp5Name": "Supreme Court of Justice of Buenos Aires",
          "exp5Desc": "Lawyer",
        }
      },
      es: {
        translation: {
            "home": "Inicio",
            "aboutMe": "Sobre mí",
            "aboutP1": "Hola, soy Tomás - Frontend Team Lead enfocado en construir aplicaciones web escalables y de alto rendimiento con React y TypeScript.",
            "aboutP2": "Actualmente lidero un equipo de ingenieros en Biorce, donde impulso la arquitectura frontend, la dirección técnica y la calidad de entrega a lo largo del producto. Mi rol combina desarrollo hands-on con diseño de sistemas, optimización de performance y liderazgo de equipo.",
            "aboutP3": "Me especializo en diseñar arquitecturas frontend escalables, mejorar la experiencia de desarrollo (DX) y alinear decisiones técnicas con objetivos de producto y negocio. Me importa mucho construir sistemas mantenibles, rápidos y fáciles de evolucionar en el tiempo.",
            "aboutP4": "Antes de trabajar en tecnología, estudié derecho - un background que moldeó mi pensamiento estructurado, mis habilidades de comunicación y mi enfoque para resolver problemas. Desde mi transición al desarrollo de software, crecí de desarrollador a team lead, con foco tanto en la excelencia técnica como en el desempeño del equipo.",
            "aboutP5": "Disfruto trabajar en entornos donde el ownership, la claridad y la mejora continua son valores centrales, y siempre busco seguir creciendo como líder técnico mientras genero un impacto de producto significativo.",
            "contact": "Contacto",
            "projects": "Proyectos",
            "resume": "Currículum",
            "skills": "Habilidades",
            "studies": "Estudios",
            "experience":"Experiencia",
            "name":"Nombre",
            "e-mail":"Correo electrónico",
            "message":"Mensaje",
            "submit":"Enviar",
            "professionalHeadline": "Desarrollador Frontend | React | TypeScript",
            "professionalSubtitle": "Lidero equipos frontend, diseño arquitecturas escalables y mejoro performance y DX en aplicaciones con React + TypeScript.",
            "messageSent": "¡Mensaje enviado!",
            "viewProjects": "Ver proyectos",
            "sendError": "No se pudo enviar. Intentá más tarde.",
            "exp0Date": "6/2024 - hoy",
            "exp0Name": "BIORCE / Líder de equipo frontend / Desarrollador React",
            "exp0Desc": "React.js",
            "exp1Date": "9/2023 - 6/2024",
            "exp1Name": "Chasers / Desarrollador frontend",
            "exp1Desc": "Vue.js",
            "exp2Date": "5/2023 - 9/2023",
            "exp2Name": "Impacting.Digital / Desarrollador frontend",
            "exp2Desc": "React.js - Wordpress",
            "exp3Date": "6/2022 - 5/2023",
            "exp3Name": "Chasers / Desarrollador frontend",
            "exp3Desc": "Vue.js - React.js",
            "exp4Date": "6/2022 - 5/2023",
            "exp4Name": "Desarrollador web freelance",
            "exp4Desc": "HTML - CSS - Js - React.js (en paralelo a Chasers)",
            "exp5Date": "10/2016 - 6/2022",
            "exp5Name": "Poder Judicial de la Ciudad de Buenos Aires",
            "exp5Desc": "Abogado",
        }
      }
    },
    lng: 'en', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
