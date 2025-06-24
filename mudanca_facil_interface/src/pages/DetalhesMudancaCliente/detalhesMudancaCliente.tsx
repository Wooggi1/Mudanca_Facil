import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import './DetalhesMudancaCliente.css';

function DetalhesMudancaCliente() {
  const handleCancelar = () => {
    alert("Mudança cancelada.");
  };

  return (
    <>
      <Navbar />
      <div className="detalhes-container">
        <h2 className="titulo">Mudança fácil</h2>

        <div className="card-detalhes">
          <div className="header-card">
            <p><strong>Mudança pré-agendada para 21/07 às 09h</strong></p>
            <p className="valor"><strong>Valor: R$ 500,00</strong></p>
          </div>

          <p><strong>Empresa responsável:</strong> Lorem ipsum dolor</p>
          <p><strong>Origem:</strong> Taguatinga</p>
          <p><strong>Destino:</strong> Planaltina</p>

          <div className="itens-lista">
            <p><strong>Itens:</strong></p>
            <ul>
              <li>Geladeira</li>
              <li>TV</li>
              <li>Fogão</li>
              <li>Armário 2 portas</li>
            </ul>
          </div>

          <div className="btn-cancelar">
            <Button onClick={handleCancelar}>Cancelar</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetalhesMudancaCliente;
