import React from 'react';
import "./homePage.scss";

const HomePage = (props : {onStart : () => void}) => {
    return (
    <div className="home-page">
        <img className="background-image" src="/LandingPage.jpg" />
        <div className="content-container">
            <h1 className="title">
                Think you can outsmart drugs?
            </h1>
            <h2 className="subtitle">
                Choose your own drug adventure to see who wins: You or Drugs
            </h2>

            <button className="start-button" onClick={props.onStart}>
                Play Now
            </button>
        </div>
    </div>
    ) 
}

export default HomePage;