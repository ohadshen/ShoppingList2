import { Product } from "../../models/product";
import ProductList from "../ProductList/ProductList";
import "./ShoppingCart.scss";

interface ShoppingCartProps {
    onClick: (product:Product) => void
    shoppingCart: Product[]
}

const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce(
        (sum, product) => sum + product.price,
        0);
}

const buy = (shoppingCart: Product[]): void => {
    fetch('http://localhost:8000/shoppinglist', {
        method: 'POST',
        headers:{'content-type': 'application/json;charset=UTF-8'},
        body: JSON.stringify({products: shoppingCart.map(product => ({product: {_id: product._id}}))})
    }).then(res => {
        alert("buy shopping cart successfuly");
    }).catch(err => {
        alert("error buying shopping cart");
    });
}

const ShoppingCart = ({shoppingCart, onClick}: ShoppingCartProps): JSX.Element => {
    return (
        <div className="shopping-cart">
            <label className="total-ils">Total ILS: {calculateTotalPrice(shoppingCart)}</label>
            <ProductList products={shoppingCart} onClick={onClick}></ProductList>
            <button onClick={() => buy(shoppingCart)} className="buy-button">Buy!</button>
        </div>
    )
}

export default ShoppingCart;