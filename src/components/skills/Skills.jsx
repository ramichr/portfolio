import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import { frontend, backend } from '../../../data'

export default function Skills() {
  return (
    <section id='skills'>
      <h2>Skills</h2>
      <div className='container skills__container'>
        {/* ==============Frontend=============== */}
        <div className='skills__frontend'>
          <h3>FRONTEND</h3>
          <div className='skills__content'>
            {frontend.map(({ id, skill, level }) => {
              return (
                <article key={id} className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon' />
                  <div>
                    <h4>{skill}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        {/* ==============Backend=============== */}
        <div className='skills__backend'>
          <h3>BACKEND</h3>
          <div className='skills__content'>
            {backend.map(({ id, skill, level }) => {
              return (
                <article key={id} className='skills__details'>
                  <BsPatchCheckFill className='skills__details-icon' />
                  <div>
                    <h4>{skill}</h4>
                    <small className='text-light'>{level}</small>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
