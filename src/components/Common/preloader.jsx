import React from "react";
import preloader from "../../assets/images/Gear-0.2s-200px.svg";

const Preloader = (props) =>{
    return(
        <div>
            <img src={preloader} style={{backgroundColor: 'white'}}/>
        </div>
    )
}

export default Preloader;
