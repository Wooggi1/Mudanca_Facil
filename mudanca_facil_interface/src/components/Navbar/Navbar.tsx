import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import '../Navbar/style.css';
import Button from "../Button/Button";

const Navbar = () => {
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h1>MudancaFacil</h1>
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>

        {!isAuthenticated && (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
          </>
        )}

        {isAuthenticated && (
          <>
            <li><Button onClick={handleLogout}>Logout</Button></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
