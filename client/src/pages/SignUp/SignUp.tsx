import { Page } from "../../components";
import {useState} from 'react';
import "./SignUp.style.scss";

function SignUp() {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Page>
      <div className="container">
        <h1>Sign up</h1>
        <div className="input">
           <input type = "text"></input>
        </div>

        <div className="input">
          <input type = "text"></input>
        </div>
       
      </div>
    </Page>
  );
}

export default SignUp;
