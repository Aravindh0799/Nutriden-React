import React from 'react'
import styles from '../styles/Login.module.css'

const login = () => {
    return (
        <div className={styles.loginContainer}>

            <form className={`${styles.loginForm} card`}>
                <h1 className={styles.title}>Login Page</h1>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
                <br />
                <button type="submit">Login</button>
                <br />
                <div className={styles.links}>
                    <a href=''>Forgot Password?</a>
                    <a href=''>Register Now</a>
                </div>
            </form>
        </div>
    )
}

export default login