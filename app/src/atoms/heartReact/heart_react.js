import React from "react";
import './heart_react.css';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import axios from "axios";
const url = "https://mockup-backend-128.herokuapp.com";

const HeartReact = (props) => {
    const accomName = props.accomName ? props.accomName : "Owner";
    const userName = props.userName ? props.userName : "User";
    const isFavorite = props.isFavorite ? props.isFavorite : false;

    const [clicked, setClicked] = React.useState(isFavorite);

    const handleClick=()=>{
        console.log(accomName, userName);
        if (clicked == true){
            setClicked(false)
            // console.log(accomName, userName, !clicked);
            axios.post(url + '/accommodation/remove-from-favorites', {
                userName: userName,
                accommName: accomName
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
        else{
            setClicked(true)
            // console.log(accomName, userName, !clicked);
            axios.post(url + '/accommodation/add-to-favorites', {
                userName: userName,
                accommName: accomName
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }

        
    }
    return(
        <div>
            <IconButton 
                onClick={() => handleClick()}>
                {clicked ? <FavoriteIcon sx={{width:70,
                height:30}}/> : <FavoriteBorderIcon sx={{width:70,
                    height:30}}/>}
            </IconButton>
        </div>
    )
}

export default HeartReact;