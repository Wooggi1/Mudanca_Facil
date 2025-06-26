import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import RecuperarSenha from "../pages/RecuperarSenha/RecuperarSenha";
import Cadastro from "../pages/Cadastro/Cadastro";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return(
    <Routes>
      
      <Route path="/" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
        }/>
      <Route path="login" element={<Login />}/>
      <Route path="recuperar" element={<RecuperarSenha />}/>
      <Route path="cadastro" element={<Cadastro />}/>
      <Route path="*" /> // pagina not found
    </Routes>
  )
}

export default AppRoutes