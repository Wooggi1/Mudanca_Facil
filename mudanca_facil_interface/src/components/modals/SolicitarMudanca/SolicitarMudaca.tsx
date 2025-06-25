import Modal from "../ModalPadrao/TemplateModal";
import type { ModalSolicitarMudanca } from '../../../model/types'
import { useState } from "react";
import "../SolicitarMudanca/style.css";

function SolicitarMudancaModal({ isOpen, onClose, onConfirm }: ModalSolicitarMudanca) {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState<Date | null>(null);
  const [horario, setHorario] = useState<string>("");
  const [tipoResidencia, setTipoResidencia] = useState("");
  const [itemSelecionado, setItemSelecionado] = useState("");

  function handleChangeOrigem(e: React.ChangeEvent<HTMLInputElement>) {
    setOrigem(e.target.value);
  }

  function handleChangeDestino(e: React.ChangeEvent<HTMLInputElement>) {
    setDestino(e.target.value);
  }

  function handleChangeData(e: React.ChangeEvent<HTMLInputElement>) {
    const dateString = e.target.value;
    const parsedDate = new Date(dateString + "T00:00:00");
    setData(parsedDate);
  }

  function handleChangeHorario(e: React.ChangeEvent<HTMLInputElement>) {
    setHorario(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const dados = {
      id: Date.now().toString() + Math.random().toString(16).slice(2),
      origem,
      destino,
      data,
      horario,
      tipoResidencia,
      itemSelecionado,
    };

    onConfirm(dados)
    console.log("Solicitação de mudança:", dados);
    // Aqui você pode enviar os dados para uma API, por exemplo
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="home-modal">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="top-inputs-container">
          <input
            id="origem"
            name="origem"
            placeholder="Origem"
            value={origem}
            onChange={handleChangeOrigem}
            required
            className="top-inputs"
          />

          <input
            id="destino"
            name="destino"
            placeholder="Destino"
            value={destino}
            onChange={handleChangeDestino}
            required
            className="top-inputs"
          />

          <input
            id="data"
            name="data"
            type="date"
            value={data ? data.toISOString().split("T")[0] : ""}
            onChange={handleChangeData}
            required
            className="top-inputs"
          />

          <input
            id="horario"
            name="horario"
            placeholder="Horário"
            value={horario}
            onChange={handleChangeHorario}
            required
            className="top-inputs"
          />
        </div>

        <div className="radio-div">
          <label>
            <input
              type="radio"
              name="residencia"
              value="casa"
              checked={tipoResidencia === "casa"}
              onChange={() => setTipoResidencia("casa")}
              required
            />
            <span className="radio-label">Casa</span>
          </label>

          <label>
            <input
              type="radio"
              name="residencia"
              value="apartamento"
              checked={tipoResidencia === "apartamento"}
              onChange={() => setTipoResidencia("apartamento")}
            />
            <span className="radio-label">Apartamento</span>
          </label>
        </div>

        <div className="select-div">
          <label htmlFor="itens">Itens da mudança</label>
          <select
            id="itens"
            value={itemSelecionado}
            onChange={(e) => setItemSelecionado(e.target.value)}
            required
          >
            <option value="">Selecionar itens</option>
            <option value="moveis">Móveis</option>
            <option value="eletrodomesticos">Eletrodomésticos</option>
            <option value="caixas">Caixas</option>
            <option value="itens_diversos">Itens Diversos</option>
          </select>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-button">
            Solicitar
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default SolicitarMudancaModal;
