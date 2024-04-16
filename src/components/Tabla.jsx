import React from 'react';
import Eliminar from './Eliminar';
import './Tabla.css';

function Tabla({ datos, onEditar, onEliminar }) {
  return (
    <div className="table-container"> {/* Aplica la clase "table-container" */}
      <table className="table"> {/* Aplica la clase "table" para aplicar los estilos */}
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.nombre}</td>
              <td>{dato.descripcion}</td>
              <td>
                <button className="button" onClick={() => onEditar(dato.id, dato.nombre, dato.descripcion)}>Editar</button>
                <Eliminar onEliminar={onEliminar} id={dato.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
