import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteProduct, requestProducts, setToken } from '../services/Requests';
import styles from '../styles/Products.module.css';

function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await requestProducts('/products');
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('token')) || false;
    if (token) {
      setLogged(true);
      setToken(token);
    }

    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = products
      .filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
      || product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      || product.model.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleEditProduct = async (productId) => {
    navigate(`/products/${productId}`);
  };

  const handleDeleteProduct = async (productId) => {
    try {
      await deleteProduct(`/products/${productId}`);
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  return (
    <main className={ styles.container }>
      <h2>Lista de Produtos</h2>
      <div>
        <input
          type="text"
          placeholder="Buscar por nome/marca/modelo"
          value={ searchTerm }
          onChange={ handleSearchChange }
        />
        <Link to="/products/add">
          <button>Cadastrar Produto</button>
        </Link>
      </div>
      {!logged && <p>Você precisa estar logado para ver os produtos.</p>}
      {loading && <p>Carregando produtos...</p>}
      <ul>
        {filteredProducts.map((product) => (
          <li key={ product.id }>
            <h3>{product.name}</h3>
            <p>
              Brand:
              {product.brand}
            </p>
            <p>
              Model:
              {product.model}
            </p>
            <p>
              Price: $
              {product.price}
            </p>
            <p>
              Color:
              {product.color}
            </p>
            <button onClick={ () => handleEditProduct(product.id) }>Editar</button>
            <button onClick={ () => handleDeleteProduct(product.id) }>Excluir</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ProductsPage;
