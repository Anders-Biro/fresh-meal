import { useContext, useState } from "react";
import CartContext from "../../../store/cart-context";
import Card from "../../UI/Card";
import styles from "./ProductItem.module.css";
import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) => {
  const [price, setPrice] = useState(props.variants[0].price);
  const [id, setId] = useState(props.id);
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      price: price,
      amount: amount,
      product: props,
    });
  };

  let variants = false;
  if (props.variants.length > 1) {
    variants = true;
  }

  let variantsList = props.variants.map((item, i) => {
    return (
      <option key={i} value={item.id}>
        {item.title}
      </option>
    );
  });

  const dropdownChange = (e) => {
    setPrice(props.variants[e.target.selectedIndex].price);
    setId(props.variants[e.target.selectedIndex].id);
  };

  return (
    <Card>
      <div className={styles.meal}>
        <img
          className={styles.image}
          src={props.image.src}
          alt={props.image.alt}
        />
        <div className={styles.content}>
          <h3>{props.title}</h3>
          {variants ? (
            <select onChange={dropdownChange} className={styles.dropdown}>
              {variantsList}
            </select>
          ) : (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: props.body_html }}
            />
          )}
          <div className={styles.amount}>
            <div className={styles.price}>${price}</div>
            <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductItem;
