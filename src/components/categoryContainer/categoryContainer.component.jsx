import { useNavigate } from "react-router-dom";
// style
import "./categoryContainer.style.scss";

import ProductsContainer from "../productsContainer/productsContainer.component";

const CategoryContainer = ({ title, products }) => {
  const navigateToCollection = useNavigate();
  const goToCollection = () => navigateToCollection(`/shop/${title}`);

  return (
    <div className="category-container">
      <h1 className="category-title">
        <span className="category-title--span" onClick={goToCollection}>
          {title}
        </span>
      </h1>
      <ProductsContainer products={products} />
    </div>
  );
};
export default CategoryContainer;
