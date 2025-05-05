import React, { useState } from 'react';

function App() {
  const [mensaje, setMensaje] = useState('');

  const mostrarMensaje = () => {
    setMensaje('¡Hola! Este es el mensaje desplegado.');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React + Docker</h1>
      <button onClick={mostrarMensaje}>Mostrar mensaje</button>
      {mensaje && <p style={{ marginTop: '20px' }}>{mensaje}</p>}
    </div>
  );
}

export default App;
