import styles from '../styles/about.module.css'

const about = () => {
    return (
        <section id='about'>
            <div className={styles.aboutContainer}>
                <h1>About NutriDen</h1>
                <p>
                    At NutriDen, we are passionate about providing high-quality, nutritious, and delicious plant-based products that cater to the needs of health-conscious individuals. Our mission is to promote a healthier lifestyle through wholesome ingredients and sustainable practices.
                </p>
                <p>
                    Founded in 2020, NutriDen has quickly become a trusted name in the plant-based food industry. We believe that everyone deserves access to nutritious options that not only taste great but also contribute positively to overall well-being.
                </p>
                <p>
                    Our team is dedicated to sourcing the finest ingredients from around the world, ensuring that each product meets our stringent quality standards. We prioritize sustainability and ethical sourcing to minimize our environmental impact while supporting local communities.
                </p>
                <p>
                    At NutriDen, we are committed to innovation and continuous improvement. We regularly update our product line based on customer feedback and emerging nutritional research to ensure we are meeting the evolving needs of our customers.
                </p>
                <p>
                    Thank you for choosing NutriDen as your partner in health. We look forward to being part of your journey towards a healthier and more vibrant life.
                </p>
            </div>
        </section>
    )
}

export default about