import {useState} from 'react';
import { firebaseRegister } from '../../firebase';
import { useNavigate } from 'react-router';


function Register() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("vogetta2002@gmail.com");
  const [password, setPassword] = useState("123456");
  const [name, setName] = useState("Gabriel");
  const [lastName, setLastName] = useState("Vogetta");
  const [birth, setBirth] = useState("2002-12-20");
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
  );
}

export default Register;