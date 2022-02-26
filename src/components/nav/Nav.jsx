import './nav.css'
import { AiOutlineContacts, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { BsPalette } from 'react-icons/bs'
export default function Nav() {
  return (
    <nav>
      <a href='#' className='active'>
        <AiOutlineHome />
      </a>
      <a href='#about'>
        <AiOutlineUser />
      </a>
      <a href='#education'>
        <FaGraduationCap />
      </a>
      <a href='#skills'>
        <BiBook />
      </a>
      <a href='#portfolio'>
        <BsPalette />
      </a>
      <a href='#contact'>
        <AiOutlineContacts />
      </a>
    </nav>
  )
}
