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
    // TODO: POST REQ
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