
import styles from '../styles/mainContent.module.css'
import image from "../assets/packet.png"

const mainContent = () => {
    return (
        <div className={`${styles.homeContainer} `}>
            <div className={styles.leftContent}>
                <h1>NutriDen</h1>
                <p>Your Personalized Nutrition Companion</p>
            </div>
            <div className="packetImage">
                <img src={image} alt="packet img" />
            </div>
            <div className={styles.rightContent}>
                <h1>NutriDen</h1>
                <p>Your Personalized Nutrition Companion</p>
            </div>
        </div>
    )
}

export default mainContent