import { FaDownload } from 'react-icons/fa'

export default function HeaderButtons() {
  return (
    <div className='header__buttons'>
      <a
        href='/assets/Rami-Cheikh_Rouhou-cv.pdf'
        target='_blank'
        className='btn'
      >
        Resume <FaDownload />
      </a>
      <a href='#contact' className='btn btn-primary'>
        Contact Me
      </a>
    </div>
  )
}
