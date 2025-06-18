import React,{ useState } from "react";
import "../Cadastro/style.css"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState<'cliente' | 'empresa'>('cliente');
  const handleTipoChange = (e: React.ChangeEvent<HTMLInputElement>) => setTipoUsuario(e.target.value as 'cliente' | 'empresa');

  const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNome(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // enviar dados para a API
    console.log("Cadastrando:", { nome, email, senha, tipoUsuario })
  }

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-div">
            <label>Nome</label>
            <Input
              type="text"
              id='nome'
              name="nome"
              value={nome}
              onChange={handleNomeChange}
              placeholder="Nome"
            />
          </div>

          <div className="input-div">
            <label>Email</label>
            <Input
              type="text"
              id='email'
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </div>

          <div className="input-div">
            <label>Senha</label>
            <Input
              type="password"
              id='senha'
              name="senha"
              value={senha}
              onChange={handleSenhaChange}
              placeholder="Senha"
            />
          </div>

          <div className="input-div radio-group">
            <label>
              <input
                type="radio"
                name="tipoUsuario"
                value="cliente"
                checked={tipoUsuario === 'cliente'}
                onChange={handleTipoChange}
              />
              Cliente
            </label>
            <label>
              <input
                type="radio"
                name="tipoUsuario"
                value="empresa"
                checked={tipoUsuario === 'empresa'}
                onChange={handleTipoChange}
              />
              Empresa
            </label>
          </div>

          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </>
  );
}

export default Cadastro;