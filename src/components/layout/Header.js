import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import logo from "../../logo.png";
import mealsImage from "../../img/food.jpg";
import TextTransition, { presets } from "react-text-transition";

const ANIM_TEXT = ["time.", "money.", "health."];

const Header = (props) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <header>
        <div className={styles.header}>
          <img className={styles.logo} alt="Fresh Meal Plan Logo" src={logo} />
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
        <div className={styles["main-image"]}>
          <h1 className={styles["animated-text"]}>
            We save you serious
            <TextTransition
              text={ANIM_TEXT[index % ANIM_TEXT.length]}
              springConfig={presets.wobbly}
              style={{ margin: "0 20px" }}
              inline
            />
          </h1>
          <img src={mealsImage} alt="A table full of fresh food" />
        </div>
      </header>
    </>
  );
};

export default Header;
