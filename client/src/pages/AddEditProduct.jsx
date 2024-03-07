import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createProduct, requestProducts, updateProduct } from '../services/Requests';
import styles from '../styles/AddEdit.module.css';

function AddEditProductPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    model: '',
    price: '',
    color: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProduct = async (id) => {
    setLoading(true);
    try {
      const data = await requestProducts(`/products/${id}`);
      setProduct(data);
      setLoading(false);
    } catch (e) {
      setError('Erro ao buscar produto. Por favor, tente novamente mais tarde.');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (productId) {
        await updateProduct(`/products/${productId}`, product);
      } else {
        await createProduct('/products', product);
      }
      navigate('/products');
    } catch (e) {
      setError('Erro ao salvar produto. Por favor, tente novamente.');
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <main className={ styles.container }>
      <h2>{productId ? 'Editar Produto' : 'Adicionar Produto'}</h2>
      {error && <p>{error}</p>}
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={ product.name }
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor="brand">Marca:</label>
          <input
            id="brand"
            type="text"
            name="brand"
            value={ product.brand }
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor="model">Modelo:</label>
          <input
            id="model"
            type="text"
            name="model"
            value={ product.model }
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor="price">Preço:</label>
          <input
            id="price"
            type="number"
            name="price"
            value={ product.price }
            onChange={ handleChange }
          />
        </div>
        <div>
          <label htmlFor="color">Cor:</label>
          <input
            id="color"
            type="text"
            name="color"
            value={ product.color }
            onChange={ handleChange }
          />
        </div>
        <button type="submit">{productId ? 'Salvar' : 'Adicionar'}</button>
      </form>
    </main>
  );
}

export default AddEditProductPage;
