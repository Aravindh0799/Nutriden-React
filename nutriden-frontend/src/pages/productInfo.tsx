import React from 'react'
import styles from '../styles/productInfo.module.css'
import leafIcon from '../assets/leaf.png'
const ProductInfo = () => {
    return (
        <section id='product'>
            <div className={`${styles.productInfoContainer} packetImageTimeline`}>
                <div className={styles.leftContainer}>

                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.leftContent}>
                        <div>
                            <img src={leafIcon}></img>
                            <p>Supports Weight & Appetite Control — fiber and protein help keep you fuller, longer.</p>
                        </div>
                        <div>
                            <img src={leafIcon}></img>
                            <p>Versatile Usage — perfect in breakfast bowls, baking, or post-workout shakes.</p>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <div>
                            <img src={leafIcon}></img>
                            <p>Naturally Satisfying Taste & Texture — smooth, rich nut flavor without heaviness.</p>
                        </div>
                        <div>
                            <img src={leafIcon}></img>
                            <p>Eco-Friendly & Sustainable — responsibly sourced nuts and minimal processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInfo