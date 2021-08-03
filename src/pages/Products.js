import React, { useState } from "react";
import Cart from "../components/cart/Cart";
import Header from "../components/layout/Header";
import ProductList from "../components/products/ProductList";
import CartProvider from "../store/CartProvider";
import styles from "./Products.module.css";

function Products() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    document.body.style.overflow = "hidden";
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    document.body.style.overflow = "unset";
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
        <div className={styles.products}>
          <ProductList />
        </div>
    </CartProvider>
  );
}

export default Products;
