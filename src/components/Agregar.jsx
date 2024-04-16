import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './ModalAgregar.css';

function Agregar({ onAgregar }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleChangeNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeDescripcion = (event) => {
    setDescripcion(event.target.value);
  };



  const handleAgregar = () => {
    if (nombre.trim() === '') { // Verifica si el campo está vacío o solo contiene espacios en blanco
      Swal.fire({
        title: 'Campo vacío',
        text: 'Por favor ingresa un nombre válido',
        icon: 'error'
      });
      return; // Detiene la ejecución si el campo está vacío
    }


   
      if (descripcion.trim() === '') { // Verifica si el campo está vacío o solo contiene espacios en blanco
        Swal.fire({
          title: 'campo incompleto',
          text: 'ingresar descripcion',
          icon: 'error'
        });
        return; // Detiene la ejecución si el campo está vacío
      }
  




    Swal.fire({
      title: '¿Deseas agregar?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        onAgregar(nombre,descripcion);
        setNombre(''); // Limpiamos el campo de texto después de agregar
        setDescripcion('');
      
        Swal.fire({
          title: 'Agregado correctamente',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className="modal-agregar-container">
      <div className="modal-agregar-content">
        <h2>Agregar Nuevo Elemento</h2>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={handleChangeNombre} />
          Descripcion:
          <input type="text" value={descripcion} onChange={handleChangeDescripcion} />

        </label>
        <button onClick={handleAgregar}>Agregar</button>
      </div>
    </div>
  );
}

export default Agregar;
