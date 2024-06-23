import React, { useState } from 'react'
import { Progressbar } from './ProgressBar'

export const Progessbarcontroller = () => {

    const [totalRunningProgressBar, setTotalRunningProgressBar] = useState([]);

    const [pendingProgressBar, setPendingProgessBar] = useState([]);

    const addProgessBar = () => {
        const newProgessBar = [...totalRunningProgressBar];
        const newPendingProgressBar = [...pendingProgressBar];
        if (newProgessBar.length < 5) {
            newProgessBar.push(1);
            setTotalRunningProgressBar(newProgessBar)
        } else {
            newPendingProgressBar.push(1);
            setPendingProgessBar(newPendingProgressBar);
        }

    }

    const onComplete = () => {
        setTotalRunningProgressBar(prev => {
            if (pendingProgressBar.length > 0) {
              return [...prev.slice(1), pendingProgressBar[0]];
            }
            return prev.slice(1);
          });
          setPendingProgessBar(prev => prev.slice(1));
 
    }

    // console.log(totalRunningProgressBar,pendingProgressBar)
    return (
        <>
            <button onClick={addProgessBar}>Add ProgressBar</button>
            {totalRunningProgressBar.map((item, idx) => {
                return (
                    <div key={idx}>
                        <Progressbar onComplete={onComplete} />
                    </div>
                )
            })}

        </>
    )

}
