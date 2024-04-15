import React from 'react';
import Eliminar from './Eliminar';
import './Tabla.css'; // Importa el archivo de estilos con './' para indicar que es un archivo relativo

function Tabla({ datos, onEditar, onEliminar }) {
  return (
    <table className="tabla"> {/* Agrega la clase "tabla" para aplicar los estilos */}
      <thead>
        <tr>
          <th>producto</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato) => (
          <tr key={dato.id}>
            <td>{dato.nombre}</td>
            <td>
              <button onClick={() => onEditar(dato.id, dato.nombre)}>Editar</button>
              <Eliminar onEliminar={onEliminar} id={dato.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabla;
