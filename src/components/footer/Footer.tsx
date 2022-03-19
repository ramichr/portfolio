import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { personal } from '../../../data'
import './footer.css'

export default function Footer() {
  const { firstName, lastName } = { ...personal }
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>
        {firstName} {lastName}
      </a>
      <ul className='footer__links'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a
          href='https://www.linkedin.com/in/rami-cheikh-rouhou/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
        <a href='https://github.com/ramichr' target='_blank'>
          <BsGithub />
        </a>
      </div>
      <div className='footer__copyrights'>
        <small>
          &copy; {firstName} {lastName}
        </small>
      </div>
    </footer>
  )
}
