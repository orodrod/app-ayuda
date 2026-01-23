import React from 'react';

const MenuLateral = ({secciones, seleccionado, idActivo}) => {

    /*Recibe las secciones, para listarlas mediante el map en el menú. */
    return (
        <nav className="barra-lateral">
            <h3>Documentación</h3>
            <ul>
                {secciones.map((seccion) => (
                    <li key={seccion.id}>
                        {/*Si esta seleccionado cambia el estilo y se colorea para indicarlo. */}
                        <button
                        className={idActivo === seccion.id ? 'active' : ''}
                        onClick={() => seleccionado(seccion)}
                        >
                        {seccion.titulo}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
  );
};

export default MenuLateral;