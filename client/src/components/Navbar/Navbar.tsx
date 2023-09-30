import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";


function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <nav>
          <div className = "navbar__header">
              <Link  to="/"><img width="100px" src="/logo.png" className="navbar__logo"></img></Link>
              {loggedIn() === false ? (
                <>
                  <button onClick={() => navigate("/sign-up")}>Sign Up</button>
                  <button onClick={() => navigate("/login")}>Login</button>
                </>
              ) : (
                <button onClick={() => logout()}>Logout</button>
              )}
          </div>
      </nav>
    </div>
      
  );
}

export default Navbar;
