import { useContext } from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Context from "../context/Context"
import { palabras } from "../resources/palabras"

const Juego = () => {

    const navigate = useNavigate()

    const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    const misColores = [{
        backgroundColor: "white"
    }, {
        backgroundColor: "green",
        color: "white"
    }, { backgroundColor: "red", color: "white" }]
    const letrasArray = letras.split("")

    const { escribir } = useContext(Context)

    const [azar, setAzar] = useState(0)
    const [palabra, setPalabra] = useState([])
    const [misLetras, setMisLetras] = useState([])
    const [correctas, setCorrectas] = useState([])
    const [erroneas, setErroneas] = useState([])
    const [imagen, setImagen] = useState(1)
    useEffect(() => {
        setAzar(Math.floor(Math.random() * palabras.length))

    }, [])
    useEffect(() => {
        setPalabra(palabras[azar].palabro.split(""))
        escribir(palabras[azar].palabro)
    }, [azar])

    const pulsado = (e) => {
        const letra = e.target.innerHTML
        setMisLetras([...misLetras, letra])
        if (palabra.indexOf(letra) >= 0) {
            setCorrectas([...correctas, letra])
        } else {
            setErroneas([...erroneas, letra])
            setImagen(imagen + 1)
            if (imagen > 5) {
                navigate("/final")
            }
        }
    }

    useEffect(() => {
        let noEncontrado = 0
        palabra.map(letra => {
            if (misLetras.find(e => e === letra) === undefined) {
                noEncontrado++
            }
        })
        if (noEncontrado === 0 && correctas.length > 0) {
            navigate("/ganado")
        }
    }, [correctas])

    return (
        <>
            <div className="pregunta">
                {palabras[azar].pregunta}
            </div>
            <div className="palabra">
                {palabra.map((letra, indice) => (
                    misLetras.indexOf(letra) === -1
                        ? <div className="palo" key={indice}></div>
                        : <div className="palo" key={indice}>{letra.toUpperCase()}</div>
                ))}
            </div>
            <div className="botones">
                {
                    letrasArray.map((letra) => (
                        (correctas.find(e => e === letra))
                            ? <button style={misColores[1]} key={letra} >{letra}</button>
                            :
                            (erroneas.find(e => e === letra))
                                ?
                                <button style={misColores[2]} key={letra} >{letra}</button>
                                :
                                <button style={misColores[0]} key={letra} onClick={pulsado}>{letra}</button>
                    ))
                }
            </div>
            <div className="imagen">
                <img src={require(`../resources/el_ahorcado${imagen}.png`)} />
            </div>
        </>
    )
}

export default Juego
