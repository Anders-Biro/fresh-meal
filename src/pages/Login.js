import React from "react";
import LoginForm from "../components/LoginForm";
import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <div className={styles.loginpage}>
        <div className={styles.container}>
          <div className={styles.info}>
            <h1>Deliciously healthy prepared meals</h1>
            <h2>Delivered Right to Your Door</h2>
          </div>
          <div className={styles.form}>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
