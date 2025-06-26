export type CadastroEmpresaData = {
  raAtuacao: string;
  casaApt: string;
  mediaPrecoMudancaPequena: number;
  mediaPrecoMudancaMedia: number;
  mediaPrecoMudancaGrande: number;
  porte: string;
  horarioInicioDisponibilidade: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  horarioFimDisponibilidade: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
};

export interface SolicitarMudancaData {
  id: string,
  origem: string,
  destino: string,
  data: Date | null,
  horario: string,
  tipoResidencia: string,
  itemSelecionado: string
}

export interface ModalCadastroEmpresa {
  isOpen: boolean,
  onClose: () => void,
  onConfirm: (dados?: CadastroEmpresaData) => void
}

export interface ModalSolicitarMudanca {
  isOpen: boolean,
  onClose: () => void,
  onConfirm: (dados: SolicitarMudancaData) => void
}