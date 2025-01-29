import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/arrow.png';

const Breadcrum = ({ product }) => {
    if (!product) {
        return <div className="breadcrum">Loading...</div>; 
    }

    return (
        <div className="breadcrum">
                HOME <img src={arrow_icon} alt="arrow" />
                SHOP <img src={arrow_icon} alt="arrow" />
                {product?.category || "Unknown Category"}
                <img src={arrow_icon} alt="arrow" />
                {product?.name || "Unknown Product"}
        </div>

    );
};

export default Breadcrum;