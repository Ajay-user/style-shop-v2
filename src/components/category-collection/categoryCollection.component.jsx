import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// style
import "./categoryCollection.style.scss";

import { CategoriesContext } from "../../context/categoriesContext";
import CategoryContainer from "../categoryContainer/categoryContainer.component";

// spinning animation -- while page loading
import SpinningAnimation from "../spinning-animation/spinningAnimation.component";

const CategoryCollection = () => {
  const [collection, setCollection] = useState([]);

  // get the url-parameter using react-router-dom
  // --> useParams Returns an object of key/value pairs of the dynamic params from the current URL
  //     that were matched by the route path.
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  useEffect(() => {
    setCollection(categoriesMap[category]);
  }, [category, categoriesMap]);

  //  The categoriesMap is an object --> its fetched from firebase
  //  it wont be readily available
  //   --> categoriesMap[category] this will output "undefined" in the very begining

  return (
    <div className="category-collection-container">
      {collection ? (
        <CategoryContainer title={category} products={collection} />
      ) : (
        <SpinningAnimation />
      )}
    </div>
  );
};

export default CategoryCollection;
