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
    <div className='container'>
      <form onSubmit={signIn}>
        <h1>Login</h1>
        <label>Email
          <input type='email' required value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>Senha
          <input required value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <button type="submit">Acessar</button>
        <label className='error-message'>{message}</label>
      </form>
      <label>Novo aqui?</label>
      <button onClick={() => {navigate("/register")}}>Faça seu cadastro</button>
    </div>
  );
}

export default Login;