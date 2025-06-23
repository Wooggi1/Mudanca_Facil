import { useState } from "react";
import "../CadastroEmpresa/style.css";
import Modal from "../ModalPadrao/TemplateModal";
import Button from "../../Button/Button";

type CadastroEmpresaProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

function ModalCadastroEmpresa({
  isOpen,
  onClose,
  onConfirm,
}: CadastroEmpresaProps) {
  if (!isOpen) return null;

  const [porte, setPorte] = useState("");
  const [RA, setRA] = useState("");
  const [casaApt, setCasaApt] = useState("");

  const [pequenoPreco, setPequenoPreco] = useState<number>(0);
  const [medioPreco, setMedioPreco] = useState<number>(0);
  const [grandePreco, setGrandePreco] = useState<number>(0);

  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  console.log("modal aberto");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="modal-content-interior">
          <label>Qual porte de mudança atende?</label>
          <select value={porte} onChange={(e) => setPorte(e.target.value)}>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </select>
        </div>

        <div className="modal-content-interior">
          <label>Qual disponibilidade de horário?</label>
          <div className="time-range">
            <label>
              Início:
              <input
                id="inicio"
                name="inicio"
                type="time"
                value={inicio}
                onChange={(e) => setInicio(e.target.value)}
              />
            </label>

            <span>até</span>

            <label>
              Fim:
              <input
                id="inicio"
                name="inicio"
                type="time"
                value={fim}
                onChange={(e) => setFim(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="modal-content-interior">
          <label>Quais RA's atende no Distrido Federal?</label>
          <select value={RA} onChange={(e) => setRA(e.target.value)}>
            <option value="candangolandia">Candangolândia</option>
            <option value="taguatinga">Taguatinga</option>
            <option value="riacho_fundo">Riacho Fundo</option>
            <option value="aguas claras">Águas Claras</option>
          </select>
        </div>

        <div className="modal-content-interior">
          <label>Atende casa e apartamento?</label>
          <select value={casaApt} onChange={(e) => setCasaApt(e.target.value)}>
            <option value="casa">Somente casa</option>
            <option value="apt">Somente apartamento</option>
            <option value="casa_apt">Casa e aparamento</option>
          </select>
        </div>

        <div className="modal-content-interior">
          <label>Qual a média de preço por mudança?</label>
          <div className="inputs-container">
            <label>
              Pequeno:
              <input
                id="pequeno_preco"
                name="pequeno_preco"
                type="number"
                step="0.01"
                min="0"
                value={pequenoPreco}
                onChange={(e) => setPequenoPreco(Number(e.target.value))}
                placeholder="Ex: 99.99"
              />
            </label>

            <div className="">
              <label>
                Medio:
                <input
                  id="medio_preco"
                  name="medio_preco"
                  type="number"
                  step="0.01"
                  min="0"
                  value={medioPreco}
                  onChange={(e) => setMedioPreco(Number(e.target.value))}
                  placeholder="Ex: 99.99"
                />
              </label>

              <div className="">
                <label>
                  Grande:
                  <input
                    id="grande_preco"
                    name="grande_preco"
                    type="number"
                    step="0.01"
                    min="0"
                    value={grandePreco}
                    onChange={(e) => setGrandePreco(Number(e.target.value))}
                    placeholder="Ex: 99.99"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="button-centralizado">
          <Button onClick={onConfirm}>Completar cadastro</Button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalCadastroEmpresa;
