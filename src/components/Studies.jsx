const parseDate = (desc) => {
  const match = desc.match(/(\d{1,2})\/(\d{4})|(\d{4})\/(\d{4})/)
  if (match) {
    if (match[3]) return parseInt(match[3], 10) * 12 + parseInt(match[4], 10) // 2021/2022
    return parseInt(match[2], 10) * 12 + parseInt(match[1], 10) // M/YYYY
  }
  return 0
}

const studiesData = [
  { id: 26, title: 'Kent C. Dodds Tech LLC', description: 'Epic React Pro - React Server Components 9/2025.' },
  { id: 27, title: 'Kent C. Dodds Tech LLC', description: 'Epic React Pro - React Performance 9/2025.' },
  { id: 28, title: 'Kent C. Dodds Tech LLC', description: 'Epic React Pro - Advanced React Patterns 9/2025.' },
  { id: 29, title: 'Kent C. Dodds Tech LLC', description: 'Epic React Pro - React Suspense 9/2025.' },
  { id: 30, title: 'Kent C. Dodds Tech LLC', description: 'Epic React Pro - Advanced React APIs 9/2025.' },
  { id: 31, title: 'Kent C. Dodds Tech LLC', description: 'Epic React Pro - React Hooks 9/2025.' },
  { id: 32, title: 'Kent C. Dodds Tech LLC', description: 'Epic React Pro - React Fundamentals 9/2025.' },
  { id: 1, title: 'LinkedIn Learning', description: 'CSS Essential Training 4/2024.' },
  { id: 2, title: 'LinkedIn Learning', description: 'CSS Essential Training 4/2024.' },
  { id: 3, title: 'LinkedIn Learning', description: 'React.js Essential Training 4/2024.' },
  { id: 4, title: 'LinkedIn Learning', description: 'HTML Essential Training 3/2024.' },
  { id: 5, title: 'LinkedIn Learning', description: 'TypeScript Essential Training 3/2024.' },
  { id: 6, title: 'LinkedIn Learning', description: 'Design for Developers Essential Training 11/2023.' },
  { id: 7, title: 'LinkedIn Learning', description: 'Learning MySQL Development 10/2023.' },
  { id: 8, title: 'LinkedIn Learning', description: 'Vue Avanzado 1 10/2023.' },
  { id: 9, title: 'LinkedIn Learning', description: 'Experiencia de usuario (UX) esencial 9/2023.' },
  { id: 10, title: 'LinkedIn Learning', description: 'Vue.js Essencial 9/2023.' },
  { id: 11, title: 'LinkedIn Learning', description: 'GDPR Compliance: Essential Training 8/2023.' },
  { id: 12, title: 'LinkedIn Learning', description: 'Privacy Strategies for Business Leaders 8/2023.' },
  { id: 13, title: 'LinkedIn Learning', description: 'Privacy in the New World of Work 8/2023.' },
  { id: 14, title: 'LinkedIn Learning', description: 'Understanding and Prioritizing Data Privacy 8/2023.' },
  { id: 15, title: 'LinkedIn Learning', description: 'Cybersecurity Awareness: Cloud Security 7/2023.' },
  { id: 16, title: 'LinkedIn Learning', description: 'Cybersecurity Awareness: Cybersecurity Terminology 7/2023.' },
  { id: 17, title: 'LinkedIn Learning', description: 'Cybersecurity Awareness: Phishing Attacks 7/2023.' },
  { id: 18, title: 'LinkedIn Learning', description: 'Cybersecurity Awareness: Social Engineering 7/2023.' },
  { id: 19, title: 'LinkedIn Learning', description: 'Microsoft Azure DevOps Engineer Expert (AZ-400) Cert Prep: 1 7/2023.' },
  { id: 20, title: 'LinkedIn Learning', description: 'Cybersecurity at Work 6/2023.' },
  { id: 21, title: 'Coder House', description: 'Web Development Course 10/2022.' },
  { id: 22, title: 'Coder House', description: 'React js course. 9/2022.' },
  { id: 23, title: 'Coder House', description: 'JavaScript course 8/2022.' },
  { id: 24, title: 'Universidad Tecnológica Nacional, Argentina', description: 'C++, first year approv 2021/2022' },
  { id: 25, title: 'Dev Rock School', description: 'HTML, JavaScript course 8/2021.' },
]

// Orden de instituciones (más recientes primero) y agrupar
const INSTITUTION_ORDER = [
  'Kent C. Dodds Tech LLC',
  'LinkedIn Learning',
  'Coder House',
  'Universidad Tecnológica Nacional, Argentina',
  'Dev Rock School',
]

const studiesByTitle = studiesData.reduce((acc, study) => {
  const existing = acc.find((g) => g.title === study.title)
  if (existing) existing.studies.push(study)
  else acc.push({ title: study.title, studies: [study] })
  return acc
}, [])

studiesByTitle.forEach((group) => {
  group.studies.sort((a, b) => parseDate(b.description) - parseDate(a.description))
})
studiesByTitle.sort((a, b) => {
  const iA = INSTITUTION_ORDER.indexOf(a.title)
  const iB = INSTITUTION_ORDER.indexOf(b.title)
  if (iA === -1 && iB === -1) return 0
  if (iA === -1) return 1
  if (iB === -1) return -1
  return iA - iB
})

// Primera columna: Kent + LinkedIn hasta antes de "Phishing Attacks". Segunda: resto LinkedIn + Coder House + Universidad + Dev Rock.
const LINKEDIN_COL2_START = 'Cybersecurity Awareness: Phishing Attacks 7/2023.'
const COL2_INSTITUTIONS = ['Coder House', 'Universidad Tecnológica Nacional, Argentina', 'Dev Rock School']

const column1Groups = []
const column2Groups = []
studiesByTitle.forEach((group) => {
  if (group.title === 'LinkedIn Learning') {
    const idx = group.studies.findIndex((s) => s.description.startsWith(LINKEDIN_COL2_START))
    const col1Studies = idx === -1 ? group.studies : group.studies.slice(0, idx)
    const col2Studies = idx === -1 ? [] : group.studies.slice(idx)
    if (col1Studies.length) column1Groups.push({ title: group.title, studies: col1Studies })
    if (col2Studies.length) column2Groups.push({ title: group.title, studies: col2Studies })
  } else if (COL2_INSTITUTIONS.includes(group.title)) {
    column2Groups.push(group)
  } else {
    column1Groups.push(group)
  }
})

const renderGroup = (group, index, isCol2) => (
  <li key={`${group.title}-${isCol2 ? 'col2' : 'col1'}-${index}`} className="text-left">
    <h3 className="font-medium text-[#1a1a1a] text-base mb-1">{group.title}</h3>
    <ul className="space-y-0.5 list-none p-0 m-0">
      {group.studies.map((study) => (
        <li key={study.id} className="text-xs text-[#666] leading-tight">{study.description}</li>
      ))}
    </ul>
  </li>
)

const Studies = () => {
  return (
    <div className="mx-4 md:mx-6 p-2 md:p-4 m-0 text-[#555]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
        <ul className="list-none p-0 m-0 space-y-4">
          {column1Groups.map((group, i) => renderGroup(group, i, false))}
        </ul>
        <ul className="list-none p-0 m-0 space-y-4">
          {column2Groups.map((group, i) => renderGroup(group, i, true))}
        </ul>
      </div>
    </div>
  )
}

export default Studies
