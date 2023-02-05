import Footer from "../Components/Footer"
import Breadcrum from "../Components/Breadcrum"
import Menu from "../Components/Menu"
import Header from "../Components/Header"
import NewsSection from "../Components/NewsSection"

import HeaderImg from "../Assets/images/header-bg.png"
import BannerImg from "../Assets/images/hero-banner.png"
import FooterImg from "../Assets/images/footer.png"

export default function Home() {
    return (
        <body>
            <header>
                <div className="header-left">
                    <img src={HeaderImg} alt="header img" />
                </div>
                <div className="header-right">
                    <input type="text" placeholder="indtast søgeord" />
                    <button>arrow</button>
                </div>
            </header>
            <aside>
                <menu>
                    <ul>Guitarer</ul>
                    <ul>Basser</ul>
                    <ul>Handmade</ul>
                    <ul>Trommer</ul>
                    <ul>Percussion</ul>
                    <ul>Stryg & Blæs</ul>
                    <ul>Brands</ul>
                </menu>
            </aside>
            <main>
                <div className="banner">
                    <img src={BannerImg} alt="" />
                </div>
            </main>
            <footer>
                <img src={FooterImg} alt="footer image" />
            </footer>
        </body>
    )
}
