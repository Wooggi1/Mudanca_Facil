import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import './style.css';

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2 className="title">Mudança fácil</h2>
        
        <div className="empty-state">
          <p className="empty-message">Nenhuma mudança encontrada</p>
          <Button onClick={() => console.log("Solicitar orçamento clicado")}>
            Solicitar <br /> orçamento
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
