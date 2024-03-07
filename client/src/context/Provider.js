import { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const [user, setUser] = useState('');

  const value = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user, setUser]);

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {}.isRequired;

export default Provider;
