import { React, useState, useEffect } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import axios from "axios";
import { isLoggedIn, getAuthType, getAuthUsername } from "../../auth";
import config from "../../config";
const url = config.apiUrl;

const HeartReact = (props) => {
    const accomName = props.accomName;
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavorite = () => {
      if (!isFavorite && accomName) {
        console.log("Adding for", getAuthUsername());
        axios
          .post(url + "/accommodation/add-to-favorites", {
            userName: getAuthUsername(),
            accommName: accomName,
          })
          .then((res) => {
            console.log("Added to favorites of", getAuthUsername());
            console.log(res.data);
          })
          .catch((err) => console.error(err));
      } else if (accomName) {
        console.log("Removing from", getAuthUsername());
        axios
          .post(url + "/accommodation/remove-from-favorites", {
            userName: getAuthUsername(),
            accommName: accomName,
          })
          .then((res) => {
            console.log("Removed from favorites of", getAuthUsername());
            console.log(res.data);
          })
          .catch((err) => console.error(err));
      }
      setIsFavorite(!isFavorite);
    };

    useEffect(() => {
      if (isLoggedIn() && getAuthType() === "Student") {
        axios
          .post(url + "/accommodation/is-favorite", {
            username: getAuthUsername(),
            accommodationName: accomName,
          })
          .then((res) => {
            setIsFavorite(res.data.isFavorite);
            console.log(res.data.isFavorite);
            setLoading(false);
          })
          .catch((err) => console.error(err));
      } else {
        setLoading(false);
      }
    }, [accomName]);

    
        return(
          <div className="heart-button-details">
              {isLoggedIn() && getAuthType() === "Student" ? (
                isFavorite ? (
                  <RiHeart3Fill onClick={handleFavorite} className="heart-icon" />
                ) : (
                  <RiHeart3Line onClick={handleFavorite} className="heart-icon" />
                )
              ) : (
                <></>
              )}
          </div>
      )
}

export default HeartReact;