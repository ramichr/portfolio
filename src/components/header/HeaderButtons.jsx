export default function HeaderButtons() {
  return (
    <div className='header__buttons'>
      <a
        href='/assets/cv.pdf'
        alt='alt text'
        target='_blank'
        rel='noopener noreferrer'
        className='btn'
      >
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Contact Me
      </a>
    </div>
  )
}
