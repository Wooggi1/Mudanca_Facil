import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import RecuperarSenha from "../pages/RecuperarSenha/RecuperarSenha";
import Cadastro from "../pages/Cadastro/Cadastro";

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" />
      <Route path="login" element={<Login />}/>
      <Route path="recuperar" element={<RecuperarSenha />}/>
      <Route path="cadastro" element={<Cadastro />}/>
      <Route path="*" /> // pagina not found
    </Routes>
  )
}

export default AppRoutes