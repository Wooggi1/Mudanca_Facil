import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import './style.css';
import { useState } from "react";
import SolicitarMudancaModal from "../../components/modals/SolicitarMudanca/SolicitarMudaca";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2 className="title">Mudança fácil</h2>
        
        <div className="empty-state">
          <p className="empty-message">Nenhuma mudança encontrada</p>
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
