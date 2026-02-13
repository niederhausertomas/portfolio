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
          "aboutP1": "Hello! I'm Tomás, a Front-End Team Lead with a strong passion for building scalable, high-quality digital products.",
          "aboutP2": "After starting my career as a lawyer, I transitioned into tech and discovered my true calling in software development. Since then, I've grown from developer to team lead, combining hands-on technical expertise with leadership and strategic thinking.",
          "aboutP3": "I specialize in modern front-end development with React, TypeScript, and scalable architecture patterns. Beyond coding, I focus on improving development workflows, fostering strong communication within teams, mentoring developers, and aligning technical decisions with product and business goals.",
          "aboutP4": "I thrive in collaborative environments where ownership, clarity, and continuous improvement are key. My goal is to keep evolving as a technical leader, building high-performing teams and delivering meaningful digital experiences.",
          "contact" : "Contact",
          "resume" : "Resume",
          "experience":"Experience",
          "name":"Name",
          "e-mail":"E-mail",
          "message":"Message",
          "submit":"Submit",
          "frontEndDeveloper": "Front-end Developer",
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
            "aboutP1": "¡Hola! Soy Tomás, Front-End Team Lead con una gran pasión por construir productos digitales escalables y de alta calidad.",
            "aboutP2": "Después de comenzar mi carrera como abogado, me reconvertí al mundo tech y descubrí mi verdadera vocación en el desarrollo de software. Desde entonces, he pasado de desarrollador a líder de equipo, combinando experiencia técnica práctica con liderazgo y pensamiento estratégico.",
            "aboutP3": "Me especializo en desarrollo front-end moderno con React, TypeScript y patrones de arquitectura escalables. Más allá del código, me enfoco en mejorar los flujos de desarrollo, fomentar una comunicación sólida dentro de los equipos, mentorizar desarrolladores y alinear las decisiones técnicas con los objetivos del producto y del negocio.",
            "aboutP4": "Me desenvuelvo bien en entornos colaborativos donde el ownership, la claridad y la mejora continua son clave. Mi objetivo es seguir evolucionando como líder técnico, construyendo equipos de alto rendimiento y entregando experiencias digitales significativas.",
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
            "frontEndDeveloper": "Desarrollador Front-end",
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
