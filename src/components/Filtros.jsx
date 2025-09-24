function Filtros({onChange}) {

    const cambioCategoria = (event) => {
        onChange(prevState => ({
            ...prevState,
            categoria: event.target.value
        }))
    }

    return (
        <section>
            <div>
                <label htmlFor="categoria">Categoria</label>
                <select id='categoria' onChange={cambioCategoria}>
                    <option value='Todos'>Todas</option>
                    <option value='bebida'>Bebidas</option>
                    <option value='comida'>Comidas</option>
                </select>
            </div>
        </section>
    )
}

export default Filtros;