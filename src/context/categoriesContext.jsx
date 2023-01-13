import { createContext, useEffect, useState } from "react";

// import { SHOP_DATA } from "../assets/shop-data";

import {
  // batchUpload,
  getShopDataFromFirebase,
} from "../utils/firebase/firebase.util";

// CONTEXT
export const CategoriesContext = createContext({ categoriesMap: {} });

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // FETCH data from firestore
  useEffect(() => {
    // using async fn inside useEffect
    const getShopData = async () => {
      // initialize an async fn
      const data = await getShopDataFromFirebase(); // await the data
      setCategoriesMap(data);
    };

    // call the async fn from within the useEffect
    getShopData();
  }, []);

  // BATCH JOB -- upload products to firebase
  // useEffect(() => {
  //   batchUpload("collections", SHOP_DATA);
  // }, []);
  return (
    <CategoriesContext.Provider value={{ categoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};
