import React from 'react'
import styles from "./styles.module.css"
import TechnologyCard from '../TechnologyCard'
import technologiesList from "../../technologies.json"
import useScrollReveal from '@/hooks/useScrollReveal'

const Experience = () => {
  const experienceRef = useScrollReveal({duration: 2000, delay: 500})

  return (
    <div id='experience' ref={experienceRef} className={`${styles.container}`}>
        <p className='text-3xl font-light text-center mb-12 uppercase'>Experiencia</p>
        <p className={`${styles.experienceDescription}`}>Llevo desarrollando hace aproximadamente 3 años y siempre estoy ansioso de aprender mas en esta industria</p>
        <p className='text-center mt-10 text-2xl'>Las tecnologias que manejo son</p>
        <div className={`${styles.experienceCardContainer} py-20`}>
          {technologiesList.map((item, i)=> (
            <TechnologyCard key={i} name={item.name} image={item.image}/>
          ))}
        </div>
        <p className='text-center text-2xl mt-4'>Donde Trabaje</p>
        <figure>
          <img 
            src="/images/indigo.png" 
            alt="Indigo" 
            className='m-auto bg-blue-600 mt-16 rounded-md hover:opacity-90 cursor-pointer'
            onClick={()=> window.open("https://indigobalance.com", "_blank")}
          />
        </figure>
    </div>
  )
}

export default Experience