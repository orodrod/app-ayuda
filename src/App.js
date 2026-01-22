
import React, { useState, useEffect } from 'react';
import MenuLateral from './componentes/MenuLateral';
import Cuerpo from './componentes/Cuerpo';
import './App.css'; 

function App() {
  const [secciones, setSecciones] = useState([]);
  const [seleccionado, setSeleccionado] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Requisito 3: Carga de datos con fetch
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
        // Opcional: Seleccionar el primero por defecto
        if (datos.secciones.length > 0) {
          setSeleccionado(datos.secciones[0]);
        }
        setCargando(false);
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudo cargar la ayuda. Intente más tarde.');
        setCargando(false);
      });
  }, []);

  if (cargando) return <div className="carga">Cargando documentación...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="app-container">
      {/* Header simple tipo React.dev */}
      <header className="top-bar">
        <span className="logo">⚛️ Ayuda React</span>
      </header>

      <div className="main-layout">
        {/* Requisito 4: Componentes Reutilizables */}
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