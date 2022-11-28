import { Product } from "../../models/product";
import "./ProductCard.scss"

const ProductCard = ({product}: {product: Product}): JSX.Element => {
    return (
    <div className="product-card">
        <div className="product-image">
            <img src={product.imageUrl}></img>
        </div>

        <div className="product-details">
            <div>{product.name}</div>
            <div>{product.price} ILS</div>
        </div>
    </div>
    );
}

export default ProductCard;