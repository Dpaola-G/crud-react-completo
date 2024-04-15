import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './styles.css';

function ModalEditar({ nombre, onClose, onGuardar }) {
  const [nuevoNombre, setNuevoNombre] = useState(nombre);

  const handleChangeNombre = (event) => {
    setNuevoNombre(event.target.value);
  };

  const handleGuardar = () => {
    Swal.fire({
      title: '¿Deseas editar el nombre?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        onGuardar(nuevoNombre);


        Swal.fire({
          title: 'Producto editado correctamente',
          icon: 'success',
        });
        
      }
    });
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
          <button type="button" onClick={handleGuardar}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalEditar;
