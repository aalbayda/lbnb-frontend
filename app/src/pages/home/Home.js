import React from "react";
import './home.css';
import {NavBar, Banner, Footer, ApartmentCarousel, HotelsCarousel, DormCarousel, Multilayerfilter} from '../../organisms';
const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>
            <Banner/>
            <Multilayerfilter/>
            <ApartmentCarousel/>
            <DormCarousel/>
            <HotelsCarousel/>
            <Footer/>
        </div>
    );
}

export default Home