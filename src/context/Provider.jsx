import { useState } from "react"
import Context from "./Context"


const Provider = ({ children }) => {
    const [laCorrecta, setLaCorrecta] = useState("")
    const escribir = (aGuardar) => {
        setLaCorrecta(aGuardar)
    }
    return (
        <Context.Provider value={{
            escribir,
            laCorrecta
        }}>
            {children}
        </Context.Provider>
    )
}

export default Provider