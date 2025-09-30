import "../styles/Filtros.css"

function Filtros({onChange}) {

    const cambioCategoria = (event) => {
        onChange(prevState => ({
            ...prevState,
            categoria: event.target.value
        }))
    }

    return (
        <section className="filtros-contenedor">
            <div>
                <label htmlFor="categoria">Categoria</label>
                <select id='categoria' onChange={cambioCategoria}>
                    <option value='Todos'>Todas</option>
                    <option value='cafe'>Cafe</option>
                    <option value='pasteleria'>
                        Pasteleria
                    </option>
                </select>
            </div>
        </section>
    )
}

export default Filtros;