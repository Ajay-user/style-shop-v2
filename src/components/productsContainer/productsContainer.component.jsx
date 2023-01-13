// style
import "./productsContainer.styles.scss";

import ProductCard from "../productCard/product.component";

const ProductsContainer = ({ products }) => (
  <div className="products-container">
    {products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);

export default ProductsContainer;
