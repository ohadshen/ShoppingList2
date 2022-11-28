import { Product } from "../../models/product";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";
import "./ProductInformation.scss";

const ProductInformation = (): JSX.Element => {
    const { name } = useParams()

    const product: Product | undefined = products.find(p => p.name === name);

    if(!product) {
        return (<div></div>);
    }

    return (
    <div className="product-information">
        <div className="product-image">
            <img src={product.imageUrl}></img>
        </div>

        <div className="product-details">
            <div>{product.name}</div>
            <div>{product.price} ILS</div>
            <div>{product.storeName}</div>
            <div>{product.description}</div>
        </div>

        <div className="product-image">
            <img src={product.secondImageUrl}></img>
        </div>
    </div>
    );
}

export default ProductInformation;