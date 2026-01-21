
import styles from '../styles/mainContent.module.css'
import image from "../assets/packet.png"
import packetImage from "../assets/nutr-packet.png"

const mainContent = () => {
    return (
        <section id='main'>
            <div className={`${styles.homeContainer} `}>
                <div className={styles.leftContent}>
                    <h1>NutriDen</h1>
                    <p>Fuel Your Day, the Natural Way.</p>
                </div>
                <div className="packetImage">
                    <img src={image} alt="packet img" />
                </div>
                <div className={styles.rightContent}>
                    <p className='gradientText'>Complete Daily Nutrition</p>
                    <p className='gradientText'>High-Protein Formula</p>
                    <p className='gradientText'>Balanced Macro Blend</p>
                    <p className='gradientText'>Plant-Based & Clean Ingredients</p>
                    <p className='gradientText'>Rapid Preparation</p>
                </div>
            </div>
        </section>
    )
}

export default mainContent