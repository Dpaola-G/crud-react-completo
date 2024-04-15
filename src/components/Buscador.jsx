import React, { useState } from 'react';

function Buscador({ onBuscar }) {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const handleChange = (event) => {
    setTextoBusqueda(event.target.value);
    onBuscar(event.target.value.trim());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={textoBusqueda}
        onChange={handleChange}
      />
    </div>
  );
}

export default Buscador;
