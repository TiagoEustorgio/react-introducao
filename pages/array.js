import React from 'react'
import Pagina from '../components/Pagina'


const array = () => {

  const carros = ['Opala','Classic','Ka','Omega','Fusca']
  return (
    <>
    <Pagina titulo="Array">
    <ol>
      {carros.map(item=> (
        
        <li>
        <p>{item}</p>
        </li>
       
      ))}

</ol>
    </Pagina>
    </>
  )
}

export default array