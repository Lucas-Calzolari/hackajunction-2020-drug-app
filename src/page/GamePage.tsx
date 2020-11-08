import React, { useState, useEffect, useRef } from 'react';
import "./gamePage.scss";
import {data as gameData, data} from '../game/gameData';
import ProgressBar from '../components/ProgressBar';
import DecayTrail from '../components/DecayTrail';
import DrugPicker from '../components/DrugPicker';

const GamePage = () => {
    const [step, setStep] = useState(0);
    const textContainerRef = useRef(null as null | HTMLDivElement);
    useEffect(() => {
        const currentEvent = gameData[step]; 
        if (Array.isArray(currentEvent)) {
             const timeoutId = setTimeout(() => {
                setStep(step + 1);
            }, 7000)
            return () => clearTimeout(timeoutId);
        }
        if (currentEvent.type === "content") {
            const timeoutId = setTimeout(() => {
                setStep(step + 1);
            }, 4000)
            return () => clearTimeout(timeoutId);
        }
    }, [step])
    useEffect(() => {
        if (textContainerRef.current) {
            textContainerRef.current.scrollTo({
                top: 999999999, behavior: 'smooth'
            })
        }
    }, [step])

    let profileImg = "/profile_0.jpg"
    if (step >= 7) {
        profileImg = "/profile_1.jpg"
    }
    if (step >= 12 ) {
        profileImg = "/profile_2.jpg"
    }

    let lastIconImg : string | null= null
    if (step >= 4) {
        lastIconImg = "heart.svg"
    }
    if (step >= 5) {
        lastIconImg = "brain.svg"
    }
    if (step >= 14) {
        lastIconImg = "tooth.svg"
    }

    return <div className="game-page">
        {Array.isArray(gameData[step]) && <ProgressBar />}
        <div className="gradient-overlay" />
        <img className="profile-image" src={profileImg}/>
        <DrugPicker/>
        {
            step  == data.length &&
            <button className="share-button">
                <img src="/share.svg" />
            </button>
        }
        <div className="chat-box">
            <div className="location-tag" style={{display: 'flex'}}><img src="/pin.png"  style={{width: '20px', marginRight: '10px'}}/>aalto university</div>
            <div className="text-container" ref={textContainerRef}>
                {gameData.slice(0,step+1).map((data, i) => {
                    if (Array.isArray(data)) {
                        if (i !== step) {
                            return <div className="message action">{data[0]}</div>                            
                        }
                        return (
                        <div className="action-buttons-container">
                            <button className="option-button" onClick={() => setStep(step + 1)}>{data[0]}</button>
                            <button className="option-button" style={{cursor: 'default'}} disabled>{data[1]}</button>
                        </div>
                        ) 
                    }
                    if (data.type === "content") {
                        return <div className="message">
                            {data.icon && <img className="message-icon" src={data.icon}/>}
                            {data.content}</div>
                    }
                    if (data.type === 'result') {
                        return (
                            <>
                                <div className="message">
                                    {data.content}
                                </div>
                                <button className="play-again-button" onClick={() => setStep(0)}>
                                    Play Again
                                </button>
                            </>
                        )
                    }
                })}
            </div>
            <DecayTrail imgName={lastIconImg}/>
        </div>
    </div>
}

export default GamePage;