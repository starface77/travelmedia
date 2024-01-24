import { useState } from "react";
import Navigation from "../Navigation/Nav";
import likeimg from '../../assets/heart 2.png'
import heart from '../../assets/heartactive.png'
import './style.scss'
import Heading from "../common/Heading";
import About from "../About/About";
import Calendar from "../About/Calendar";
import Marshut from "./Marshut";
import { useEffect } from "react";
import Expenses from "./Expenses";
import TravelLast from "../Travel/TravelLast";
import Travel from "../Travel/Travel";
import Information from "../Information/Information";
import GalleryComponent from "../Gallery/GalleryComponent";
import ReviewComponent from "../Review/ReviewComponent";
import ReviewJson from "../Review/ReviewJson";
import Footer from "../Footer/Footer";
import Book from "../BookTour/Book";

function MainExcursion() {
    const [isHeartActive, setIsHeartActive] = useState(false);

    function toggleHeart() {
        setIsHeartActive((prev) => !prev)
    }
    return (
        <div className="main-excursion-wrapper">
            <div className="nav-main">
                <Navigation />
                <div className="span-and-otr">
                    <span>Автобусный тур</span>
                    <h1>ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ<br /> (ИЗ АДЛЕРА)</h1>
                    <br />
                    <div className="btn-and-like">
                        <button className="btn-blue">К другим экскурсиям</button>
                        <div className="like-container">
                            <img
                                className={`heart-icon ${isHeartActive ? 'active' : ''}`}
                                src={isHeartActive ? heart : likeimg}
                                alt="Heart"
                                onClick={toggleHeart}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="statistic">
                <div className="statistic-container">
                    <Heading size={2}>Описание экскурсии</Heading>
                    <br />
                    <p>Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок.</p>
                    <div className="right">

                        <div className="fon-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                                <circle cx="28.5" cy="28.5" r="28.5" fill="#FFC700" />
                            </svg>

                            <div className="money-container">
                                <Heading size={2.5}>1 618 ₽</Heading>
                                <p>Взрослый билет</p>
                            </div>
                        </div>
                        <div className="fon-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                                <circle cx="28.5" cy="28.5" r="28.5" fill="#FFC700" />
                            </svg>
                            <div className="money-container">
                                <Heading size={2.5}>1 412 ₽</Heading>
                                <p>Взрослый билет</p>
                            </div>
                        </div>
                        <div className="fon-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                                <circle cx="28.5" cy="28.5" r="28.5" fill="#FFC700" />
                            </svg>
                            <div className="money-container">
                                <Heading size={2.5}>12 часов</Heading>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <Calendar />
            <br />
            <div className="hoop">
                <div className="left1">
                    <Marshut />
                </div>
                <div className="right1">
                    <TravelLast />
                </div>
            </div>
            <br />
            <Expenses />
            <br />
            <Information />
            <br />
            <GalleryComponent />
            <br />
            <ReviewJson />
            <br />
            <Book />
            <br />
            <Footer />
        </div>
    );
}

export default MainExcursion;