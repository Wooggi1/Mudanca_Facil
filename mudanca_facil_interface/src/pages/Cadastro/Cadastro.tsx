import React, { useState } from "react";
import "../Cadastro/style.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import ModalCadastroEmpresa from "../../components/modals/CadastroEmpresa/ModalCadastroEmpresa";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth, type SignUpClienteProps, type SignUpEmpresaProps } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [type, setType] = useState<"cliente" | "empresa">(
    "cliente"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false)
  const { signUp, signIn } = useAuth()
  const navigate = useNavigate()

  const handleTipoChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setType(e.target.value as "cliente" | "empresa");

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (type === "empresa") {
      setIsModalOpen(true);
    } else {
      handleFinalizarCadastro();
    }
  };

  async function handleFinalizarCadastro(dados?: any) {
    setIsModalOpen(false);
    setLoading(true)

    if (type === "empresa") {
      const empresaData: SignUpEmpresaProps = {
        nome,
        email,
        senha,
        type,
        ...dados
      }

      await signUp(empresaData)

    } else {
      const clienteData: SignUpClienteProps = {
        nome,
        email,
        senha,
        type,
      }

      await signUp(clienteData)
    }
    const loginData = {
      email,
      senha
    }
    setLoading(false)
    signIn(loginData)
    navigate('/')
    return;
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-div">
            <label>Nome</label>
            <Input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={handleNomeChange}
              placeholder="Nome"
              required={true}
            />
          </div>

          <div className="input-div">
            <label>Email</label>
            <Input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              required={true}
            />
          </div>

          <div className="input-div">
            <label>Senha</label>
            <Input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={handleSenhaChange}
              placeholder="Senha"
              required={true}
            />
          </div>

          <div className="input-div radio-group">
            <input
              type="radio"
              name="tipoUsuario"
              value="cliente"
              checked={type === "cliente"}
              onChange={handleTipoChange}
              required={true}
            />
            <span>Cliente</span>

            <input
              type="radio"
              name="tipoUsuario"
              value="empresa"
              checked={type === "empresa"}
              onChange={handleTipoChange}
            />
            <span>Empresa</span>
          </div>

          <Button type="submit" loading={loading}>Cadastrar</Button>
        </form>
      </div>

      <ModalCadastroEmpresa
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleFinalizarCadastro}
      />
    </>
  );
}

export default Cadastro;
