import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import './style.css';
import { useState } from "react";
import SolicitarMudancaModal from "../../components/modals/SolicitarMudanca/SolicitarMudaca";
import type { SolicitarMudancaData } from "../../model/types";
import MudancaAgendadaCard from "../../components/modals/MudancaAgendadaCard/mudancaAgendadaCard";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mudancas, setMudancas] = useState<SolicitarMudancaData[]>([]);

  const adicionarMudanca = (novaMudanca: SolicitarMudancaData) => {
    if (!novaMudanca) return;

    setMudancas(prev => [...prev, novaMudanca]);
    setIsModalOpen(false)
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2 className="title">Mudança fácil</h2>
        
        <div className="empty-state">
          {mudancas.length === 0 ? (
            <p className="empty-message">Nenhuma mudança encontrada</p>
          ) : (
            <ul className="mudanca-list">
              {mudancas.map((mudanca) => (
                <MudancaAgendadaCard 
                  key={mudanca.id}               // chave única para React
                  origem={mudanca.origem}
                  destino={mudanca.destino}
                  data={mudanca.data ?? new Date()}
                  horario={mudanca.horario}
                  tipoResidencia={mudanca.tipoResidencia}
                  itemSelecionado={mudanca.itemSelecionado}
                />
              ))}
            </ul>
          )}
          <Button onClick={() => setIsModalOpen(true)}>
            Solicitar <br /> orçamento
          </Button>

          <SolicitarMudancaModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={adicionarMudanca}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
