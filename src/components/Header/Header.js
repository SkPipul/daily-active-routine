import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header-text'><i class="fa-solid fa-chart-line icon"></i> Daily Active Routine</h1>
            <h2 className='heading'>Select Today's Activities</h2>
        </div>
    );
};

export default Header;