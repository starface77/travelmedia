import { useState } from "react";
import Heading from "../common/Heading";
import './style2.scss'

function Calendar() {
    const [counter, setCounter] = useState(0);
    function dater(e) {
        return new Date().getFullYear()
    }
    const listofdate = [
        `Январь ${dater()}`,
        `Февраль ${dater()}`,
        `Март ${dater()}`,
        `Апрель ${dater()}`,
        `Май ${dater()}`,
        `Июнь ${dater()}`,
        `Июль ${dater()}`,
        `Август ${dater()}`,
        `Сентябрь ${dater()}`,
        `Октябрь ${dater()}`,
        `Ноябрь ${dater()}`,
        `Декабрь ${dater() + counter + 1}`
    ]
   
    
    const [currentMonth, setCurrentMonth] = useState(`Ноябрь 2024`);

    const goleft = () => {
        setCounter((prevCounter) => (prevCounter + 1) % listofdate.length);
        setCurrentMonth(listofdate[(counter + 1) % listofdate.length]);
    }

    const goright = () => {
        setCounter((prevCounter) =>
            prevCounter === 0 ? listofdate.length - 1 : prevCounter - 1
        );
        setCurrentMonth(listofdate[counter === 0 ? listofdate.length - 1 : counter - 1]);
    }
    return (
        <div className="about-wrapper">
            <div className="about-img">
                <div className="div-text">
                    <div className="texts-about2">
                        <Heading className="heading-syeb" size={2}><svg xmlns="http://www.w3.org/2000/svg" className="svg1" onClick={goleft} width="11" height="19" viewBox="0 0 11 19" fill="none">
                            <path d="M10 1.5L1.5045 9.05155C1.23599 9.29023 1.23599 9.70977 1.5045 9.94845L10 17.5" stroke="#0499DD" stroke-width="2" stroke-linecap="round" />
                        </svg>  {currentMonth}  <svg xmlns="http://www.w3.org/2000/svg" className="svg2" onClick={goright} width="11" height="19" viewBox="0 0 11 19" fill="none">
                                <path d="M0.999999 1.5L9.4955 9.05155C9.76401 9.29023 9.76401 9.70977 9.4955 9.94845L0.999999 17.5" stroke="#0499DD" stroke-width="2" stroke-linecap="round" />
                            </svg></Heading>
                        <br />
                        <div className="dates">
                            <span>ПН</span>
                            <span>ВТ</span>
                            <span>СР</span>
                            <span>ЧТ</span>
                            <span>ПТ</span>
                            <span>СБ</span>
                            <span>ВС</span>
                        </div>
                        <br />
                        <div className="numbers">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>

                            <span>10</span>
                            <span>11</span>
                            <span>12</span><br />
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span>12</span><br />
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span>12</span><br />
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span>12</span><br />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calendar;