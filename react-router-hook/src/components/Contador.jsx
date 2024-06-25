import React, { useState } from 'react'

const Contador = ({valorInicial, nroContador}) => {
    //console.log(useState("s-36")[0])
    //console.log(useState("s-36")[1])

    let [contador, setContador] = useState(valorInicial)   //useState(22) se ejecuta y el resultado entrega dos valores a la variable contador y setContador. Si yo quiero usar el contenido de contador hago:
    //console.log("El contador es:")
    //console.log(contador)

    const handleIncrement = () => {
        setContador(contador + 1)
        console.log(contador)
    }

    const handleDecrement = () => {
        setContador(contador - 1)
        console.log(contador)
    }

    const handleReload = () => {
        console.log("Se solicitó el reinicio del contador")
        console.log(contador)
        console.log(valorInicial)
        setContador(valorInicial)
        console.log(contador)
    }

    return (

        <div className="card border-danger mb-2">
            <div className="card-body">
                <h5 className="card-title">Este es el contador número {nroContador}</h5>
                <h6 className="display-2 mb-2 text-danger ">{contador}</h6>
                <p>Soy el contador {nroContador} - voy a incrementar de 1 en 1</p>
                <button className="btn btn-danger me-2" onClick={handleIncrement}>Incrementar</button>
                <button className="btn btn-warning me-2" onClick={handleDecrement}>Decrementar</button>
				<button className="btn btn-secondary" onClick={handleReload}>Reiniciar</button>
            </div>
        </div>
    )
}

export default Contador