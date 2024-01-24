import React from 'react';
import '../../settings/_btn.scss';
import './style.scss';
import timee from '../../assets/time 1.png';
import pricehere from '../../assets/Frame 1.png';
import { Link } from 'react-router-dom';

function TravelItem(props) {
    return (
        <div className="maindiv">
            <div className="main-item">
                <div
                    className="background-title"
                    id={props.id}
                    style={{
                        backgroundImage: `url(${props.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                    }}
                >
                    <div className="texts-edu">
                        <span className="title">{props.type}</span>
                        <br />
                        <span className="type">{props.title}</span>
                        <br />
                        <img className="icon-time" src={timee} />
                        <span className="titl1">{props.time}</span>
                        <img className="icon-price" src={pricehere} />
                        <span className="titl1">{props.price}</span>
                        <br />
                        <br />
                        <span className="titl1">{props.subtitle}</span>
                        <br />
                        <div className="btntop">
                            <Link to={"/excursion"}>
                                <button className="btn-blue">Подробнее</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TravelItem;
