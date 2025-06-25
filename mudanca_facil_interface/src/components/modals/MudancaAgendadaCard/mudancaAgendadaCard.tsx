import React from 'react';
import Button from "../../Button/Button";
import '../MudancaAgendadaCard/style.css';

type MudancaAgendadaCardProps = {
  origem: string;
  destino: string;
  data: Date;
  horario: string;
  tipoResidencia: string;
  itemSelecionado: string;
};

const MudancaAgendadaCard: React.FC<MudancaAgendadaCardProps> = ({
  origem,
  destino,
  data,
  horario,
  tipoResidencia,
  itemSelecionado,
}) => {
  return (
    <div className="move-card">
      <p><strong>Mudança agendada</strong></p>
      <p><strong>Data:</strong> {data.toLocaleDateString()} às {horario}</p>
      <p><strong>Origem:</strong> {origem}</p>
      <p><strong>Destino:</strong> {destino}</p>
      <p><strong>Residência:</strong> {tipoResidencia}</p>
      <p><strong>Itens:</strong> {itemSelecionado}</p>

      <div className="card-button-wrapper">
     {/*<Button onClick={onDetailsClick}>
          Conferir detalhes
        </Button> 
        */}
      </div>
    </div>
  );
};

export default MudancaAgendadaCard;
