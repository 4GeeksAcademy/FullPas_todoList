import React, { useEffect, useState } from "react";

const Actividades = () => {

    const [inputValue, setInputValue] = useState('')
    const [lista, setLista] = useState([])
    {/*Funcion externa del onchange */ }
    const handlechange = (e) => {
        setInputValue(e.target.value)
    }

    //useEffect (()=>{},[])
    useEffect(() => { console.log(inputValue); }, [inputValue])

    //Funcion para recoger valor del campo input.
    function enviarLista(e) {
        e.preventDefault()
        setLista([...lista, inputValue])
        setInputValue('')
    }

    function eliminarTarea(index) {
        setLista(lista.filter((_, i) => i !== index))
    }

    useEffect(() => {
        console.log(lista);

    }, [lista])

    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <h1 className="card-title text-center mb-4">Listado de tareas</h1>
                <form onSubmit={enviarLista}>
                    <input
                        className="form-control mb-3"
                        type="text"
                        value={inputValue}
                        onChange={handlechange}
                        placeholder="Escribe una tarea y presiona Enter"
                    />
                </form>
                <ul className="list-group">
                    {lista.map((elemento, indice) => {
                        return (
                            <li key={indice} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{elemento}</span>
                                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => eliminarTarea(indice)}>
                                    X
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )

}
export default Actividades