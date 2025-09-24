function Filtros() {
    return (
        <section>
            <div>
                <label htmlFor="categoria">Categoria</label>
                <select id='categoria'>
                    <option value='all'>Todas</option>
                    <option value='bebida'>Bebidas</option>
                    <option value='comida'>Comidas</option>
                </select>
            </div>
        </section>
    )
}

export default Filtros;