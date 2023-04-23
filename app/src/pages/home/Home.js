import React from "react";
import './home.css';
import {NavBar, Banner, Footer, ApartmentCarousel, HotelsCarousel, DormCarousel} from '../../organisms';
const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>
            <Banner/>
            <ApartmentCarousel/>
            <DormCarousel/>
            <HotelsCarousel/>
            <Footer/>
        </div>
    );
}

export default Home