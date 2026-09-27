import {useState} from 'react';
import { firebaseSignIn } from '../../firebase';
import { useNavigate } from 'react-router';

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signIn = (event) => {

    event.preventDefault();

    firebaseSignIn(email, password)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        setMessage(error.code);
      })

  }

  return (
    <div>
      <form onSubmit={signIn} className="Login">
        <h1>Login</h1>
        <label>Email:
          <input type='email' required value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>Senha:
          <input required value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Acessar</button>
        <label>{message}</label>
      </form>
      <button onClick={() => {navigate("/register")}}>Ainda não tem cadastro?</button>
    </div>
  );
}

export default Login;