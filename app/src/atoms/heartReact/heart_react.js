import React from "react";
import './heart_react.css';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Height } from "@mui/icons-material";
import { height } from "@mui/system";

const HeartReact = () => {
    const [clicked, setClicked] = React.useState(false);

    const handleClick=()=>{
        if (clicked == false){
            setClicked(true)
        }
        else{
            setClicked(false)
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