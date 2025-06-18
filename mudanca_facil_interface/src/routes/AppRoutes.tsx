import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";

function AppRoutes() {
  return(
    <Routes>
      <Route path="/" />
      <Route path="login" element={<Login />}/>
      <Route path="*" /> // pagina not found
    </Routes>
  )
}

export default AppRoutes