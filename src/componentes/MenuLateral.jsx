import React from 'react';

const MenuLateral = ({secciones, seleccionado, idActivo}) => {

    return (
        <nav className="barra-lateral">
            <h3>Documentación</h3>
            <ul>
                {secciones.map((seccion) => (
                    <li key={seccion.id}>
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