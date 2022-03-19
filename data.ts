interface Personal {
  firstName: string
  lastName: string
  dateOfBirth: string
  degree: string
  languages: string
}

interface Skills {
  id: number
  skill: string
  level: string
}

interface Portfolio {
  id: number
  image: string
  title: string
  github: string
  demo: string
}

interface Experience {
  id: number
  years: string
  location: string
  position: string
  place: string
  description: string
}

const personal: Personal = {
  firstName: 'Rami',
  lastName: 'Cheikh Rouhou',
  dateOfBirth: '10.10.1994',
  degree: 'Master in Media Informatics at TH Köln (Present)',
  languages: 'Arabic, English, German and French',
}

const frontend: Skills[] = [
  {
    id: 1,
    skill: 'HTML5',
    level: 'Experienced',
  },
  {
    id: 2,
    skill: 'CSS3',
    level: 'Skillful',
  },
  {
    id: 3,
    skill: 'Javascript',
    level: 'Skillful',
  },
  {
    id: 4,
    skill: 'Typescript',
    level: 'Skillful',
  },
  {
    id: 5,
    skill: 'Bootstrap',
    level: 'Experienced',
  },
  {
    id: 6,
    skill: 'TailwindCSS',
    level: 'Skillful',
  },
  {
    id: 7,
    skill: 'ReactJS',
    level: 'Skillful',
  },
]
const backend: Skills[] = [
  {
    id: 1,
    skill: 'NodeJS',
    level: 'Skillful',
  },
  {
    id: 2,
    skill: 'ExpressJS',
    level: 'Skillful',
  },
  {
    id: 3,
    skill: 'Docker',
    level: 'Skillful',
  },
  {
    id: 4,
    skill: 'Rest API',
    level: 'Beginner',
  },
  {
    id: 5,
    skill: 'MongoDB',
    level: 'Skillful',
  },
  {
    id: 6,
    skill: 'Git/Github',
    level: 'Experienced',
  },
]

const portfolio: Portfolio[] = [
  {
    id: 1,
    image: '/assets/beiboot.PNG',
    title: 'Image Metadeta Reader',
    github: 'https://github.com/skylervale/CRANACH',
    demo: '#not-available-1',
  },
  {
    id: 2,
    image: '/assets/cranach-1.jpg',
    title: 'Lucas Cranach Timeline',
    github:
      'https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2021-ramichr',
    demo: '#not-available-2',
  },
  {
    id: 3,
    image: '/assets/portfolio.PNG',
    title: 'My Portfolio',
    github: 'https://github.com/ramichr/portfolio',
    demo: 'https://ramicheikhrouhou.netlify.app/',
  },
]

const education: Experience[] = [
  {
    id: 1,
    years: 'March 2019 - present',
    location: 'Cologne, Germany',
    position: 'Master',
    place: 'Technische Hochschule Köln',
    description:
      'Course Study: Media Informatics, Specialty: Weaving the Web (Web Development)',
  },
  {
    id: 2,
    years: 'September 2013 - June 2016',
    location: 'Mateur, Tunisia',
    position: 'Bachelor',
    place: 'ISSAT Mateur',
    description: 'Course Study: Informatics, Specialty: Software Development',
  },
  {
    id: 3,
    years: 'September 2009 - June 2013',
    location: 'Mateur, Tunisia',
    position: 'Baccalaureat(Abitur)',
    place: 'Lycee Route de Tabarka',
    description: 'Speciality: Informatic',
  },
]
const work: Experience[] = [
  {
    id: 1,
    years: 'February 2016 — June 2016',
    location: 'Tunis, Tunisia',
    position: 'Internship for Bachelor Thesis',
    place: 'Tunisair',
    description:
      'Development of a web application for the management of flight billings for TUNISAIR.',
  },
  {
    id: 2,
    years: 'August 2015 — September 2015',
    location: 'Tunis, Tunisia',
    position: 'Summer Internship',
    place: 'AISA',
    description: 'Development of a dynamic website to manage TUNISAIR flights',
  },
]

export { personal, frontend, backend, portfolio, education, work }
