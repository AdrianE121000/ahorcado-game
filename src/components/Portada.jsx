import { useNavigate } from "react-router-dom"


const Portada = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Bienvenido/a</h1>
            <button onClick={() => navigate("/juego")} className="boton">Jugar</button>
        </>
    )
}

export default Portada
