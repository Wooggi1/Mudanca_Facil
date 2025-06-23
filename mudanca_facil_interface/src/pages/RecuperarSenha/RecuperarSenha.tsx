import React,{ useState } from "react";
import "../RecuperarSenha/style.css"
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Navbar from "../../components/Navbar/Navbar";

function RecuperarSenha() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // enviar request de recuperacao de senha
    console.log("recuperando")
  }

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-div">
            <label>Recuperar senha</label>
            <Input
              type="text"
              id='email'
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </div>

          <Button type="submit">Enviar Email</Button>
        </form>
      </div>
    </>
  );
}

export default RecuperarSenha;