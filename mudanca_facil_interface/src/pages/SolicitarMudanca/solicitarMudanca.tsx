import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import '../SolicitarMudanca/style.css';

function RequestMove() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [housingType, setHousingType] = useState('');
  const [selectedItems, setSelectedItems] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mudança solicitada!');
  };

  return (
    <>
      <Navbar />
      <div className="request-container">
        <h2 className="title">Solicitar mudança</h2>
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              className="custom-input"
              type="text"
              placeholder="Origem"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              required
            />
            <input
              className="custom-input"
              type="text"
              placeholder="Destino"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
            />
            <input
              className="custom-input"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              className="custom-input"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="type"
                value="Casa"
                checked={housingType === 'Casa'}
                onChange={(e) => setHousingType(e.target.value)}
              />
              Casa
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="Apartamento"
                checked={housingType === 'Apartamento'}
                onChange={(e) => setHousingType(e.target.value)}
              />
              Apartamento
            </label>
          </div>

          <div className="select-group">
            <label>Itens da mudança</label>
            <select
              className="custom-input"
              value={selectedItems}
              onChange={(e) => setSelectedItems(e.target.value)}
              required
            >
              <option value="">Selecionar itens</option>
              <option value="1">Mesa, cadeiras, sofá</option>
              <option value="2">Cama, armário</option>
              <option value="3">Mudança completa</option>
            </select>
          </div>

          <div className="form-button">
            <Button type="submit">Solicitar</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RequestMove;
