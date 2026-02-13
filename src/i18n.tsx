import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "projects" : "Projects",
          "skills" : "Skills",
          "studies" : "Studies",
          "aboutMe" : "About me",
          "contact" : "Contact",
          "resume" : "Resume",
          "Hello! I'm Tomás, a passionate front-end developer. After a career as a lawyer, I discovered my true calling in programming and made the life-changing decision to dive into tech." : "Hello! I'm Tomás, a passionate front-end developer. After a career as a lawyer, I discovered my true calling in programming and made the life-changing decision to dive into tech.",
          "I'm skilled in C++, HTML, CSS, JavaScript, and React.js, having studied at institutions like the National Technological University of Argentina, CoderHouse, and Devrock School. I've also gained hands-on experience with WordPress/PHP, Vue.js, MySQL, and TypeScript, continually learning through tutorials and developer communities to stay current." : "I'm skilled in C++, HTML, CSS, JavaScript, and React.js, having studied at institutions like the National Technological University of Argentina, CoderHouse, and Devrock School. I've also gained hands-on experience with WordPress/PHP, Vue.js, MySQL, and TypeScript, continually learning through tutorials and developer communities to stay current.",
          "I thrive in collaborative environments, value open communication, and enjoy helping others succeed. My goal is to keep growing as a programmer and, one day, pass on my knowledge to others." : "I thrive in collaborative environments, value open communication, and enjoy helping others succeed. My goal is to keep growing as a programmer and, one day, pass on my knowledge to others.",
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
            "aboutMe": "Sobre mí",
            "contact": "Contacto",
            "Hello! I'm Tomás, a passionate front-end developer. After a career as a lawyer, I discovered my true calling in programming and made the life-changing decision to dive into tech.": "¡Hola! Soy Tomás, un apasionado desarrollador front-end. Después de una carrera como abogado, descubrí mi verdadera vocación en la programación y tomé la decisión que cambió mi vida al adentrarme en la tecnología.",
            "I thrive in collaborative environments, value open communication, and enjoy helping others succeed. My goal is to keep growing as a programmer and, one day, pass on my knowledge to others.": "Me desenvuelvo bien en entornos colaborativos, valoro la comunicación abierta y disfruto ayudar a otros a tener éxito. Mi objetivo es seguir creciendo como programador y, algún día, transmitir mi conocimiento a otros.",
            "I'm skilled in C++, HTML, CSS, JavaScript, and React.js, having studied at institutions like the National Technological University of Argentina, CoderHouse, and Devrock School. I've also gained hands-on experience with WordPress/PHP, Vue.js, MySQL, and TypeScript, continually learning through tutorials and developer communities to stay current.": "Tengo habilidades en C++, HTML, CSS, JavaScript y React.js, y he estudiado en instituciones como la Universidad Tecnológica Nacional de Argentina, CoderHouse y Devrock School. También he adquirido experiencia práctica con WordPress/PHP, Vue.js, MySQL y TypeScript, aprendiendo continuamente a través de tutoriales y comunidades de desarrolladores para mantenerme actualizado.",
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
