import React from 'react'
import styles from "./styles.module.css"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  function toggleMenu() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const mainNav = document.getElementById("main-nav");
  
    if (window.innerWidth <= 800) {

      hamburgerMenu.style.display = "flex";
      mainNav.style.display = "none";
    } else {
      hamburgerMenu.style.display = "none";
      mainNav.style.display = "flex"; 
    }
  }
  
/*   useEffect(()=> {
    toggleMenu()

    window.addEventListener("resize", toggleMenu);

    return () => {
      window.removeEventListener("resize", toggleMenu);
    };
  },[]) */

  return (
    <>
      <nav style={{backdropFilter: "blur(10px)"}} className='flex justify-between items-center fixed z-10 text-white w-full py-5 px-8 text-sm font-normal top-0 bg-black bg-opacity-40'>
        <ul>
          <li className='flex justify-center items-center gap-3'>
            <figure className='w-8'>
              <img src="images/blackclover.webp" className='w-full h-full' alt="" />
            </figure>
            <p className='text-xl'>Nicolas Colombo</p>
          </li>
        </ul>
        <ul id="main-nav" className={`${styles.navBar} flex gap-3`}>
          <li className='cursor-pointer hover:text-gray-500' onClick={()=> scrollToElement("aboutMe")}>Sobre mi</li>
          <li className='cursor-pointer hover:text-gray-500' onClick={()=> scrollToElement("qualities")}>Capacidades</li>
          <li className='cursor-pointer hover:text-gray-500' onClick={()=> scrollToElement("experience")}>Experiencia</li>
          <li className='cursor-pointer hover:text-gray-500' onClick={()=> scrollToElement("curriculum")}>CV</li>
          <li className='cursor-pointer hover:text-gray-500' onClick={()=> scrollToElement("contact")}>Contacto</li>
        </ul>
      </nav>
{/*       <figure id='hamburger-menu' className={`${styles.hamburgerMenu}`}> 
          <MenuIcon/>
      </figure> */}
    </>
  )
}

export default NavBar