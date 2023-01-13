import { useContext } from "react";

// style
import "./categoryPreview.style.scss";

// CONTEXT
import { CategoriesContext } from "../../context/categoriesContext";
import { WindowSizeContext } from "../../context/windowSizeContext";

import CategoryContainer from "../categoryContainer/categoryContainer.component";

// component
const CategoryPreview = () => {
  // get the categories and window-size context
  const { categoriesMap } = useContext(CategoriesContext);
  const { windowSize } = useContext(WindowSizeContext);

  // Lets decide how many products to preview depending on the window size
  const count =
    windowSize.width > 1024
      ? 4 // yes window width size > 1024 so display 4 items
      : windowSize.width > 700
      ? 3 // yes window width size > 700 so display 3 items
      : windowSize.width > 400
      ? 4 // yes window width size > 400 so display 4 items
      : 1; // No window width size not greater than 400  so display 1 items only (mobile)

  return (
    <div className="categories-preview-container">
      {Object.keys(categoriesMap).map((k) => {
        const productsToPreview = categoriesMap[k].filter(
          (item, index) => index < count
        );
        return (
          <CategoryContainer key={k} title={k} products={productsToPreview} />
        );
      })}
    </div>
  );
};

export default CategoryPreview;
