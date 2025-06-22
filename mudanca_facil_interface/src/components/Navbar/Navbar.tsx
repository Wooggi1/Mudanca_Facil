import { Link } from "react-router-dom";
import '../Navbar/style.css'
// TODO: trocar texto pela Logo

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MudancaFacil</h1> 
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
