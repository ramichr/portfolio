import './portfolio.css'
import { portfolio } from '../../../data'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {portfolio.map(({ ...project }) => {
          return (
            <article key={project.id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
              <div className='portfolio__item-buttons'>
                <a href={project.github} className='btn' target='_blank'>
                  Github
                </a>
                <a
                  href={project.demo}
                  className='btn btn-primary'
                  target='_top'
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
