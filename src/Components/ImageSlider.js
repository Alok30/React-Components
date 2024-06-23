import React, { useState } from 'react'

function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);


    const showNextImage = () => {
        setCurrentIndex(prev => prev + 1);
    }

    const showPrevImage = () => {
        setCurrentIndex(prev => prev - 1);
    }
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {currentIndex !== 0 && <button
                style={{
                    width: '60px',
                    height: '40px',
                }}
                onClick={showPrevImage}
            >Prev</button>}
            <img src={images[currentIndex]} alt="slider" height="400px" width="400px" />
            {currentIndex !== images.length - 1 && <button
                style={{
                    width: '60px',
                    height: '40px',
                }}
                onClick={showNextImage}
            >Next</button>
            }
        </div>

    )
}

export default ImageSlider