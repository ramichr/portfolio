import './about.css'
import {
  firstName,
  lastName,
  dateOfBirth,
  placeOfBirth,
  degree,
  languages,
} from '../../../data.json'

export default function About() {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src='/assets/me-1.png' alt='' />
          </div>
        </div>
        <article className='about__card'>
          <h4>
            <span> First name : </span>
            {firstName}
          </h4>
          <h4>
            <span> Last name : </span>
            {lastName}
          </h4>
          <h4>
            <span> Date of Birth : </span> {dateOfBirth}
          </h4>
          <h4>
            <span> Place of Birth : </span> {placeOfBirth}
          </h4>
          <h4>
            <span> Degree : </span> {degree}
          </h4>
          <h4>
            <span> Languages : </span> {languages.join(' , ')}
          </h4>
        </article>
      </div>
    </section>
  )
}
