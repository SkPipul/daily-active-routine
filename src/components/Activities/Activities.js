import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    }, [])

    return (
        <div className='container'>
            <h3>Select Today's Activities</h3>
            <div className='activities-container'>
                {
                    activities.map(activity => <Activity
                    key={activity.id}
                    activity={activity}></Activity>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Activities;