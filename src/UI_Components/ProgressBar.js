import React, { useEffect, useState } from 'react';
import './index.css'

export const Progressbar = ({ onComplete }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        let intervalId = setInterval(() => {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 10;
                } else {
                    onComplete();
                    clearInterval(intervalId);
                    return prev;
                }
            })
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return <div className="progress-bar">
        <span className='progress-bar-completed' style={{ width: `${width}%` }}>{width}%</span>
    </div>
}