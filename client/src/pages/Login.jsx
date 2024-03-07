import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AuthForm from '../components/AuthForm';
import { requestLogin, setToken } from '../services/Requests';
import styles from '../styles/Login.module.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = async () => {
    try {
      const token = await requestLogin('/login', { email, password });
      setToken(token);

      localStorage.setItem('token', JSON.stringify(token));

      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Navigate to="/products" />;

  return (
    <main className={ styles.container }>
      <h1>Login</h1>
      <AuthForm
        email={ email }
        setEmail={ setEmail }
        password={ password }
        setPassword={ setPassword }
        onSubmit={ handleLogin }
        buttonText="Entrar"
      />
      <button onClick={ () => navigate('/register') }>Cadastrar</button>
      {failedTryLogin && <span>E-mail ou senha incorretos</span>}
    </main>
  );
}

export default LoginPage;
