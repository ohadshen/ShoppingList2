import { Link } from "react-router-dom";
import { Product } from "../../models/product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
import { products } from "../../data/products";

const ProductList = (): JSX.Element => {
    return (
        <div className="product-list">
            {products.map(product => 
            <div className="product-card-item">
                <Link to={`/${product.name}`} style={{color: '#0D0D0D', textDecoration: 'none'}}>
                    <ProductCard product={product}></ProductCard>
                </Link>
            </div>)}
        </div>
    );
} 

export default ProductList;