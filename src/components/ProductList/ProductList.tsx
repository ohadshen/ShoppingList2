import { Product } from "../../models/product";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }: {products: Product[]}): JSX.Element => {
    return (
        <>
        {products.map(product => <ProductCard product={product}></ProductCard>)}
        </>
    );
} 

export default ProductList;