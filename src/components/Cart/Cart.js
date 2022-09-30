import React from 'react';
import './Cart.css'

const Cart = () => {
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
                    <p><strong>60 kg</strong></p>
                    <p><small>Weight</small></p>
                </div>
                <div>
                    <p><strong>5.6</strong></p>
                    <p><small>Height</small></p>
                </div>
                <div>
                    <p><strong>24 yrs</strong></p>
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
        </div>
    );
};

export default Cart;