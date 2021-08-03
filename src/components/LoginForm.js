import { useState } from "react";
import { Redirect } from "react-router-dom";
import logo from "../logo.png";
import styles from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [redirect, setRedirect] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setRedirect(true);
  };

  return (
    <div className={styles.loginform}>
      <form onSubmit={handleSubmit}>
        <div className={styles.row}>
          <img className={styles.logo} alt="Fresh Meal Plan Logo" src={logo} />
        </div>
        <div>
          <div className={styles.row}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className={styles.row}>
            <label>Zipcode</label>
            <input type="text" placeholder="Enter your zipcode" required minLength='5' maxLength='5'/>
          </div>
          <div id="button" className={styles.row}>
            <button>Get Started Today</button>
          </div>
        </div>
      </form>
      {redirect && <Redirect to="/products" />}
    </div>
  );
};

export default LoginForm;
