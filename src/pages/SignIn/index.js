import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../assets/logo.png';

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert('Clicou!')
  }

  return (

    <div className="container-center">

      <div className="login">

        <div className="logo-area">

          <img src={logo} alt="Logo do Sistema" />

        </div>

        <form onSubmit={handleSubmit}>

          <h1>Entrar</h1>

          <input type="text" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="***********" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Acessar</button>

        </form>

        <Link to="/register">Criar uma conta</Link>

      </div>

    </div>
  );
}

export default SignIn;