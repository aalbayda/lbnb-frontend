import React from "react";
import './home.css';
import {NavBar, Banner, Footer, ApartmentCarousel} from '../../organisms';

const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>
            <Banner/>
            <ApartmentCarousel/>
            <Footer/>
        </div>
    );
}

export default Home