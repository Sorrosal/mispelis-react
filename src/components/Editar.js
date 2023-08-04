import React from 'react'
export default function Editar({ peli, conseguirPeliculas, setEditar, setListadoState }) {
    const titulo_componente = 'Editar película'

    const guardarEdicion = (e, id) => {
        // Para que no refresque al enviar formulario
        e.preventDefault();

        // Conseguir el target del evento
        let target = e.target;

        // Buscar el índice del objeto de la película a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        // Crear objeto con ese índice
        let peli_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        // Actualizar el elemento con ese índice
        pelis_almacenadas[indice] = peli_actualizada;

        // Guardar el nuevo array de objetos en el localstorage
        localStorage.setItem("pelis", JSON.stringify(pelis_almacenadas));

        // Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);
    }
    return (
        <div className='edit_form'>
            <h3 className='title'>{titulo_componente}</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input type='text'
                    name='titulo'
                    className='titulo_editado'
                    defaultValue={peli.titulo}
                />
                <textarea
                    name='descripcion'
                    defaultValue={peli.descripcion}
                    className='descripcion_editada'
                ></textarea>
                <input type="submit" className='editar' value='Actualizar' />
            </form>
        </div>
    )
}
