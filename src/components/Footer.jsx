import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks } from '../constants';
import { logo, menu, close, logo_white } from '../assets';
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  return (
    <footer className={`
    ${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-[#0000006f]]`}>
      <div className='w-full justify-center items-center max-w-7xl mx-auto flex'>
        <Link 
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); 
            window.scrollTo(0,0)
          }}
        >
          <p 
          className='text-white text-[18px] font-bold cursor-pointer flex'> Made with &nbsp; <AiFillHeart/> &nbsp; by </p>
          <img src={logo_white} alt='logo'
            className='w-11 h-11 object-contain '
          />
        </Link>
      </div>
    </footer>
  )
}

export default Footer