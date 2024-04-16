import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './styles.css';

function ModalEditar({ nombre, descripcion, onClose, onGuardar }) {
  const [nuevoNombre, setNuevoNombre] = useState(nombre);
  const [nuevaDescripcion, setNuevaDescripcion] = useState(descripcion);

  const handleChangeNombre = (event) => {
    setNuevoNombre(event.target.value);
  };

  const handleChangeDescripcion = (event) => {
    setNuevaDescripcion(event.target.value);
  };

  const handleGuardar = () => {
    if (!nuevoNombre.trim() || !nuevaDescripcion.trim()) { // Verifica si alguno de los campos está vacío o contiene solo espacios en blanco
      Swal.fire({
        title: 'Campos vacíos',
        text: 'Por favor llena ambos campos antes de guardar.',
        icon: 'warning',
      });
    } else {
      Swal.fire({
        title: '¿Deseas realizar cambios?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          onGuardar(nuevoNombre, nuevaDescripcion); // Pasamos ambos valores al callback de guardar

          Swal.fire({
            title: 'Producto editado correctamente',
            icon: 'success',
          });
          onClose(); // Cerramos el modal después de guardar
        }
      });
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Editar Nombre</h2>
        <form>
          <label>
            Nombre:
            <input
              type="text"
              value={nuevoNombre}
              onChange={handleChangeNombre}
            />
          </label>
          <label>
            Descripción:
            <input
              type="text"
              value={nuevaDescripcion}
              onChange={handleChangeDescripcion}
            />
          </label>
          <button type="button" onClick={handleGuardar}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalEditar;
