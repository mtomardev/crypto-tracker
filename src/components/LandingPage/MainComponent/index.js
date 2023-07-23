import React from 'react'
import "./style.css"
import Button from '../../Common/Button'
import iphone from '../../../assets/iphone.png'
import gradient from '../../../assets/gradient.png'
import {motion} from "framer-motion"

function MainComponent() {
  return (
    <div className='flex-info'>
      <div className='left-component'>
        <motion.h1 
        className='track-crypto-heading'
        initial={{opacity:0, y:50}}
        animate = {{opacity:1, y:0}}
        transition={{duration: 1 }}
        >Track Crypto
        </motion.h1>

        <motion.h1 
        className='real-time-heading'
        initial={{opacity:0, y:50}}
        animate = {{opacity:1, y:0}}
        transition={{duration: 1, delay:1 }}
        >Real Time.</motion.h1>
        
        <motion.p className='info-text'
        initial={{opacity:0, y:50}}
        animate = {{opacity:1, y:0}}
        transition={{duration: 1, delay:1.5 }}
        
        >Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
              
      {/* button flex */}
      <motion.div className='btn-flex'
      initial={{opacity:0, x: 50}}
      animate = {{opacity:1, x: 0}}
      transition={{duration: 1, delay:2 }}>
        <Button text = {"Dashboard"} />
        <Button text={"Share"} outlined={true}/>
      </motion.div>
      
      </div>
      <div className='right-component'>
        <motion.img src={iphone} alt="crypto Dashboard" className='iphone'
        initial={{ y: -15}}
        animate = {{y: 15}}
        transition={{type:"smoth", repeatType:"mirror", duration: 2, repeat: Infinity }}
        
        
        />
        <img src={gradient} alt='gradient background' className='gradient' />
      </div>
    </div>
  )
}

export default MainComponent
