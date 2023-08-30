import React from "react";
import Header from '../components/Common/Header/index';
import MainComponent from "../components/LandingPage/MainComponent";
import Footer from "../components/Common/Footer";
import './styles.css'

const HomePage = () => {
  return (
    

    <div>
    
    <div className="content-container"> 
      {/* <Header /> */}
      <MainComponent />
    </div>
    <div className="footer--pin">
      <Footer/>
    </div>
      
      
      
    </div>
  );
};

export default HomePage;
