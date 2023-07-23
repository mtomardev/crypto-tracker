import React from "react";
import "./style.css"
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link, NavLink } from "react-router-dom";



const Header = (props) =>{
    return(
        <div className="navbar">
            <h1 className="logo">CryptoTracker<span style={{color : "var(--blue)"}}>.</span></h1>
            <div className="links">
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  {/* <label className="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label> */}
</div>


                <NavLink to="/">
                <p className="link">Home</p>
                </NavLink>
                <NavLink to="/compare">
                <p className="link">Compare</p>
                </NavLink>
                <NavLink to="/watchlist">
                <p className="link">Watchlist</p>
                </NavLink>
                <NavLink to="/dashboard">
                    <Button text = {"Dashboard"} 
                    outlined={true}
                    onClick={()=>console.log("btn clicked")}/>
                </NavLink>
                
            </div>

            <div className="mobile-drawer">
                <TemporaryDrawer/>
            </div>
        </div>
    )
}

export default Header