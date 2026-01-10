
import styles from '../styles/mainContent.module.css'
import image from "../assets/packet.png"

const mainContent = () => {
    return (
        <div className={`${styles.homeContainer}`}>
            <div className={`${styles.circle}`}>
                {/* <img src={image}></img> */}
            </div>
        </div>
    )
}

export default mainContent