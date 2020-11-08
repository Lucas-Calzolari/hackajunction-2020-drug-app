import React from 'react';
import "./decayTrail.scss";

const DecayTrail = (props : {imgName : string | null}) => {

   return (
        <div className="decay-trail">
            {
                props.imgName && <>
                    <img src={`/bw_${props.imgName}`} style={{transform: 'translate(6px, -15px)  scale(0.5)'}}/>
                    <img src={`/bw_${props.imgName}`} style={{transform: 'scaleX(-1) translate(6px, -12px)  scale(0.6)'}}/>
                    <img src={`/bw_${props.imgName}`} style={{transform: 'translate(6px, -9px)  scale(0.7)'}}/>
                    <img src={`/bw_${props.imgName}`} style={{transform: 'scaleX(-1) translate(6px, -6px)  scale(0.8)'}}/>
                    <img src={`/bw_${props.imgName}`} style={{transform: 'translate(6px, -3px) scale(0.9)'}}/>
                    <img src={`/bw_${props.imgName}`} style={{transform: 'scaleX(-1) translate(6px, -3px)'}}/>
                </>
            }

            <div className="main-icon-container">
                <img src={props.imgName ? `/${props.imgName}` : '/full_heart.svg'}  />
            </div>
        </div>
   ) 
}

export default DecayTrail;