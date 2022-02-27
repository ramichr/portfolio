import './portfolio.css'
import { portfolio } from '../../../data'

export default function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {portfolio.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-buttons'>
                <a href={github} className='btn' target='_blank'>
                  Github
                </a>
                <a href={demo} className='btn btn-primary' target='_top'>
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
