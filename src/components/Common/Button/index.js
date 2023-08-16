import React from "react";
import "./styles.css"

const Button = ({text, outline}) => {
    return(

        // className= {outline ? "outline-btn": "btn"}
        <div className = {outline ? "outline-btn": "btn"}>
        {text}
        </div>
    )
}

export default Button