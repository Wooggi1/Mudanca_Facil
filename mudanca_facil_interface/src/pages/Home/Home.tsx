import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import './style.css';
import { useEffect, useState } from "react";
import SolicitarMudancaModal from "../../components/modals/SolicitarMudanca/SolicitarMudaca";
import type { SolicitarMudancaData } from "../../model/types";
import MudancaAgendadaCard from "../../components/modals/MudancaAgendadaCard/MudancaAgendadaCard";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../services/apiClient";

function Home() {
  const { user } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mudancas, setMudancas] = useState<SolicitarMudancaData[]>([]);

  useEffect(() => {
    if (!user?.id) return;

    api.get(`/mudancas/cliente/${user.id}`)
      .then((res) => {
        setMudancas(res.data); // <- Armazena os dados no estado
      })
      .catch((err) => {
        console.error("Erro ao buscar mudanças:", err);
      });
  }, [user.id]); 

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
          />
        </div>
      </div>
    </>
  );
}

export default Home;
