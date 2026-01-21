import React from 'react'
import styles from "../styles/review.module.css"
import image from "../assets/react.svg"

const reviewSection = () => {
    return (
        <section id='reviews'>
            <div className={`${styles.reviewContainer}`}>
                <h1 className={styles.reviewTitle}>What Our Customers Are Saying</h1>
                <div className={`${styles.scrollWrapper} reviewTimeline`}>
                    <div className={`${styles.scrollContainer} reviewScrollContainer`}>
                        <div className={`${styles.cardContainer} glassCard`}>
                            <div className={styles.cardContent}>
                                <div className={styles.avatarBorder}>
                                    <img src={image}></img>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestiae natus architecto quas eaque dolorem obcaecati. Hic modi eligendi odio culpa cumque, voluptatum, autem excepturi nobis doloribus tenetur architecto in.</p>
                                <p>-Aravindh</p>
                            </div>
                        </div>
                        <div className={`${styles.cardContainer} glassCard`}>
                            <div className={styles.cardContent}>
                                <div className={styles.avatarBorder}>
                                    <img src={image}></img>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestiae natus architecto quas eaque dolorem obcaecati. Hic modi eligendi odio culpa cumque, voluptatum, autem excepturi nobis doloribus tenetur architecto in.</p>
                                <p>-Aravindh</p>
                            </div>
                        </div>
                        <div className={`${styles.cardContainer} glassCard`}>
                            <div className={styles.cardContent}>
                                <div className={styles.avatarBorder}>
                                    <img src={image}></img>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestiae natus architecto quas eaque dolorem obcaecati. Hic modi eligendi odio culpa cumque, voluptatum, autem excepturi nobis doloribus tenetur architecto in.</p>
                                <p>-Aravindh</p>
                            </div>
                        </div>
                        <div className={`${styles.cardContainer} glassCard`}>
                            <div className={styles.cardContent}>
                                <div className={styles.avatarBorder}>
                                    <img src={image}></img>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestiae natus architecto quas eaque dolorem obcaecati. Hic modi eligendi odio culpa cumque, voluptatum, autem excepturi nobis doloribus tenetur architecto in.</p>
                                <p>-Aravindh</p>
                            </div>
                        </div>
                        <div className={`${styles.cardContainer} glassCard`}>
                            <div className={styles.cardContent}>
                                <div className={styles.avatarBorder}>
                                    <img src={image}></img>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestiae natus architecto quas eaque dolorem obcaecati. Hic modi eligendi odio culpa cumque, voluptatum, autem excepturi nobis doloribus tenetur architecto in.</p>
                                <p>-Aravindh</p>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default reviewSection