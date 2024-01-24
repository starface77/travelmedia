import React from 'react';
import Heading from "../common/Heading";
import ExcursionData from "../../db/excursion.json";
import ExcursionItem from "./ExcursionItem";
import "./style.scss"
import { Link } from 'react-router-dom';

function ExcursionComponent() {
    return (
        <div className="excursion-wrapper">

            <Heading size={2}>Виды экскурсий</Heading>
            {ExcursionData.map((item, index) => (
                <ExcursionItem
                    key={index}
                    ide={item.ide}
                    type={item.type}
                    subtype={item.subtype}
                    subtitle={item.subtitle}
                    img={item.img}
                />
            ))}
            <br />
            <br />
            <br />
            <div className="center-info">
                <span>Выбирайте на нашем сайте экскурсию, которая подходит именно вам<br/> и записывайтесь онлайн без очередей, просто и быстро!</span><br />
                <Link to={"/excursion"}>
                    <button className='btn-blue'>
                        К экскурсиям <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8" fill="none">
                            <path d="M14.3536 4.35355C14.5488 4.15829 14.5488 3.84171 14.3536 3.64645L11.1716 0.464466C10.9763 0.269204 10.6597 0.269204 10.4645 0.464466C10.2692 0.659728 10.2692 0.976311 10.4645 1.17157L13.2929 4L10.4645 6.82843C10.2692 7.02369 10.2692 7.34027 10.4645 7.53553C10.6597 7.7308 10.9763 7.7308 11.1716 7.53553L14.3536 4.35355ZM0 4.5H14V3.5H0V4.5Z" fill="white" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ExcursionComponent;
