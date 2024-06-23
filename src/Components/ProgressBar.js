import React, { useEffect, useState } from 'react'

export const ProgressBar = ({ value = 0 }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setProgress((val) => {
                if (val < value) {
                    return val + 1;
                } else {
                    clearInterval(interval);
                    return val;
                }
            })
        }, 100)
        return () => {
            clearInterval(interval);
        }
    }, [value])

    return (
        <div style={{
            minHeight: '100%',
            width: '100%',
            borderRadius: '15px',
            border: '1px solid grey',
            display: 'flex',
            flexDirection: 'column',

        }}>
            <span style={{ width: `${progress}%`, backgroundColor: 'green' }}>
                {progress.toFixed()}%
            </span>
        </div>
    )
}
