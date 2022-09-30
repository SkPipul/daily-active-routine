import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {activity, handleAddToList} = props;
    const {img, name, time} = activity;
    // console.log(props);
    return (
        <div className='activity'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='info'>
                <h4 className='name-info'>{name}</h4>
                <p>Time required: {time} hr</p>
            </div>
            <button className='btn-cart'onClick={()=> handleAddToList(activity)}>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Activity;