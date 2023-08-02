import React from 'react'
import styles from "./styles.module.css"

const TechnologyCard = ({name, image}) => {
  return (
    <div className='border border-white flex flex-col justify-center items-center'>
      <figure className={`${styles.imageContainer}`}>
        <img className={`${styles.image}`} src={image} alt={name}/>
      </figure>
      <p className='text-center'>{name}</p>
    </div>
  )
}

export default TechnologyCard