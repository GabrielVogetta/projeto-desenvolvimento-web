import {useState} from 'react';
import { firebaseRegister } from '../../firebase';
import { useNavigate } from 'react-router';


function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");
  const [message, setMessage] = useState("");

  const register = (event) => {

    event.preventDefault();
    
    firebaseRegister({
      email: email,
      password: password,
      name: name,
      lastName: lastName,
      birth: birth
    })
    .then(() => {
      navigate("/");
    })
    .catch(error => {
      setMessage(error.code);
    })

  }

  return (
    <div>
      <form onSubmit={register} className="Register">
        <h1>Cadastro</h1>
        <label>Email:
          <input type='email' required value={email} onChange={e => setEmail(e.target.value)}/>
        </label>
        <label>Senha:
          <input required value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <label>Nome:
          <input required value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>Sobrenome:
          <input required value={lastName} onChange={e => setLastName(e.target.value)}/>
        </label>
        <label>Data de Nascimento:
          <input type='date' required value={birth} onChange={e => setBirth(e.target.value)}/>
        </label>
        <button type="submit">Cadastrar</button>
        <label>{message}</label>
      </form>
      <button onClick={() => {navigate("/login")}}>Já tem cadastro?</button>
    </div>
  );
}

export default Register;