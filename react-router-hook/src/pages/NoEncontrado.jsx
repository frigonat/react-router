import React from 'react'
import not_found from './404-not-found.jpg'

<></>
const NoEncontrado = () => {
  return (
    <>
        <div className='alert alert-danger'>No se ha encontrado la página</div>

        <figure className="figure">
                <img src={not_found} className="figure-img img-fluid rounded" alt="no_encontrado" />
        </figure>
    </>
  )
}

export default NoEncontrado