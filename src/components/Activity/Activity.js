import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {img, name, time} = props.activity
    return (
        <div className='activity'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='info'>
                <h4 className='name-info'>{name}</h4>
                <p>Time required: {time} hr</p>
            </div>
            <button className='btn-cart'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Activity;