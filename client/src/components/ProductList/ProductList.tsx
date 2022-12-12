import { Product } from "../../models/product";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";

interface ProductListProps {
    onClick: (product:Product) => void
    products: Product[]
}

const ProductList = ({ onClick, products } : ProductListProps): JSX.Element => {
    return (
        <div className="product-list-component">
            <div className="product-list">
                {products.map(product => 
                <div className="product-card-item" onClick={() => onClick(product)}>
                    <ProductCard product={product} ></ProductCard>
                </div>)}
            </div>
        </div>
    );
} 

export default ProductList;