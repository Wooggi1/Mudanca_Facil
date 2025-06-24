import React from 'react';
import Button from "../../Button/Button";
import './ScheduledMoveCard.css';

type ScheduledMoveCardProps = {
  date: string;
  company: string;
  itemCount: number;
  price: number;
  onDetailsClick: () => void;
};

const ScheduledMoveCard: React.FC<ScheduledMoveCardProps> = ({
  date,
  company,
  itemCount,
  price,
  onDetailsClick,
}) => {
  return (
    <div className="move-card">
      <p><strong>Mudança agendada para {date}</strong></p>
      <p>Empresa responsável: {company}</p>
      <p>{itemCount} itens</p>
      <p><strong>Valor: R$ {price.toFixed(2)}</strong></p>

      <div className="card-button-wrapper">
        <Button onClick={onDetailsClick}>
          Conferir detalhes
        </Button>
      </div>
    </div>
  );
};

export default ScheduledMoveCard;
