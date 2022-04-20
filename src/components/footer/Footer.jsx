import './footer.css'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { ImXing } from 'react-icons/im'
import { firstName, lastName, socials } from '../../../data.json'

export default function Footer() {
  const date = new Date()
  let year = date.getFullYear()
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
          <a href='#experience'>Experience</a>
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
        <a href={socials.xing} target='_blank'>
          <ImXing />
        </a>
        <a href={socials.linkedin} target='_blank'>
          <BsLinkedin />
        </a>
        <a href={socials.github} target='_blank'>
          <BsGithub />
        </a>
      </div>
      <div className='footer__copyrights'>
        <small>
          &copy; {year} {firstName} {lastName}
        </small>
      </div>
    </footer>
  )
}
