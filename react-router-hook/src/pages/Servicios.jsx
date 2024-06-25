import React from 'react'
import Contador from '../components/Contador'

const Servicios = () => {
  return (
    <>
      <div>Servicios</div>
	    <hr/>
      <Contador valorInicial={7} nroContador={1} />
      <Contador valorInicial={53} nroContador={2} />
      <Contador valorInicial={0} nroContador={3} />
    </>
  )
}

export default Servicios