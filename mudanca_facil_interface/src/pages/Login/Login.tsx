import React,{ useState } from "react";
import "../Login/style.css"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // enviar dados para a API
    console.log("logando")
  }

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-div">
            <label>Email</label>
            <Input
              type="text"
              id='email'
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
              id='senha'
              name="senha"
              value={senha}
              onChange={handleSenhaChange}
              placeholder="Senha"
              required={true}
            />
          </div>

          <div className="forget-password-container">
           <Link to="/recuperar" className="forget-password-text">Esqueceu sua Senha?</Link>
          </div>

          <Button type="submit">Logar</Button>
        </form>
      </div>
    </>
  );
}

export default Login;