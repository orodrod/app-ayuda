
import React, { useState, useEffect } from 'react';
import MenuLateral from './componentes/MenuLateral';
import Cuerpo from './componentes/Cuerpo';
import './App.css'; 

function App() {
  const [secciones, setSecciones] = useState([]); /*Guarda todas las secciones. */
  const [seleccionado, setSeleccionado] = useState(null); /*La sección actual. */
  const [cargando, setCargando] = useState(true);  /*Estado de carga. */
  const [error, setError] = useState(null); /*Nos dice si hay error. */

  
  /*Llamada al archivo json que guarda la info. */
  useEffect(() => {
    fetch('/datos.json')
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error al cargar el archivo JSON');
        }
        return respuesta.json();
      })
      .then((datos) => {
        setSecciones(datos.secciones);
        
        /*Si el archivo tiene mas de una seccion la primera se muestra por defecto al inicio */
        if (datos.secciones.length > 0) {
          setSeleccionado(datos.secciones[0]);
        }
        setCargando(false); /*Cambiamos el estado de carga */
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudo cargar la ayuda. Intente más tarde.'); /*Cargará este error al estado. */
        setCargando(false);
      });
  }, []);

  /*Si esta cargando mostrará cargando si hay error mostrará el error, estos mensajes no saldrán salvo que haya un fallo o en la carga entre inforación, pero solo será apreciable si tarda mucho en cargar. */
  if (cargando) return <div className="carga">Cargando documentación...</div>;
  if (error) return <div className="error">{error}</div>;

  /*Pintamos la composición */
  return (
    <div className="app-container">
      
      <header className="top-bar">
        <img className='logo-app' src='/logo192.png'/><span className="logo"> Ayuda React</span>
      </header>

      <div className="main-layout">
        <MenuLateral 
          secciones={secciones} 
          seleccionado={setSeleccionado} 
          idActivo={seleccionado?.id}
        />
        <Cuerpo datos={seleccionado} />
      </div>
    </div>
  );
}

export default App;