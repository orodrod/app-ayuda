import react from "react";
import ImagenDisplay from "./ImagenDisplay";

const Cuerpo = ({datos}) => {
  /*Si datos estuviera vacío aparece el siguiente mensaje. */
  if (!datos) {
    return <div className="vacio">Selecciona un tema para comenzar.</div>;
    }
  
  /*Usamos los datos para rellenar el espacio del cuerpo. */
  return (
    <div className="area-contenido">
      <h1>{datos.titulo}</h1>
      <p className="descripcion">{datos.contenido}</p>
      {/*Pasamos el src de las imagen guardada en datos. */}
      <ImagenDisplay src={datos.imagen} alt={`Ilustración de ${datos.titulo}`} />
    </div>
  );
};

export default Cuerpo;