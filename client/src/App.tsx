import './App.css';
import ProductList from './components/ProductList/ProductList';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductInformation from './components/ProductInformation/ProductInformation';
import { createContext, useContext } from 'react';


function App() {
  return (
    <div className='shopping-app'>
      <h1 className='title'>Shopping!</h1>

      <Router>
        <Routes>
          <Route path='/' element={<ProductList />}></Route>
          <Route path='/:name' element={<ProductInformation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
