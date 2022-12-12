import './App.css';
import ProductList from './components/ProductList/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import { Product } from './models/product';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import { products } from './data/products';

const getAllProducts = (): Product[] => {
  // TODO: GET REQ
  return products;
}

function App() {
  const [shoppingCart, setShoppingCart] = useState<Product[]>([]);
  const products: Product[] = getAllProducts();
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
