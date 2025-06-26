import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import '../SolicitarMudanca/style.css';
import { api } from '../../services/apiClient';

function RequestMove() {
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [tipoMudanca, setTipoMudanca] = useState('Casa');
  const [categoria, setCategoria] = useState('');
  const [dataHora, setDataHora] = useState(''); // formato yyyy-MM-dd HH:mm
  const [loading, setLoading] = useState(false)

  // Atualiza automaticamente dataHora sempre que data ou hora mudar
  useEffect(() => {
    if (data && hora) {
      setDataHora(`${data} ${hora}`);
    }
  }, [data, hora]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      origem,
      destino,
      dataHora,
      tipoMudanca,
      categoria
    };

    try {
      setLoading(true)
      await api.post('/mudancas', payload);
      setLoading(false)
      alert('Mudança solicitada com sucesso!');
    } catch (error) {
      console.error('Erro ao solicitar mudança:', error);
      alert('Erro ao solicitar mudança');
    }
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
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
              required
            />
            <input
              className="custom-input"
              type="text"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              required
            />
            <input
              className="custom-input"
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
            <input
              className="custom-input"
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            />
          </div>

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="residencia"
                value="Casa"
                checked={tipoMudanca === 'Casa'}
                onChange={(e) => setTipoMudanca(e.target.value)}
              />
              Casa
            </label>
            <label>
              <input
                type="radio"
                name="residencia"
                value="Apartamento"
                checked={tipoMudanca === 'Apartamento'}
                onChange={(e) => setTipoMudanca(e.target.value)}
              />
              Apartamento
            </label>
          </div>

          <div className="select-group">
            <label>Itens da mudança</label>
            <select
              className="custom-input"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              required
            >
              <option value="">Selecionar itens</option>
              <option value="1">Mesa, cadeiras, sofá</option>
              <option value="2">Cama, armário</option>
              <option value="3">Mudança completa</option>
            </select>
          </div>

          <div className="form-button">
            <Button type="submit" loading={loading}>Solicitar</Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RequestMove;
