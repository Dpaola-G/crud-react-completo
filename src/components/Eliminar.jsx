import React from 'react';
import Swal from 'sweetalert2';

function Eliminar({ onEliminar, id }) {
  const handleEliminar = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        onEliminar(id);


        Swal.fire({
            title: 'Producto eliminado correctamente',
            icon: 'success',
          });
      }
    });
  };

  return (
    <button onClick={handleEliminar}>Eliminar</button>
  );
}

export default Eliminar;
