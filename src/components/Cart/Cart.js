import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {list} = props;

    let totalTime = 0;
    for(const activity of list){
        totalTime = totalTime + activity.time;
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
                <h3>Add a break</h3>
            </div>
            <div className="break-container">
                <button className='btn-break'>10s</button>
                <button className='btn-break'>20s</button>
                <button className='btn-break'>30s</button>
                <button className='btn-break'>40s</button>
                <button className='btn-break'>50s</button>
            </div>
            <div>
                <h3>Activities Details</h3>
            </div>
            <div className="activities-details">
                <h4>Total activities time: {totalTime}</h4>
            </div>
            <div className="activities-details">
                <h4>Break Time: </h4>
            </div>
            <button className='btn-final'><p>Activity completed</p></button>
        </div>
    );
};

export default Cart;