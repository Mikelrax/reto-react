import NavBar from "../../ComponentModule/Common/Components/NavBar/NavBar";
import Slider from "../../ComponentModule/Common/Components/Slider/Slider";
import Hero from "../../ComponentModule/Common/Components/Hero/Hero";
import OffersList from "../../ComponentModule/Products/components/OffersList/OffersList";
import Footer from "../../ComponentModule/Common/Components/Footer/Footer";
const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Hero></Hero>
            <OffersList/>
            <OffersList/>
            <OffersList/>
            <OffersList/>
            <Footer></Footer>
        </div>
    )
};

export default Home;