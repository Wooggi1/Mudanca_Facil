import React,{ useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input 
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}  
          />
        </div>

        <div>
          <label>Senha</label>
          <input 
            type="password"
            id="email"
            name="email"
            value={senha}
            onChange={handleSenhaChange}  
          />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </>
  )
}

export default Login;