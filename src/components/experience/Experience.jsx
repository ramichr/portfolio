import './experience.css'
import { FaGraduationCap } from 'react-icons/fa'
import { MdOutlineWork, MdLocationOn } from 'react-icons/md'
import { experience } from '../../../data.json'

export default function Experience() {
  const { education, work } = experience
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__content'>
          <h3>EDUCATION</h3>
          <ul>
            {education.map(
              ({ id, years, location, position, place, description }) => {
                return (
                  <li key={id} className='experience__item'>
                    <div className='experience-icon'>
                      <FaGraduationCap className='logo' />
                    </div>
                    <p className='experience-years'>{years}</p>
                    <p className='experience-location'>
                      <MdLocationOn />
                      {location}
                    </p>
                    <h5 className='experience-title'>
                      {position}
                      <span> - {place}</span>
                    </h5>
                    <p className='experience-description'>
                      {description.courseStudy}
                    </p>
                    <p className='experience-description'>
                      {description.specialty}
                    </p>
                  </li>
                )
              }
            )}
          </ul>
        </div>
        <div className='experience__content'>
          <h3>WORK</h3>
          <ul>
            {work.map(
              ({ id, years, location, position, place, description }) => {
                return (
                  <li key={id} className='experience__item'>
                    <div className='experience-icon'>
                      <MdOutlineWork className='logo' />
                    </div>
                    <p className='experience-years'>{years}</p>
                    <p className='experience-location'>
                      <MdLocationOn />
                      {location}
                    </p>
                    <h5 className='experience-title'>
                      {position}
                      <span> - {place}</span>
                    </h5>
                    <p className='experience-description'>{description}</p>
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
