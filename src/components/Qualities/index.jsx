import React from 'react'
import styles from "./styles.module.css"
import CodeIcon from '@mui/icons-material/Code';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import useScrollReveal from '@/hooks/useScrollReveal';
import Diversity3Icon from '@mui/icons-material/Diversity3';

const Qualities = () => {
  
  const analysisRef = useScrollReveal({duration: 1500, delay: 500})
  const codeRef = useScrollReveal({duration: 1500, delay: 1000})
  const aRef = useScrollReveal({duration: 1500, delay: 1500})

  return (
    <div id='qualities' className={`${styles.container} bg-gray-200 w-full py-20  text-black `}>
      <p className='text-3xl font-light text-center mb-12'>LO QUE HAGO</p>
      <div className={`${styles.qualityContainer}`}>
        <div ref={analysisRef} className={`${styles.quality}`}>
          <div className='flex justify-center items-center w-44 h-44 bg-blue-400 rounded-full relative'>
            <TroubleshootIcon width={25} sx={{fontSize: "60px", color:"white"}}/>
          </div>
          <p className='font-normal tracking-wide'>ANALISIS</p>
          <p className={`${styles.qualityDescription} text-center font-light leading-relaxed`}>
           Antes de empezar a escribir codigo es necesario analizar el producto a desarrollar o problema a resolver, para poder tener una buena base sobre la que construir y poder satisfacer de la mejor manera al usuario final.
          </p>
        </div>
        <div ref={codeRef} className={`${styles.quality}`}>
          <div className='flex justify-center items-center w-44 h-44 bg-blue-400 rounded-full relative'>
            <CodeIcon width={25} sx={{fontSize: "60px", color:"white"}}/>
          </div>
          <p>DESARROLLO</p>
          <p className={`${styles.qualityDescription} text-center font-light leading-relaxed`}>
           Con una base sólida en informática, me apasiona el desarrollo web. A medida que crezca como desarrollador, espero escribir un código limpio y legible que otros puedan usar y aprovechar para crear un software poderoso y escalable.</p>
        </div>
        <div ref={aRef} className={`${styles.quality}`}>
          <div className='flex justify-center items-center w-44 h-44 bg-blue-400 rounded-full relative'>
            <Diversity3Icon width={25} sx={{fontSize: "60px", color:"white"}}/>
          </div>
          <p>COMPAÑERISMO</p>
          <p className={`${styles.qualityDescription} text-center font-light leading-relaxed`}>
            Disfruto mucho ayudando a mis compañeros y trabajando en equipo, ya que considero que es fundamental para crecer exponencialmente y poder crear un producto excelente.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Qualities