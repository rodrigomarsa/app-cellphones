import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { requestRegister } from '../services/Requests';
import styles from '../styles/Login.module.css';

function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await requestRegister('/register', { email, password });
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={ styles.container }>
      <h1>Registro</h1>
      <AuthForm
        email={ email }
        setEmail={ setEmail }
        password={ password }
        setPassword={ setPassword }
        onSubmit={ handleRegister }
        buttonText="Cadastrar"
      />
    </main>
  );
}

export default RegisterPage;
