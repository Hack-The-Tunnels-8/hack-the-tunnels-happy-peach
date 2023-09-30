import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      console.log(email, password);
      const message = await login("j", "e");
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <div className = "container">

        <div className = "login">
              <form>
                <label>Login</label>
            
                <div>
                  <input placeholder="email" onChange={function(event){
                    setEmail(event.target.value)
                  }}/>
                </div> 

                <div>
                    <input placeholder="password" onChange={function(disp){
                      setPassword(disp.target.value)
                    }}/>
                </div>
            
                <button onClick={() => attemptLogin()}>
                  Login
                </button>
                {message && <p>{message}</p>}
            </form>
        </div>
     
      
        </div>
        
      </div>
    </Page>
  );
}

export default Login;
