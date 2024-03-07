import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import ProductsPage from './pages/Products';
import styles from './App.module.css';
import RegisterPage from './pages/Register';
import AddEditProductPage from './pages/AddEditProduct';

function App() {
  return (
    <main className={ styles.container }>
      <Routes>
        <Route path="/products/:id" element={ <AddEditProductPage /> } />
        <Route path="/products/add" element={ <AddEditProductPage /> } />
        <Route path="/products" element={ <ProductsPage /> } />
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/" element={ <LoginPage /> } />
      </Routes>
    </main>
  );
}

export default App;
