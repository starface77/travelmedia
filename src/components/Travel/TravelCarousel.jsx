import React from 'react';
import Slider from 'react-slick';
import TravelItem from './TravelItem';

function TravelCarousel (items) {

  return (
    <div className="travel-carousel">
        {items.map((item, index) => (
          <div key={index}>
            <TravelItem {...item} />
          </div>
        ))}
    </div>
  );
};

export default TravelCarousel;
