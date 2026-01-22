import react from "react";
import ImagenDisplay from "./ImagenDisplay";

const Cuerpo = ({datos}) => {
    if (!datos) {
    return <div className="vacio">Selecciona un tema para comenzar.</div>;
    }

  return (
    <div className="area-contenido">
      <h1>{datos.titulo}</h1>
      <p className="descripcion">{datos.contenido}</p>
      <ImagenDisplay src={datos.imagen} alt={`Ilustración de ${datos.titulo}`} />
    </div>
  );
};

export default Cuerpo;