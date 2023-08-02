import React from 'react'
import styles from "./styles.module.css"

const Presentation = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.overlay} flex justify-around items-center pt-40 w-full`}>
        <div className='flex flex-col justify-center items-center text-white px-6'>
          <p className='text-6xl text-center mb-4 animate-jump-in animate-delay-300 animate-once'>
            Hola! Soy Nicolás
          </p>
          <p className='text-2xl text-center sm:text-xl'>
            Desarrollador Full Stack
          </p>
        </div>
      </div>
  </div>
  )
}

export default Presentation