import React, { useState } from 'react'

const Project = ({title, description, image, url}) => {
  const [showDescription, setShowDescription] = useState(false)

  const handleEnter = () => {
    setShowDescription(true)
  }

  const handleLeave = () => {
    setShowDescription(false)
  }

  return (
    <div
    onMouseEnter={()=> handleEnter()} 
    onMouseLeave={()=> handleLeave()}
    style={{height:"500px"}}
    className='flex flex-col border border-white rounded-lg overflow-hidden'>  
      <p className='text-center p-2 bg-violet-700'>{title}</p>
      <figure 
        className='flex-1 relative cursor-pointer'
        onClick={()=> window.open(url, "_blank")}
      >
        <img className=' w-full h-full object-cover hover:opacity-50' src={image} alt="" />
      </figure>
      {showDescription && 
        <p
        style={{backgroundColor: "gainsboro"}}
        className='text-center text-black p-3'>
          {description}
        </p>
      }

    </div>
  )
}

export default Project