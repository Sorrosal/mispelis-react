import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export default function Crear({ setListadoState }) {

    const tituloComponente = "Añadir película";
    const [peliState, setPeliState] = useState({
        titulo: '',
        descripcion: ''
    });
    const { titulo, descripcion } = peliState;

    const conseguirDatosForm = e => {
        //Evitar refresco pantalla al enviar form
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let description = target.descipcion.value;

        // Crear objeto de la película a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion: description
        }

        // Guardar estado
        setPeliState(peli);

        //Actualizar estado
        setListadoState(elementos => {
            return [...elementos, peli];
        });
        // Guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli);




    }

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            <strong>
                {(titulo && descripcion) && "Has creado la película " + titulo}
            </strong>
            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Título" />

                <textarea
                    id="descripcion"
                    name="descipcion"
                    placeholder="Descripción"></textarea>

                <input type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    )
}
