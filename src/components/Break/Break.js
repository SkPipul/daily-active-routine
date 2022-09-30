import React, { useState } from 'react';
import { getLocalStorage } from '../../utilities/localStorage';
import './Break.css'

const Break = () => {
    const [breakTime, setBreakTime] = useState(getLocalStorage());
    const addToBreak = (event) =>{
        setBreakTime(event.target.innerText);
        
    }
    return (
        <div>
                <div className="break-container">
                <button onClick={(event)=>addToBreak(event)} className='btn-break'>10s</button>
                <button onClick={(event)=>addToBreak(event)} className='btn-break'>20s</button>
                <button onClick={(event)=>addToBreak(event)} className='btn-break'>30s</button>
                <button onClick={(event)=>addToBreak(event)} className='btn-break'>40s</button>
                <button onClick={(event)=>addToBreak(event)} className='btn-break'>50s</button>
                </div>

                <div>
                    <h3 className='text-detail'>Activities Details</h3>
                </div>
                <div className="activities-details">
                    <h4>Break Time: {breakTime}</h4>
                </div>
        </div>
    );
};

export default Break;