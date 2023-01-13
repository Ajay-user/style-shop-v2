import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

// style
import "./shop.styles.scss";

import CategoryPreview from "../../components/category-preview/categoryPreview.component";
import CategoryCollection from "../../components/category-collection/categoryCollection.component";

const Shop = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<CategoryPreview />} />
        <Route path=":category" element={<CategoryCollection />} />
      </Routes>
    </Fragment>
  );
};

export default Shop;
