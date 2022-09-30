import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    const handleAddToList = (activity) => {
        // console.log(activity);
        const newList = [...list, activity];
        setList(newList);
    }

    return (
        <div className='container activities-container'>
            <div className='activities'>
                {
                    activities.map(activity => <Activity
                    key={activity.id}
                    activity={activity}
                    handleAddToList={handleAddToList}
                    ></Activity>)
                }
            </div>
            <div className='cart-container'>
                    <Cart list={list}></Cart>
            </div>
        </div>
    );
};

export default Activities;