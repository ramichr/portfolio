import './nav.css'
import { AiOutlineContacts, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { FaGraduationCap } from 'react-icons/fa'
import { BiBook } from 'react-icons/bi'
import { BsPalette } from 'react-icons/bs'
import { useState } from 'react'
export default function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href='#'
        onClick={() => {
          setActiveNav('#')
        }}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        onClick={() => {
          setActiveNav('#about')
        }}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#skills'
        onClick={() => {
          setActiveNav('#skills')
        }}
        className={activeNav === '#skills' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href='#portfolio'
        onClick={() => {
          setActiveNav('#portfolio')
        }}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BsPalette />
      </a>
      <a
        href='#contact'
        onClick={() => {
          setActiveNav('#contact')
        }}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlineContacts />
      </a>
    </nav>
  )
}
