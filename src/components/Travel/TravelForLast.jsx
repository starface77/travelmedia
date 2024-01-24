import React from 'react';
import '../../settings/_btn.scss';
import './style2.scss';

function TravelItem(props) {
    return (
        <div className="maindiv">
            <div className="main-item">
                <div
                    className="background-title"
                    style={{
                        backgroundImage: `url(${props.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                    }}
                >
                  
                </div>
            </div>
        </div>
    );
}

export default TravelItem;
