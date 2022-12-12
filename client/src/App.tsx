import './App.css';
import ProductList from './components/ProductList/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { Product } from './models/product';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { products } from './data/products';

const getAllProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch('http://localhost:8000/products');
    return await res.json();
  } catch {
    throw new Error("error GET request");
  }
}

function App() {
  const initProducts = async () => {
    setProducts(await getAllProducts());
  }

  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    initProducts();
  }, []);
  const addProductToCartCallback = (product:Product): void => setShoppingCart([...shoppingCart, product]);

  return (
    <div className='shopping-app'>
      <h1 className='title'>Shopping!</h1>

      <Router>
      <div className="cart">
          <Link to="/cart">
              <img src="/shopping-cart.png" className="cart-icon"></img>
          </Link>
          <label className="cart-counter">{shoppingCart.length}</label>
        </div>
        <Routes>
          <Route path='/' element={<ProductList products={products} onClick={addProductToCartCallback}></ProductList>}></Route>
          <Route path='/cart' element={<ShoppingCart shoppingCart={shoppingCart} onClick={addProductToCartCallback}></ShoppingCart>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
