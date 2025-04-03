// HomeSection.jsx
import React from 'react';
import './HomeSection.css'; // Assuming you have a CSS file for styling

const HomeSection = () => {

    console.log("HomeSection component loaded"); // This will log when the component is loaded

  return (
    <div className='HomeSection'>
        <div className='navbar'>
            <h2>Name</h2>
            <h2>Exit</h2>
        </div>
        <div>
            <div className='LeftSide'></div>
            <div className='RightSide'></div>
        </div>
    </div>
  );
};

export default HomeSection;
