import React from "react";
import './styles.css'
import { Home } from "@mui/icons-material";
import Button from "./../../Common/Button/index";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import {motion} from "framer-motion"


const LandingPage = () =>{
    return(
        <div className="InfoComponent">
            <div className="leftComponent">
                <motion.h1 className="Track-Crypto-heading"
                initial={{y :- 15, opacity: 0}}
                animate = {{y: 15, opacity: 1}}
                transition={{duration: 0.5}}
                >Track Crypto</motion.h1>

                <motion.h1 className="Real-Time-heading"
                initial={{y :- 15, opacity: 0}}
                animate = {{y: 15, opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                >Real Time.</motion.h1>

                <motion.p className="info-text"
                initial={{x :- 30, opacity: 0}}
                animate = {{x: 0, opacity: 1}}
                transition={{duration: 0.5, delay: 0.5}}
                >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
                <div className="btn-flx">
                <Button text={"Dashboard"}/>
                <Button text={"Share"} outline={true}/>
                </div>
            </div>

            <div className="RightImageComponent">
                <motion.img className="iphone" src={iphone} alt="crypro"
                    initial={{ y: -20 }}
                    animate={{ y : 20}}
                    transition={{
                        type: "smooth",
                        repeatType: "mirror", 
                        duration: 2,
                        repeat: Infinity,
                   }}
                    />
                <img className="gradiant" src={gradient} alt="crypro"/>
            </div>
        </div>
    )
}

export default LandingPage