import { Routes, Route } from "react-router-dom";

function AppRoutes() {
  <Routes>
    <Route path="/" />
    <Route path="login" />
    <Route path="*" /> // pagina not found
  </Routes>
}

export default AppRoutes