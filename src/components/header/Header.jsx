import './header.css'
import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'
import { firstName, lastName } from '../../../data.json'
import { FiChevronsDown } from 'react-icons/fi'

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>
          {firstName} {lastName}
        </h1>
        <HeaderButtons />
        <div className='header__hero'>
          <HeaderSocials />
          <img src='/assets/me.png' alt='' className='header__image' />
          <a href='#footer' className='scroll__down'>
            <FiChevronsDown />
          </a>
        </div>
      </div>
    </header>
  )
}
