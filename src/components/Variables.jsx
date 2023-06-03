import React from 'react'

const Variables = () => {
    const nombre = "Roberto Morales"
    const imagen = "https://www.futbolred.com/files/article_main/files/crop/uploads/2019/04/08/5cabb6796d7d6.r_1589230801490.0-164-4000-2162.jpeg"
    const text_alt = "Estadio Metropolitano"
  return (
    <div>
        <h1>VARIABLES</h1>
        <h2>Hola, mi nombre es {nombre} </h2>
        <img src={imagen} alt={text_alt} />
    </div>
  )
}

export default Variables