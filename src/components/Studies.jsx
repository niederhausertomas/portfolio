
const studiesData = [

    { id: 1, title: 'LinkedIn Learning', description: 'CSS Essential Training 4/2024.'},
    { id: 2, title: 'LinkedIn Learning', description: 'CSS Essential Training 4/2024.'},
    { id: 3, title: 'LinkedIn Learning', description: 'React.js Essential Training 4/2024.'},
    { id: 4, title: 'LinkedIn Learning', description: 'HTML Essential Training 3/2024.'},
    { id: 5, title: 'LinkedIn Learning', description: 'TypeScript Essential Training 3/2024.'},
    { id: 6, title: 'LinkedIn Learning', description: 'Design for Developers Essential Training 11/2023.'},
    { id: 7, title: 'LinkedIn Learning', description: 'Learning MySQL Development 10/2023.'},
    { id: 8, title: 'LinkedIn Learning', description: 'Vue Avanzado 1 10/2023.'},
    { id: 9, title: 'LinkedIn Learning', description: 'Experiencia de usuario (UX) esencial 9/2023.'},
    { id: 10, title: 'LinkedIn Learning', description: 'Vue.js Essencial 9/2023.'},
    { id: 11, title: 'LinkedIn Learning', description: 'GDPR Compliance: Essential Training 8/2023.'},
    { id: 12, title: 'LinkedIn Learning', description: 'Privacy Strategies for Business Leaders 8/2023.'},
    { id: 13, title: 'LinkedIn Learning', description: 'Privacy in the New World of Work 8/2023.'},
    { id: 14, title: 'LinkedIn Learning', description: 'Understanding and Prioritizing Data Privacy 8/2023.'},
    { id: 15, title: 'LinkedIn Learning', description: 'Cybersecurity Awareness: Cloud Security 7/2023.'},
    { id: 16, title: 'LinkedIn Learning', description: 'Cybersecurity Awareness: Cybersecurity Terminology 7/2023.'},
    { id: 17, title: 'LinkedIn Learning', description: 'Cybersecurity Awareness: Phishing Attacks 7/2023.'},
    { id: 18, title: 'LinkedIn Learning', description: 'Cybersecurity Awareness: Social Engineering 7/2023.'},
    { id: 19, title: 'LinkedIn Learning', description: 'Microsoft Azure DevOps Engineer Expert (AZ-400) Cert Prep: 1 7/2023.'},
    { id: 20, title: 'LinkedIn Learning', description: 'Cybersecurity at Work 6/2023.'},
    { id: 21, title: 'Coder House', description: 'Web Development Course 10/2022.' },
    { id: 22, title: 'Coder House', description: 'React js course. 9/2022.' },
    { id: 23, title: 'Coder House', description: 'JavaScript course 8/2022.' },
    { id: 24, title: 'Universidad Tecnológica Nacional, Argentina', description: 'C++, first year approv 2021/2022' },
    { id: 25, title: 'Dev Rock School', description: 'HTML, JavaScript course 8/2021.' },

]

const Studies = () => {
    const shownTitles = new Set()

    return (
        <div className="mx-10 text-center p-[25px] m-[25px] text-[#969494]">
            <ul>
                {studiesData.map(study => {
                    const titleDisplayed = shownTitles.has(study.title);
                    if (!titleDisplayed) {
                        shownTitles.add(study.title)
                    }
                    return (
                        <li key={study.id} className="mb-2">
                            {!titleDisplayed && <h3 className="font-semibold text-[#cfcccc] mt-4 text-[18px]">{study.title}</h3>}
                            <p className='text-[12px]'>{study.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Studies
