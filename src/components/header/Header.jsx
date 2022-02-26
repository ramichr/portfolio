import './header.css'
import HeaderButtons from './HeaderButtons'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Rami Cheikh Rouhou</h1>
        <h5 className='text-light'>Frontend Developer</h5>
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
