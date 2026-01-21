'use client'

import { useAuth } from '../context/authProvider';
import styles from '../styles/navbar.module.css'
import { useNavigate } from "react-router-dom";
import hamIcon from "../assets/more.png"
import closeIcon from "../assets/close.png"
import { useState } from 'react';

const navbar = () => {
    const navigate = useNavigate();
    const { auth } = useAuth()
    const [navMenu, setNavMenu] = useState(false)

    const toggleNavMenu = () => {
        setNavMenu(prev => !prev)
    }


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>NutriDen</div>
            <ul className={styles.navLinks}>
                <li><a href="/">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/checkout">Order Now</a></li>
            </ul>
            <div className={styles.navButton}>
                {(auth.user != null)
                    ? (<a onClick={() => navigate("/")}>{auth.user}</a>)
                    : (<button className={styles.loginButton} onClick={() => navigate("/login")}>Login</button>)}
            </div>
            <div className={styles.navMenu}>
                {navMenu ? (<img src={closeIcon} alt="" onClick={toggleNavMenu} />)
                    : (<img src={hamIcon} alt="" onClick={toggleNavMenu} />)}
            </div>
            {navMenu ? (
                <div className={`${styles.navMenuContainer} glassCard`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/checkout">Order Now</a></li>
                        <li>
                            {(auth.user != null)
                                ? (<a onClick={() => navigate("/")}>{auth.user}</a>)
                                : (<a onClick={() => {
                                    setNavMenu(false)
                                    navigate("/login")
                                }}>Login</a>)}
                        </li>
                    </ul>
                </div>
            ) : (
                <div className={styles.placeHolder}></div>
            )}

        </nav>
    )
}

export default navbar