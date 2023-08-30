import React from 'react'
import { Link } from 'react-router-dom';
import TemporaryDrawer from './drawer';
import Button from './../Button/index';
import "./styles.css"
import DarkMode from './../DarkMode/DarkMode';
import Mode from '../Mode';

const Header = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>
        CryptoTracker
        <span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className='links'>
      {/* <DarkMode/> */}
      <Mode/>
        <Link to="/">
          <p className='link'>Home</p>
        </Link>
        <Link to="/compare">
          <p className='link'>Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className='link'>Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"} onClick={()=> console.log("btn clicked")} />
        </Link>
      </div>
      <div className="mobile-drawer">
      <TemporaryDrawer/>
      </div>
    </div>
  )
}

export default Header