import './header.css'
import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'
import { personal } from '../../../data'

export default function Header() {
  const { firstName, lastName, job } = personal
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>
          {firstName} {lastName}
        </h1>
        <h5 className='text-light'>{job}</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className='me'>
          <img src='/assets/me.png' alt='' />
        </div>
        <a href='#contact' className='scroll__down'>
          Scroll down
        </a>
      </div>
    </header>
  )
}
