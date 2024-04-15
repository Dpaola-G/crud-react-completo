import React, { useState } from 'react';
import Tabla from './components/Tabla';
import Modal from './components/ModalEditar';
import Agregar from './components/Agregar';
import Buscador from './components/Buscador';

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [datos, setDatos] = useState([
    { id: 1, nombre: 'Ejemplo 1' },
    { id: 2, nombre: 'Ejemplo 2' },
    { id: 3, nombre: 'Ejemplo 3' },
  ]);
  const [nombreEditado, setNombreEditado] = useState('');
  const [idEditado, setIdEditado] = useState(null);
  const [mostrarFormularioAgregar, setMostrarFormularioAgregar] = useState(false);
  const [filtroNombre, setFiltroNombre] = useState('');

  const mostrarModal = (id, nombre) => {
    setIdEditado(id);
    setNombreEditado(nombre);
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const handleGuardar = (nuevoNombre) => {
    const nuevosDatos = datos.map((item) =>
      item.id === idEditado ? { ...item, nombre: nuevoNombre } : item
    );
    setDatos(nuevosDatos);
    cerrarModal();
  };

  const handleAgregar = (nuevoNombre) => {
    const nuevoId = datos.length + 1;
    const nuevoDato = { id: nuevoId, nombre: nuevoNombre };
    setDatos([...datos, nuevoDato]);
    setMostrarFormularioAgregar(false);
  };

  const handleEliminar = (id) => {
    const nuevosDatos = datos.filter((dato) => dato.id !== id);
    setDatos(nuevosDatos);
  };

  const handleBuscar = (texto) => {
    setFiltroNombre(texto);
  };

  const datosFiltrados = datos.filter((dato) =>
    dato.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
  );

  return (
    <div>
      <h1>Tabla de Datos</h1>
      <Buscador onBuscar={handleBuscar} />
      <Tabla datos={datosFiltrados} onEditar={mostrarModal} onEliminar={handleEliminar} />
      {modalVisible && (
        <Modal
          nombre={nombreEditado}
          onClose={cerrarModal}
          onGuardar={handleGuardar}
        />
      )}
      {mostrarFormularioAgregar && <Agregar onAgregar={handleAgregar} />}
      <button onClick={() => setMostrarFormularioAgregar(!mostrarFormularioAgregar)}>
        {mostrarFormularioAgregar ? 'Cancelar' : 'Agregar Nuevo'}
      </button>
    </div>
  );
}

export default App;
