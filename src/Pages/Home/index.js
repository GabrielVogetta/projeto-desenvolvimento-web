import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { firebaseGetUser } from '../../firebase';

function Home() {

  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birth, setBirth] = useState("");

  useEffect(() => {
    if(!uid){
      navigate("/login");
    }else{
      
      (async () => {   
        const user = await firebaseGetUser(uid);
        setEmail(user.email);
        setName(user.name);
        setLastName(user.lastName);
        setBirth(user.birth);
      })();
      
    }
  }, [navigate, uid]);

  function exit(){
    localStorage.removeItem("uid");
    navigate("/login");
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={exit}>Sair</button>
      <h2>Seus dados</h2>
      <p>Email: {email}</p>
      <p>Primeiro nome: {name}</p>
      <p>Segundo nome: {lastName}</p>
      <p>Data de Nascimento: {birth}</p>
    </div>
  );
}

export default Home;