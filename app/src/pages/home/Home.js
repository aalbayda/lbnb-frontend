import React from "react";
import './home.css';
import {NavBar, Banner, Footer} from '../../organisms';

const Home = () => {
    return (
        <div className="home-container">
            <NavBar/>
            <Banner/>
            <Footer/>
        </div>
    );
}

export default Home