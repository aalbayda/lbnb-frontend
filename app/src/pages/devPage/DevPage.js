import { React, useState, useEffect } from "react";
import "./devPage.css";
import {
    NavBar,
    Banner,
    Footer,
    DevTile
  } from "../../organisms";

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
                    />
                <div className="team-members-list">
                    <p className="header3 bold">Team Heads</p>
                    <div className="team-list">
                        <DevTile
                            nickname={"Gen"}
                            name={"Genesis Topinio"}
                            team={"Backend Developer"}
                            email={"gntopinio@up.edu.ph"}
                        />
                        <DevTile
                            nickname={"Garchi"}
                            name={"Leonard Garchitorena"}
                            team={"Database Developer"}
                            email={"lpgarchitorena@up.edu.ph"}
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
                        />
                        <DevTile 
                            nickname={"Kael"}
                            name={"Michael Jay Makiling"}
                            team={"Frontend Developer"}
                            email={"mrmakiling@up.edu.ph"}                           
                        />
                        <DevTile
                            nickname={"Jra"}
                            name={"Jramae Gallos"}
                            team={"Frontend Developer"}
                            email={"jmgallos@up.edu.ph"}                           
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
                        />
                        <DevTile
                            nickname={"Kyle"}
                            name={"Kyle Martin Villagen"}
                            team={"Backend Developer"}
                            email={"kmvillagen@up.edu.ph"}                           
                        />
                    </div>
                </div>
                <div className="team-members-list">
                    <p className="header3 bold">Database Developers</p>
                    <div className="team-list">
                        <DevTile
                            nickname={"Brian"}
                            name={"Loria Brian"}
                            team={"Database Developer"}
                            email={"bnloria@up.edu.ph"}                           
                        />
                        <DevTile
                            nickname={"Gnet"}
                            name={"Gwyneth Balucio"}
                            team={"Database Developer"}
                            email={"gnbalucio@up.edu.ph"}                            
                        />
                        <DevTile
                            nickname={"Dale"}
                            name={"Alesundreau Ratuiste"}
                            team={"Database Developer"}
                            email={"adratuiste@up.edu.ph"}                            
                        />
                        <DevTile
                            nickname={"Kyle"}
                            name={"Kyle Sotto"}
                            team={"Database Developer"}
                            email={"klsotto@up.edu.ph"}                            
                        />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
      );
};

export default DevPage;
