import { useContext } from "react";

import { ProductsContext } from "../../context/productsContext";

import "./shop.styles.scss";
import ProductCard from "../../components/productCard/product.component";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Shop;
