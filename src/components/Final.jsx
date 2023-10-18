import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/Context'

const Final = () => {
    const navigate = useNavigate()
    const { laCorrecta } = useContext(Context)
    return (
        <>
            <h1>Vaya, respuesta incorrecta</h1>
            <h2>La respuesta correcta era: <strong>{laCorrecta}</strong></h2>
            <div className='imagen'>
                <img src={require('../resources/el_ahorcado6.png')} />
            </div>
            <button onClick={() => navigate("/juego")}>Volver a jugar</button>
        </>
    )
}

export default Final
