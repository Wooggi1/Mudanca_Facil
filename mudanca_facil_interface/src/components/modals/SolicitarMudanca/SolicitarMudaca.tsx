import Modal from "../ModalPadrao/TemplateModal";

function SolicitarMudancaModal() {
  return (
    <Modal isOpen={true} onClose={() => console.log("fechando")}>
      <h1>Solicitar Mudanca</h1>
    </Modal>
  )
}

export default SolicitarMudancaModal;