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
                        <div className='glassCard'>
                            <img src={leafIcon}></img>
                            <p className='gradientText'>Supports Weight & Appetite Control — fiber and protein help keep you fuller, longer.</p>
                        </div>
                        <div className='glassCard'>
                            <img src={leafIcon}></img>
                            <p className='gradientText'>Versatile Usage — perfect in breakfast bowls, baking, or post-workout shakes.</p>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <div className='glassCard'>
                            <img src={leafIcon}></img>
                            <p className='gradientText'>Naturally Satisfying Taste & Texture — smooth, rich nut flavor without heaviness.</p>
                        </div>
                        <div className='glassCard'>
                            <img src={leafIcon}></img>
                            <p className='gradientText'>Eco-Friendly & Sustainable — responsibly sourced nuts and minimal processing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductInfo