import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div>
      <div className='header__socials'>
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
    </div>
  )
}
