import React, {} from 'react';
import Toast from '../Toast/Toast';
import './Cart.css'

    
const Cart = (props) => {
    const {list} = props;

    let totalTime = 0;
    for(const activity of list){
        totalTime = totalTime + activity.time;
    }
    const addToBreak = (event) =>{
    }
    return (
        <div className='cart-container'>
            <div className='cart'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU" alt="" />
                <div>
                    <p><strong>Muhammad Jabed</strong></p>
                    <p><small><i class="fa-solid fa-location-dot"></i> Chitagong,<br /> Bangladesh</small></p>
                </div>
            </div>
            <div className="cart-info">
                <div>
                    <p><strong>60 </strong>kg</p>
                    <p><small>Weight</small></p>
                </div>
                <div>
                    <p><strong>5.6</strong></p>
                    <p><small>Height</small></p>
                </div>
                <div>
                    <p><strong>24 </strong>yrs</p>
                    <p><small>Age</small></p>
                </div>
            </div>
            <div>
                <h4 className='mb-4'>Add a break</h4>
            </div>
            <div className="break-container">
                <button onClick={(event)=>addToBreak(event)} className='btn-break'>10s</button>
                <button onClick={addToBreak(20)} className='btn-break'>20s</button>
                <button onClick={addToBreak(30)} className='btn-break'>30s</button>
                <button onClick={addToBreak} className='btn-break'>40s</button>
                <button onClick={addToBreak} className='btn-break'>50s</button>
            </div>
            <div>
                <h3>Activities Details</h3>
            </div>
            <div className="activities-details">
                <h4>Total activities time: {totalTime} hr</h4>
            </div>
            <div className="activities-details">
                <h4>Break Time: </h4>
            </div>
            <div>
                <Toast></Toast>
            </div>
        </div>
    );
};

export default Cart;