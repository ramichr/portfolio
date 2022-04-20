import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { ImXing } from 'react-icons/im'
import { socials } from '../../../data.json'

export default function HeaderSocials() {
  return (
    <div>
      <div className='header__socials'>
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
    </div>
  )
}
