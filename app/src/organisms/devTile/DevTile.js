import { React } from "react";
import "./devTile.css";
import { banner1 } from "../../assets/images";
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';
const DevTile = ({nickname, name, email, team}) => {
    return (
        <div className="devtile-container">
        <div className="devtile-card">
            <div className="devtile-card-upper">
                <img className="photo d-block w-100" src={banner1} alt="First slide" />
            </div>
            <div className="devtile-card-lower">
                <p className="header4 center">{nickname}</p>
                <p className="regular-bold center">{name}</p>
                <p className="small center team">{team}</p>
                <p className="small center">{email}</p>
                <div className="devtile_links">
                    <p>Socials</p>
                    <div className="devtile_logos">
                        <AiFillGithub className="devtile_icon"/>
                        <AiFillLinkedin className="devtile_icon"/>
                    </div>
                </div>
            {/* <Button
                className="small-bold carousel-btn"
                onClick={() => (window.location.href += "details")}
            >
                View More
            </Button> */}
            </div>
        </div>
        </div>
      );
};

export default DevTile;
