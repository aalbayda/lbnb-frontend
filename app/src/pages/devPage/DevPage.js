import { React, useState, useEffect } from "react";
import "./devPage.css";
import {
    NavBar,
    Banner,
    Footer,
    DevTile
  } from "../../organisms";
import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12} from '../../assets/images';
const DevPage = () => {
    return (
        <div className="devpage-container">
            <NavBar />
            <div className="member_section">
                <p className="header1 bold light-green">DEVELOPER'S PAGE</p>
                <p className="header3 bold">Project Manager</p>
                    <DevTile 
                        nickname={"Russ"}
                        name={"Rey Russel Dayahan"}
                        team={"Backend Developer"}
                        email={"rrdayahan@up.edu.ph"}
                        photo={image2}
                    />
                <div className="team-members-list">
                    <p className="header3 bold">Team Heads</p>
                    <div className="team-list">
                        <DevTile
                            nickname={"Gen"}
                            name={"Genesis Topinio"}
                            team={"Backend Developer"}
                            email={"gntopinio@up.edu.ph"}
                            photo={image11}
                        />
                        <DevTile
                            nickname={"Garchi"}
                            name={"Leonard Garchitorena"}
                            team={"Database Developer"}
                            email={"lpgarchitorena@up.edu.ph"}
                            photo={image5}
                        />
                        <DevTile 
                            nickname={"Bob"}
                            name={"Albrave Albayda"}
                            team={"Frontend Developer"}
                            email={"abalbayda@up.edu.ph"}                        
                        />
                    </div>
                </div>
                <div className="team-members-list">
                    <p className="header3 bold">Front End Developers</p>
                    <div className="team-list">
                        <DevTile 
                            nickname={"Mark"}
                            name={"Mark Lewis Damalerio"}
                            team={"Frontend Developer"}
                            email={"mldamalerio@up.edu.ph"}
                            photo={image7}                      
                        />
                        <DevTile
                            nickname={"Gnet"}
                            name={"Gwyneth Balucio"}
                            team={"DB & Frontend Developer"}
                            email={"gnbalucio@up.edu.ph"}
                            photo={image8}                            
                        />
                        <DevTile 
                            nickname={"Kael"}
                            name={"Michael Jay Makiling"}
                            team={"Frontend Developer"}
                            email={"mrmakiling@up.edu.ph"}   
                            photo={image1}                        
                        />
                        <DevTile
                            nickname={"Jra"}
                            name={"Jramae Gallos"}
                            team={"Frontend Developer"}
                            email={"jmgallos@up.edu.ph"}
                            photo={image3}                        
                        />
                    </div>
                </div>
                <div className="team-members-list">
                    <p className="header3 bold">Back End Developers</p>
                    <div className="team-list">
                        <DevTile
                            nickname={"Lyco"}
                            name={"Lyco Sheen Lacuesta"}
                            team={"Backend Developer"}
                            email={"lslacuesta@up.edu.ph"}
                            photo={image9}                           
                        />
                        <DevTile
                            nickname={"Kyle"}
                            name={"Kyle Martin Villagen"}
                            team={"Backend Developer"}
                            email={"kmvillagen@up.edu.ph"}
                            photo={image12}                           
                        />
                    </div>
                    <div className="team-listb">
                        <DevTile
                            nickname={"Brian"}
                            name={"Loria Brian"}
                            team={"DB & Backend Developer"}
                            email={"bnloria@up.edu.ph"}
                            photo={image4}                           
                        />
                        <DevTile
                            nickname={"Dale"}
                            name={"Alesundreau Ratuiste"}
                            team={"DB & Backend Developer"}
                            email={"adratuiste@up.edu.ph"}
                            photo={image10}                            
                        />
                        <DevTile
                            nickname={"Kyle"}
                            name={"Kyle Sotto"}
                            team={"DB & Backend Developer"}
                            email={"klsotto@up.edu.ph"}
                            photo={image6}                            
                        />
                    </div>
                </div>
                {/* <div className="team-members-list">
                    <p className="header3 bold">Database Developers</p>
                    <div className="team-list">
                    </div>
                </div> */}
            </div>
            {/* <Footer /> */}
        </div>
      );
};

export default DevPage;
