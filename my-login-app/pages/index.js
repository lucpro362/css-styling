// pages/index.js
import styles from '../styles/Login.module.css';

export default function Home() {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h2>Login</h2>
        <div className={styles.inputField}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
        </div>
        <div className={styles.inputField}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
}