import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Product } from './models/product';
import ProductList from './components/ProductList/ProductList';


function App() {
  const products: Product[] = [{
    name: "necklace",
    imageUrl: "/necklace.jpeg",
    price: 1000
  }, {
    name: "bracelet",
    imageUrl: "/bracelet.jpeg",
    price: 300
  }]
  return (
    <div>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
