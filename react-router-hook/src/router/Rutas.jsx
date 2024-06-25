import { useRoutes } from 'react-router'
import App from '../App'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'
import Contacto from '../pages/Contacto'
import NoEncontrado from '../pages/NoEncontrado'

const Rutas = () => {
    
    let rutas = useRoutes(
        [
            {
                path: '/',
                element: <App />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/servicios', 
                element: <Servicios />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '*',
                element: <NoEncontrado />
            }
        ]
    )
}

export default Rutas

