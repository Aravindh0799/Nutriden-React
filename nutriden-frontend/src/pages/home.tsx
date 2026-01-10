import styles from "../styles/home.module.css"
import MainContent from "./mainContent.tsx"
import ProductInfo from "./productInfo.tsx"
import image from "../assets/packet.png"
import About from "./about.tsx"

const Home = () => {
    return (
        <>
            <div className="packetImageWrapper">
                <MainContent />
                <ProductInfo />
            </div>
            <About />
        </>
    )
}

export default Home