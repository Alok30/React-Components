import React, { useState } from "react";
import './index.css';

const StarRating = ({ star }) => {
    const star1 = [...Array(5).fill('*')];
    console.log(star1);
    const [starCount, setStarCount] = useState(star);

    const incrementCounter = () =>{
        console.log('comingh')
        setStarCount((prev)=>prev+1);
    }

    return <div className="star-container">
        {star1.map((_, idx) => <h1 
        key={idx} 
        className={idx < starCount ?'star-container-selected' : 'star-container-normal'}
        onClick={incrementCounter}
        >
            {_}
        </h1>)}
    </div>
    
};

export default StarRating;