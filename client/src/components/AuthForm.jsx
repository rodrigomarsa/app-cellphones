import { useState } from 'react';
import PropTypes from 'prop-types';

function AuthForm({ email, setEmail, password, setPassword, onSubmit, buttonText }) {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validateinputs = () => {
    const NUMBERSIX = 6;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const validEmail = emailRegex.test(email);
    const validPassword = password.trim().length >= NUMBERSIX;
    setButtonDisabled(!(validEmail && validPassword));
  };

  const handleChange = ({ target }) => {
    validateinputs();
    if (target.name === 'password') {
      setPassword(target.value);
    } else {
      setEmail(target.value);
    }
  };

  const handleButtonClick = () => {
    onSubmit({ email, password });
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={ email }
        onChange={ handleChange }
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={ password }
        onChange={ handleChange }
        required
      />
      <button disabled={ buttonDisabled } onClick={ handleButtonClick }>
        {buttonText}
      </button>
    </div>
  );
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default AuthForm;
