import React from 'react'
import styles from "./styles.module.css"

const Curriculum = () => {

  const handleDownloadPDF = () => {
    const fileName = 'CV-Nicolas-Colombo.pdf'; // Reemplaza 'nombre_del_archivo.pdf' con el nombre correcto de tu archivo PDF.
    const pdfPath = '/CV-Nicolas-Colombo.pdf'; // Reemplaza '/ruta/del/archivo/nombre_del_archivo.pdf' con la ruta correcta de tu archivo PDF.
    const a = document.createElement('a');
    a.href = pdfPath;
    a.download = fileName;
    a.click();
  };

  return (
    <div id='curriculum' className={`${styles.container}`}>
      <p className='text-3xl font-light text-center mb-12 uppercase text-white'>Mira mi curriculum!</p>
      <button onClick={handleDownloadPDF} className={`${styles.button} border-2 border-white bg-transparent p-4 text-white`}>
        Descarga una copia
      </button>
    </div>
  )
}

export default Curriculum