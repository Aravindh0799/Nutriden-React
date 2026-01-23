import styles from "../styles/home.module.css"
import MainContent from "./mainContent.tsx"
import ProductInfo from "./productInfo.tsx"
import image from "../assets/packet.png"
import About from "./about.tsx"
import ReviewSection from "./reviewSection.tsx"

const Home = () => {
    return (
        <>
            <div>
                <MainContent />
                <ProductInfo />
            </div>
            <ReviewSection />
            <About />
        </>
    )
}

export default Home