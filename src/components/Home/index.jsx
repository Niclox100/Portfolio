import React from 'react'
import styles from "./styles.module.css"
import Projects from '../Projects'
import AboutMe from '../AboutMe'
import Qualities from '../Qualities'
import Experience from '../Experience'
import Curriculum from '../Curriculum'
import Footer from '../Footer'
import Presentation from '../Presentation'

const Home = () => {
  return (
    <div className={`min-h-screen`}>
      <Presentation/>
      <AboutMe/>
      <Qualities/>
      <Experience/>
      <Curriculum/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Home