import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='container header'>
            <h2 className='text-danger'><i class="fa-solid fa-chart-line text-primary"></i> Daily Active Routine</h2>
            <h3 className='my-3'>Select Today's Activities</h3>
        </div>
    );
};

export default Header;