import React from 'react';

const MenuLateral = () => {

    return (
        <div className='contenedor-principal'>
            <Grid seleccionar = {agregarProducto}/>
            <PanelPedido seleccionados = {pedido} finalizar = {finalizarVenta} agregar = {agregarUno} quitar = {quitarUno}/>
        </div>
    )
};

export default MenuLateral;