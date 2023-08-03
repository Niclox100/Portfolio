import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css"
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const [currentMenu, setCurrentMenu] = useState("main");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const mainNav = document.getElementById("mainNav");

    if (window.innerWidth <= 800) {
      setCurrentMenu("responsive");
      // Mostrar el botón de hamburguesa y ocultar el menú principal
      hamburgerBtn.style.display = "block";
      mainNav.style.display = "none";
    } else {
      // Ocultar el botón de hamburguesa y mostrar el menú principal
      hamburgerBtn.style.display = "none";
      mainNav.style.display = "flex";
    }
  };

  useEffect(() => {
    toggleMenu();
    
    window.addEventListener("resize", toggleMenu);

    return () => {
      window.removeEventListener("resize", toggleMenu);
    };
  }, []);

  const scrollToElement = (elementId) => {

    setIsMenuOpen(false)

    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='fixed w-full z-50'>
      <nav style={{ backdropFilter: "blur(10px)" }} className={`${isMenuOpen ? styles.uwu : ""} flex justify-between items-center z-10 text-white w-full py-5 px-8 text-sm font-normal top-0 bg-black bg-opacity-40`}>
        <ul>
          <li className='flex justify-center items-center gap-3'>
            <figure className='w-10'>
              <img src="images/blackclover.webp" className='w-full h-full' alt="" />
            </figure>
            <p className='text-2xl'>Nicolas Colombo</p>
          </li>
        </ul>
        <figure id='hamburger-menu' className='hidden cursor-pointer' onClick={()=> setIsMenuOpen(prev => !prev)}>
          <MenuIcon />
        </figure>
        <ul id="mainNav" className='flex gap-3'>
          <li className='cursor-pointer hover:text-gray-500' onClick={() => scrollToElement("aboutMe")}>Sobre mi</li>
          <li className='cursor-pointer hover:text-gray-500' onClick={() => scrollToElement("qualities")}>Capacidades</li>
          <li className='cursor-pointer hover:text-gray-500' onClick={() => scrollToElement("experience")}>Experiencia</li>
          <li className='cursor-pointer hover:text-gray-500' onClick={() => scrollToElement("curriculum")}>CV</li>
          <li className='cursor-pointer hover:text-gray-500' onClick={() => scrollToElement("contact")}>Contacto</li>
        </ul>
      </nav>
        {isMenuOpen && (
        <ul className='w-full bg-black text-white animate-jump-in'>
          <li className='cursor-pointer hover:text-gray-500 text-center leading-6 p-4' onClick={() => scrollToElement("aboutMe")}>Sobre mi</li>
          <li className='cursor-pointer hover:text-gray-500 text-center leading-6 p-4' onClick={() => scrollToElement("qualities")}>Capacidades</li>
          <li className='cursor-pointer hover:text-gray-500 text-center leading-6 p-4' onClick={() => scrollToElement("experience")}>Experiencia</li>
          <li className='cursor-pointer hover:text-gray-500 text-center leading-6 p-4' onClick={() => scrollToElement("curriculum")}>CV</li>
          <li className='cursor-pointer hover:text-gray-500 text-center leading-6 p-4' onClick={() => scrollToElement("contact")}>Contacto</li>
      </ul>
        )}
    </section>
  )
}

export default NavBar;
