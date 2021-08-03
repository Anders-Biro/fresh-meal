import styles from "./CartItem.module.css";

const CartItem = (props) => {
  let variants = false;
  let variantTitle = "";
  if (props.product.variants.length > 1) {
    variants = true;
    if (props.product.id === props.id) {
      variantTitle = props.product.variants[0].title;
    } else {
      var variant = props.product.variants.find((i) => i.id === props.id);
      variantTitle = variant.title;
    }
  }

  return (
    <li className={styles["cart-item"]}>
      <img
        className={styles.img}
        src={props.product.image.src}
        alt={props.product.image.alt}
      />
      <div className={styles.info}>
        <div>
          <div className={styles.title}>
            <h2>{props.name}</h2>
            {variants && <h4>({variantTitle})</h4>}
          </div>
          <div className={styles.summary}>
            <span className={styles.price}>${props.price}</span>
            <span className={styles.amount}>x {props.amount}</span>
          </div>
        </div>
        <div className={styles.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
