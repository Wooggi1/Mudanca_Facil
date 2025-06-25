export interface CadastroEmpresaData {
  porte: string;
  RA: string;
  casaApt: string;
  pequenoPreco: number;
  medioPreco: number;
  grandePreco: number;
  inicio: string;
  fim: string;
}

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