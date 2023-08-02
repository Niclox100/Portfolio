import React from 'react'
import styles from "./styles.module.css"
import projects from "@/projectsInfo.json"
import Project from '../Project'
import useScrollReveal from '@/hooks/useScrollReveal'

const Projects = () => {
  
  const projectRef = useScrollReveal({duration: 2000})

  return (
    <div id='projects' style={{backgroundColor: "whitesmoke"}} className='pt-20'>
      <div className='text-center text-4xl mb-12'>Algunos de mis Proyectos</div>
      <div className='mt-8 pb-8 flex justify-center'>
        <div ref={projectRef}  className={`${styles.container}`}>
        {projects.map((item, i) => (
          <Project
            title={item.title}
            description={item.description} 
            image={item.image}
            url={item.url}
            key={i}
          />  
        ))}
        </div>
      </div>
    </div>
  )
}

export default Projects