import React from "react";
import './footer.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-top"> 
                    <div className="footer-top-left">
                        <p className="large-bold">AboutUS</p>
                        <p className="small footer-text-left">
                            Welcome to Accomodo - Lorem ipsum 
                            dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore. 
                        </p>
                        <Button className="tiny-bold footer-btn">Know the Devs</Button>
                    </div>
                    <div className="footer-top-right">
                        <p className="small footer-text-right">
                            Welcome to Accomodo - Lorem ipsum 
                            dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore. 
                        </p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="tiny">
                        ACCOMODO © 2023 All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home