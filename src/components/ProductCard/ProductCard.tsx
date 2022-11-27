import { Product } from "../../models/product";

const ProductCard = ({product}: {product: Product}): JSX.Element => {
    return (
    <div>
        <div className="product-image">
            <img src={product.imageUrl}></img>
        </div>

        <div className="product-details">
            <div>name: {product.name}</div>
            <div>price: {product.price}</div>
        </div>
    </div>
    );
}

export default ProductCard;