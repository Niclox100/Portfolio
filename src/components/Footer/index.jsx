import React from 'react'
import styles from "./styles.module.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RocketIcon from '@mui/icons-material/Rocket';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({top:0, behavior: "smooth", })
  }

  return (
    <section id='contact' className={`${styles.container}`}>
      <div className={`${styles.socialMediaContainer}`}>
        <figure className={`${styles.socialMediaIcon} cursor-pointer`} onClick={() => window.open("https://github.com/Niclox100", "_blank")}>
          <GitHubIcon sx={{color: "white", fontSize: "32px"}}/>
        </figure>
        <figure className={`${styles.socialMediaIcon} cursor-pointer`} onClick={() => window.open("https://www.linkedin.com/in/nicolas-colombo-dev/", "_blank")}>
          <LinkedInIcon sx={{color: "white", fontSize: "32px"}}/>
        </figure>
        <figure className={`${styles.socialMediaIcon} cursor-pointer`} onClick={() => window.open("https://www.instagram.com/niico_colombo/", "_blank")}>
         <InstagramIcon sx={{color: "white", fontSize: "32px"}}/>
        </figure>
      </div>
      <div>
        <div className='flex justify-center items-center mt-8 cursor-pointer'>
          <figure className='hover:animate-jump' onClick={()=> scrollToTop()}>
            <RocketIcon sx={{color:"white", fontSize:"40px", textAlign:"center"}}/>
          </figure>
        </div>
      </div>
      <p className='text-white text-center font-light opacity-50 py-4'>
        <CopyrightIcon sx={{fontSize:"20px"}}/>
        <span> Nicolas Colombo 2023</span>
      </p>
    </section>
  )
}

export default Footer