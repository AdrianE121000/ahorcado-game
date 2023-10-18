import React from 'react'
import { useNavigate } from 'react-router-dom'

const Ganado = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Muy bien, has ganado</h1>
            <div className='imagen'>
                <img src={require('../resources/el_ahorcado1.png')} />
            </div>
            <button onClick={() => navigate("/juego")}>Volver a jugar</button>
        </>
    )
}

export default Ganado
