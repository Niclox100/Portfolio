import React from 'react'
import styles from "./styles.module.css"

const AboutMe = () => {
  return (
    <div id='aboutMe' className={`${styles.container} flex flex-col text-xl justify-center items-center py-28 px-14 bg-white text-black`}>
      <p className='text-3xl font-light text-center'>UN POCO SOBRE MI</p>
      <figure className='w-44 h-w-44 my-6 rounded-full overflow-hidden'>
        <img src="/images/me.jpg" alt="" />
      </figure>
      <p className={`${styles.description} text-center text-lg font-normal mb-6`}>
        Hola! Mi nombre es Nicolas y soy un desarrollador web con mucha pasion por el desarrollo.
        Forje mis conocimientos estudiando en Platzi, una plataforma de cursos online.
        Aspiro a construir una carrera que me permita transformar mis pensamientos en software 
        que pueda ser utilizado por muchas personas
        <br/>
        <br/>
        Cuando no estoy en la computadora, me gusta mucho jugar, ver anime y ver avances tecnologicos
      </p>
    </div>
  )
}

export default AboutMe