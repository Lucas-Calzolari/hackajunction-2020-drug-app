import React from 'react';
import "./drugPicker.scss";

const DrugPicker = () => {
    return <div className="drug-picker">
            <button className="drug-button">
                <img src="/unavailable.svg" />
                <img src="/cocaine.svg" />
            </button>
            <button className="drug-button">
                <img src="/unavailable.svg" />
                <img src="/heroin.svg" />
            </button>
            <button className="drug-button">
                <img src="/meth.svg" />
            </button>
    </div>
}

export default DrugPicker;