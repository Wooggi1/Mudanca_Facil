import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import '../SucessoOrcamentoCliente/style.css';

function SucessoOrcamento() {
  const handleAprovar = () => {
    alert("Orçamento aprovado!");
  };

  const handleVerOutros = () => {
    alert("Redirecionando para outros orçamentos...");
  };

  return (
    <>
      <Navbar />
      <div className="sucesso-container">
        <p className="mensagem">Parabéns...<br />Encontramos essa empresa para você!</p>

        <div className="card-orcamento">
          <p><strong>Empresa:</strong> Lorem ipsum dolor</p>
          <p><strong>Avaliação da empresa:</strong> 4 estrelas</p>
          <p><strong>Valor estimado:</strong> R$ 560,00</p>

          <div className="btn-aprovar">
            <Button onClick={handleAprovar}>Aprovar orçamento</Button>
          </div>
        </div>

        <div className="btn-externo">
          <Button onClick={handleVerOutros}>Conferir outros orçamentos</Button>
        </div>
      </div>
    </>
  );
}

export default SucessoOrcamento;
