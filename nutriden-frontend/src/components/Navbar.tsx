import styles from '../styles/navbar.module.css'

const navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>NutriDen</div>
            <ul className={styles.navLinks}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/buy">Buy Now</a></li>
            </ul>
            <div>
                <button className={styles.loginButton}>Login</button>
            </div>
        </nav>
    )
}

export default navbar