import React from 'react'
import avengers from './avengers.jpeg'

const Nosotros = () => {
    return (
        <>
            <div>Nosotros</div>
            <figure className="figure">
                <img src={avengers} className="figure-img img-fluid rounded" alt="vengadores" />
                    <figcaption className="figure-caption">Los vengadores!! :)</figcaption>
            </figure>
        </>
    )
}

export default Nosotros