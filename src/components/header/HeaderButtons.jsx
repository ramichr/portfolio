import { FaDownload } from 'react-icons/fa'

export default function HeaderButtons() {
  return (
    <div className='header__buttons'>
      <a
        href='/assets/Rami-Cheikh_Rouhou-cv.pdf'
        alt='alt text'
        target='_blank'
        rel='noopener noreferrer'
        className='btn'
      >
        Download CV <FaDownload />
      </a>
      <a href='#contact' className='btn btn-primary'>
        Contact Me
      </a>
    </div>
  )
}
