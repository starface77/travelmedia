import React from 'react';
import '../../settings/_btn.scss';
import './stylelast.scss';
import Heading from '../common/Heading';
import TravelItem from './TravelItem';
import travelData from '../../db/Blin.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function CustomDot(props) {
    const { onClick, index } = props;

    return (
        <span
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="45" viewBox="0 0 86 45" fill="none">
                <path d="M24 0.999998L2.49433 20.2655C1.16332 21.4579 1.16333 23.5421 2.49433 24.7345L24 44" stroke="#D4D4D4" stroke-width="2" />
                <path d="M62 0.999998L83.5057 20.2655C84.8367 21.4579 84.8367 23.5421 83.5057 24.7345L62 44" stroke="#0499DD" stroke-width="2" />
            </svg>
        </span>
    );
}

function Travel() {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="travel2-wrapper">
          

            <Slider {...sliderSettings}>
                {travelData.map((item, index) => (
                    <div key={index}>
                        <TravelItem
                            id={item.id}
                            type={item.type}
                            title={item.title}
                            subtitle={item.subtitle}
                            time={item.time}
                            price={item.price}
                            link={item.link}
                            image={item.image}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Travel;
