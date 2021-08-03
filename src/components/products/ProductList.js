import React from "react";
import ProductData from "../../data/product-data";
import ProductItem from "./productitem/ProductItem";

import styles from "./ProductList.module.css";

export default function ProductList() {
  return (
    <div className={styles.meals}>
        {ProductData.products.map((product) => (
          <ProductItem key={product.id} id={product.id} {...product} />
        ))}
    </div>
  );
}