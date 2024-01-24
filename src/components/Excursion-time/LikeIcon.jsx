import React from 'react';
import likeimg from '../../assets/heart 2.png';
import heart from '../../assets/heartactive.png';

function LikeIcon({ active, onClick }) {
    return (
        <img
            src={active ? heart : likeimg}
            alt="Heart"
            onClick={onClick}
        />
    );
}

export default LikeIcon;
