import React, { useState } from 'react';
import Navigation from "../Navigation/Nav";
import './style.scss';
import Heading from '../common/Heading';
import Footer from '../Footer/Footer';
import ExcursionItem from './ExcursionItem';
import likeimg from '../../assets/heart 2.png'
import heart from '../../assets/heartactive.png'
import LikeIcon from './LikeIcon';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ExcursionAbout(props) {
    const [activIndex, setactivindex] = useState(0);
    const [isHeartActive, setIsHeartActive] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isBlue, setBlue] = useState(null);
    const [counter, setCounter] = useState(1);

    function toggleHeart() {
        setIsHeartActive((prev) => !prev)
    }

    function dontshow() {
        setIsVisible(!isVisible)

        if (!isVisible) {
            autonotify("Успешно Показан.")
        } else {
            autonotify("Успешно Убран.")
        }

    }
    function changetext() {
        const elements = document.querySelectorAll('.div-gold-container');

        elements.forEach((element) => {
            const elementType = element.querySelector('.type-text');
            const elementSubtype = element.querySelector('.colso');
            const elementPrice = element.querySelector('.type-price');
            const elementTime = element.querySelector('.type-time');
            const subinfo = element.querySelector('.subinfo');
            const typedetskiy = element.querySelector('.type-detskiy');
            const img = element.querySelector('.left-img')

            if (elementType) {
                elementType.innerHTML = props.jippingType;
            }
            if (img) {
                img.style.backgroundImage = `url(${props.jippingimg})`;
            }
            if (elementSubtype) {
                elementSubtype.innerHTML = props.jippingSubtype;
            }
            if (elementPrice) {
                elementPrice.innerHTML = props.jippingPrice;
            }
            if (elementTime) {
                elementTime.innerHTML = props.timejipping;
            }
            if (subinfo) {
                subinfo.innerHTML = props.subinfojipping;
            }
            if (typedetskiy) {
                typedetskiy.innerHTML = props.detskiyjipping;
            }
        })
    }

    function changetextabratna() {

        const elements = document.querySelectorAll('.div-gold-container');

        elements.forEach((element) => {
            const elementType = element.querySelector('.type-text');
            const elementSubtype = element.querySelector('.colso');
            const elementPrice = element.querySelector('.type-price');
            const elementTime = element.querySelector('.type-time');
            const subinfo = element.querySelector('.subinfo');
            const typedetskiy = element.querySelector('.type-detskiy');
            const img = element.querySelector('.left-img')

            if (img) {
                img.style.backgroundImage = `url(${props.img})`;
            }

            if (elementType) {
                elementType.innerHTML = props.type;
            }
            if (elementSubtype) {
                elementSubtype.innerHTML = props.subtype;
            }
            if (elementPrice) {
                elementPrice.innerHTML = props.price;
            }
            if (elementTime) {
                elementTime.innerHTML = props.time;
            }
            if (subinfo) {
                subinfo.innerHTML = props.subinfo;
            }
            if (typedetskiy) {
                typedetskiy.innerHTML = props.detskiy;
            }
        })
    }
    function yaxting() {
        const elements = document.querySelectorAll('.div-gold-container');

        elements.forEach((element) => {
            const elementType = element.querySelector('.type-text');
            const elementSubtype = element.querySelector('.colso');
            const elementPrice = element.querySelector('.type-price');
            const elementTime = element.querySelector('.type-time');
            const subinfo = element.querySelector('.subinfo');
            const typedetskiy = element.querySelector('.type-detskiy');

            const img = element.querySelector('.left-img')
            

            if (img) {
                img.style.backgroundImage = `url(${props.yaxtingImg})`;
            }

            if (elementType) {
                elementType.innerHTML = props.yaxtingType;
            }
            if (elementSubtype) {
                elementSubtype.innerHTML = props.yaxtingSubType;
            }
            if (elementPrice) {
                elementPrice.innerHTML = props.yaxtingPrice;
            }
            if (elementTime) {
                elementTime.innerHTML = props.yaxtingtime;
            }
            if (subinfo) {
                subinfo.innerHTML = props.yaxtingsubinfo;
            }
            if (typedetskiy) {
                typedetskiy.innerHTML = props.yaxtingDetskiy;
            }
        })
    }

    const notify = (text) => toast.error(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const autonotify = (text) => toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });



    const succeschanged = (result) => toast.success(`Вы успешно поменяли тип поездки на ${result}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });



    const setLineStyle = (width, height, background, margin) => {
        const style = {
            width: width,
            height: height,
            background: background,
            margin: margin,
        };

        return style;
    }

    function constcheck(index) {
        const turs = {
            0: "АВТОБУСНЫЙ ТУР",
            1: "ДЖИППИНГ",
            2: "ЯХТИНГ",
        }

        return turs[index] || turs[activIndex];
    }

    const handleSpanClick = (index) => {
        setactivindex(index);

        if (isBlue !== null) {
            const prevSpan = document.querySelector(`.span-${isBlue}`)
            if (prevSpan) {
                prevSpan.style.color = "black";
            }
        }
    
        const currentSpan = document.querySelector(`.span-${index}`)
        if (currentSpan) {
            currentSpan.style.color = "#0499DD"
        }

        if (index === 0) {
            changetextabratna();
            succeschanged(constcheck(index))
        } else if (index === 1) {
            changetext();
            succeschanged(constcheck(index))
        } else if (index === 2) {
            yaxting();
            succeschanged(constcheck(index))
        } else if (index === 3) {
            notify("Данная тип поездки не доступна");
        }
        setBlue(index)

    }

    function clicked(e) {
        const target = e.target;
        target.style.backgroundColor = "#0499DD";
        target.style.color = "snow";
    }
    function off(e) {
        const target = e.target;
        target.style.backgroundColor = "#fff";
        target.style.color = "black";
    }

    return (
        <div className="main-excursion-wrapper">
            <div className="nav">
                <Navigation />
                <br />
                <h1>НАШИ ЭКСКУРСИИ</h1>
            </div>
            <div className="filter-form">
                <div className="spans">
                    <span
                        className={`span-${0} ${activIndex === 0 ? 'active' : ''}`}
                        onClick={() => handleSpanClick(0)}
                    >
                        АВТОБУСНЫЙ ТУР
                    </span>
                    <span
                        className={`span-${1} ${activIndex === 1 ? 'active' : ''}`}
                        onClick={() => handleSpanClick(1)}
                    >
                        ДЖИППИНГ
                    </span>
                    <span
                        className={`span-${2} ${activIndex === 2 ? 'active' : ''}`}
                        onClick={() => handleSpanClick(2)}
                    >
                        ЯХТИНГ
                    </span>
                    <span
                        className={`span-${3} ${activIndex === 3 ? 'active' : ''}`}
                        onClick={() => handleSpanClick(3)}
                    >
                        КАНЬОНИНГ
                    </span>

                </div>
                <div className="div-line">
                    <div className={`line-${activIndex + 1}`} style={setLineStyle("163px", "2px", "#0499DD", `0 ${activIndex * 105}px`)}></div>
                </div>

                <br />
                <div className="divs-for">
                    <div className="div-albaniya">
                        <div className="left"><span>Абхазия</span></div>
                        <div className="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path d="M22.79 14.2396C22.79 10.3901 19.69 7.29012 15.8406 7.29012C11.9911 7.29012 8.89111 10.3901 8.89111 14.2396C8.89111 18.089 15.8406 25.2769 15.8406 25.2769C15.8406 25.2769 22.79 18.089 22.79 14.2396ZM12.6043 14.1033C12.6043 12.3319 14.0691 10.867 15.8406 10.867C17.612 10.867 19.0768 12.2978 19.0768 14.1033C19.0768 15.8747 17.6461 17.3396 15.8406 17.3396C14.0691 17.3396 12.6043 15.8747 12.6043 14.1033Z" fill="#0499DD" />
                            </svg>
                        </div>
                    </div>
                    <div className="div-albaniya">
                        <div className="left"><span>10 ноября 2021</span></div>
                        <div className="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path d="M22.79 14.2396C22.79 10.3901 19.69 7.29012 15.8406 7.29012C11.9911 7.29012 8.89111 10.3901 8.89111 14.2396C8.89111 18.089 15.8406 25.2769 15.8406 25.2769C15.8406 25.2769 22.79 18.089 22.79 14.2396ZM12.6043 14.1033C12.6043 12.3319 14.0691 10.867 15.8406 10.867C17.612 10.867 19.0768 12.2978 19.0768 14.1033C19.0768 15.8747 17.6461 17.3396 15.8406 17.3396C14.0691 17.3396 12.6043 15.8747 12.6043 14.1033Z" fill="#0499DD" />
                            </svg>
                        </div>
                    </div>
                    <div className="div-albaniya">
                        <div className="left"><span>5 человек</span></div>
                        <div className="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path d="M22.79 14.2396C22.79 10.3901 19.69 7.29012 15.8406 7.29012C11.9911 7.29012 8.89111 10.3901 8.89111 14.2396C8.89111 18.089 15.8406 25.2769 15.8406 25.2769C15.8406 25.2769 22.79 18.089 22.79 14.2396ZM12.6043 14.1033C12.6043 12.3319 14.0691 10.867 15.8406 10.867C17.612 10.867 19.0768 12.2978 19.0768 14.1033C19.0768 15.8747 17.6461 17.3396 15.8406 17.3396C14.0691 17.3396 12.6043 15.8747 12.6043 14.1033Z" fill="#0499DD" />
                            </svg>
                        </div>
                    </div>
                    <button className='btn-blue' onClick={(e) => {
                        dontshow()
                        const target = e.target;
                        if (!isVisible) {
                            target.innerHTML = 'Убрать.'
                        } else {
                            target.innerHTML = 'Показать.'
                        }

                    }}>Показать</button>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>

            <div className="avtobus">

                <div className="left">
                    <Heading size={3}>Фильтры</Heading>
                    <ExcursionItem size={2.5}>Стоимость</ExcursionItem>

                    <br />
                    <div className="all-derjatel" style={{ display: 'flex' }}>
                        <div className="prices">
                            <div
                                className="div-price"
                                onClick={clicked}
                                onDoubleClick={off}
                            >
                                1 600
                            </div>
                            <div
                                className="div-priceaksiya"
                                onClick={clicked}
                                onDoubleClick={off}
                            >
                                4 000
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="get-up">
                        <ExcursionItem size={2.5}>Количество человек</ExcursionItem>
                        <div className="cheloveks" style={{ display: 'flex' }}>
                            <div className="mans">
                                <div
                                    className="div-price"
                                    onClick={clicked}
                                    onDoubleClick={off}
                                >
                                    1 чел.
                                </div>

                            </div>
                            <div className="mans">
                                <div
                                    className="div-price"
                                    onClick={clicked}
                                    onDoubleClick={off}
                                >
                                    2 чел.
                                </div>
                            </div>
                            <div className="mans">
                                <div
                                    className="div-price"
                                    onClick={clicked}
                                    onDoubleClick={off}
                                >
                                    3 чел.
                                </div>
                            </div>
                            <div className="mans">
                                <div
                                    className="div-price"
                                    onClick={clicked}
                                    onDoubleClick={off}
                                >
                                    4 чел.
                                </div>
                            </div>
                            <div className="mans">
                                <div
                                    className="div-price"
                                    onClick={clicked}
                                    onDoubleClick={off}
                                >
                                    5+ чел
                                </div>
                            </div>
                        </div>
                    </div>
                    <ExcursionItem size={2.5}>Место</ExcursionItem>
                    <br />

                    <div className="radios-input">
                        <input type='radio' /><br /> <span>Абхазия</span>
                        <input type='radio' /><br /> <span>Подводный мир</span>
                        <input type='radio' /><br /> <span>Адлер</span>
                        <input type='radio' /><br /> <span>Сочи</span>
                        <input type='radio' /><br /> <span>Красная поляна</span>
                    </div>
                    <br />
                    <ExcursionItem size={2.5}>Длительность</ExcursionItem>
                    <br />
                    <hr />
                    <ExcursionItem size={2.5}>Дата</ExcursionItem>
                    <br />
                    <hr />
                </div>


                <div className="div-golds" style={{ display: isVisible ? 'block' : 'none' }}>
                    <div className="heading-here">
                        <Heading size={2}>Наши туры</Heading>
                    </div>
                    <div className="div-gold-container">
                        <div
                            className="left-img"
                            style={{
                                background: `url(${props.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <div className="right-abxazia">
                            <div className="texts-abxazia">
                                <span className='type-text'>{props.type}</span>
                                <br />
                                <span className="colso">{props.subtype}</span>
                            </div>
                            <div className="price-and-others">
                                <span className='type-price'>{props.price}</span>
                                <span className='type-detskiy'>{props.detskiy}</span>
                                <span className='type-time'>{props.time}</span>
                                <br />
                                <div className="detskiy-and-vzrosliy">
                                    <p>{props.biletdets}</p>
                                    <p>{props.biletvzros}</p>
                                </div>
                            </div>
                            <div className="last-ex">
                                <div className="lines-nabarot"></div>
                                <span className="subinfo">{props.subinfo}</span>
                            </div>
                            <br />
                            <div className="btns">
                                <Link to={"/allexcursion"}>
                                    <button className='btn-blue'>Подробнее</button>
                                </Link>
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

                    <div className="div-gold-container">
                        <div
                            className="left-img"
                            style={{
                                background: `url(${props.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <div className="right-abxazia">
                            <div className="texts-abxazia">
                                <span className='type-text'>{props.type}</span>
                                <br />
                                <span className="colso">{props.subtype}</span>
                            </div>
                            <div className="price-and-others">
                                <span className='type-price'>{props.price}</span>
                                <span className='type-detskiy'>{props.detskiy}</span>
                                <span className='type-time'>{props.time}</span>
                                <br />
                                <div className="detskiy-and-vzrosliy">
                                    <p>{props.biletdets}</p>
                                    <p>{props.biletvzros}</p>
                                </div>
                            </div>
                            <div className="last-ex">
                                <div className="lines-nabarot"></div>
                                <span className="subinfo">{props.subinfo}</span>
                            </div>
                            <br />
                            <div className="btns">
                                <Link to={"/allexcursion"}>
                                    <button className='btn-blue'>Подробнее</button>
                                </Link>
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

                    <div className="div-gold-container">
                        <div
                            className="left-img"
                            style={{
                                background: `url(${props.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <div className="right-abxazia">
                            <div className="texts-abxazia">
                                <span className='type-text'>{props.type}</span>
                                <br />
                                <span className="colso">{props.subtype}</span>
                            </div>
                            <div className="price-and-others">
                                <span className='type-price'>{props.price}</span>
                                <span className='type-detskiy'>{props.detskiy}</span>
                                <span className='type-time'>{props.time}</span>
                                <br />
                                <div className="detskiy-and-vzrosliy">
                                    <p>{props.biletdets}</p>
                                    <p>{props.biletvzros}</p>
                                </div>
                            </div>
                            <div className="last-ex">
                                <div className="lines-nabarot"></div>
                                <span className="subinfo">{props.subinfo}</span>
                            </div>
                            <br />
                            <div className="btns">
                                <Link to={"/allexcursion"}>
                                    <button className='btn-blue'>Подробнее</button>
                                </Link>
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

                    <div className="div-gold-container">
                        <div
                            className="left-img"
                            style={{
                                background: `url(${props.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <div className="right-abxazia">
                            <div className="texts-abxazia">
                                <span className='type-text'>{props.type}</span>
                                <br />
                                <span className="colso">{props.subtype}</span>
                            </div>
                            <div className="price-and-others">
                                <span className='type-price'>{props.price}</span>
                                <span className='type-detskiy'>{props.detskiy}</span>
                                <span className='type-time'>{props.time}</span>
                                <br />
                                <div className="detskiy-and-vzrosliy">
                                    <p>{props.biletdets}</p>
                                    <p>{props.biletvzros}</p>
                                </div>
                            </div>
                            <div className="last-ex">
                                <div className="lines-nabarot"></div>
                                <span className="subinfo">{props.subinfo}</span>
                            </div>
                            <br />
                            <div className="btns">
                                <Link to={"/allexcursion"}>
                                    <button className='btn-blue'>Подробнее</button>
                                </Link>
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
                    <div className="divs-num">
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none" onClick={() => {
                            const span1 = document.querySelector(`.span1`)
                            const span2 = document.querySelector(`.span2`)
                            const span3 = document.querySelector(`.span3`)

                            if (counter === 1) {
                                if (span3) span3.style.color = 'black'
                                if (span2) span2.style.color = 'black'
                            } else if (counter === 2) {
                                if (span2) span2.style.color = 'black'
                                if (span3) span3.style.color = 'black'
                            } else if (counter === 3) {
                                if (span3) span3.style.color = 'black'
                                if (span1) span1.style.color = 'black'
                            }               
                            handleSpanClick(1 - counter)

                            if (counter <= 3) {
                                const spanMain = document.querySelector(`.span${counter}`)
                                if (spanMain) spanMain.style.color = '#0499DD'
                            }

                            setCounter((prevCounter) => (prevCounter % 3) - 1)


                        }}>
                            <path d="M4 7L1 4L4 1" stroke="black" strokeLinecap="round" />
                        </svg>
                        <span className="span1"> 2 </span>
                        <span className="span2">... 3 </span>
                        <span className="span3"> 4 </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="8" viewBox="0 0 5 8" fill="none" onClick={() => {
                            const span1 = document.querySelector(`.span1`)
                            const span2 = document.querySelector(`.span2`)
                            const span3 = document.querySelector(`.span3`)
                            if (counter === 1) {
                                if (span2) span2.style.color = 'black'
                                if (span3) span3.style.color = 'black'
                            } else if (counter === 2) {
                                if (span3) span3.style.color = 'black'
                                if (span1) span1.style.color = 'black'
                            } else if (counter === 3) {
                                if (span1) span1.style.color = 'black'
                                if (span2) span2.style.color = 'black'
                            }                            
                            handleSpanClick(counter)
                            if (counter <= 3) {
                                const spanMain = document.querySelector(`.span${counter}`)
                                if (spanMain) spanMain.style.color = '#0499DD'
                            }

                            setCounter((prevCounter) => (prevCounter % 3) + 1)  
                        }} >
                            <path d="M1 7L4 4L1 1" stroke="black" stroke-linecap="round"/>

                        </svg>
                    </div>

                </div>

            </div>

            <br />
            <Footer />
        </div >
    );
}

export default ExcursionAbout;
