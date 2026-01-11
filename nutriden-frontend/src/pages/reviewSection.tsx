import React from 'react'
import styles from "../styles/review.module.css"

const reviewSection = () => {
    return (
        <section id='reviews'>
            <div className={`${styles.reviewContainer}`}>
                <h1 className={styles.reviewTitle}>What Our Customers Are Saying</h1>
                <div className={`${styles.scrollWrapper} reviewTimeline`}>
                    <div className={`${styles.scrollContainer} reviewScrollContainer`}>
                        <div className='card'></div>
                        <div className='card'></div>
                        <div className='card'></div>
                        <div className='card'></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default reviewSection