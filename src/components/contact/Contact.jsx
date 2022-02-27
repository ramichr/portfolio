import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rodcqdo',
        'template_fuqnt85',
        form.current,
        'kXd5J3NJPoX8Xgx-u'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <section id='contact'>
      <h2>My Contacts</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>E-mail</h4>
            <h6>ramicheikhrouhou670@gmail.com</h6>
            <a href='mailto:ramicheikhrouhou670@gmail.com' target='_blank'>
              Send an Email
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Rami Cheikh Rouhou</h5>
            <a href='https://m.me/ramicheikhrouhou670/' target='_blank'>
              Send a Message
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+49 176 20174689</h5>
            <a
              href='https://api.whatsapp.com/send?phone=+4917620174689'
              target='_blank'
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Full Name...' required />
          <input
            type='email'
            name='email'
            placeholder='Email Address...'
            required
          />
          <input type='text' name='subject' placeholder='Subject...' required />
          <textarea
            name='message'
            rows='10'
            placeholder='Message...'
            required
          ></textarea>
          <button type='submit' className='btn btn-primary'>
            Send a Message
          </button>
        </form>
      </div>
    </section>
  )
}
