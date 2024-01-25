import { useEffect, useState } from "react";
import Heading from "../common/Heading";
import "./style.scss"
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Nav";

function Favorites() {
    const [travelList, setTravelList] = useState([]);
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const storedBookingDetails = JSON.parse(localStorage.getItem("bookingDetails"))
    
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear()
        const hours = currentDate.getHours()
        const formattedDate = `${year} : ${month}1 : ${day} : ${hours}`
    
        localStorage.setItem('createdyear', formattedDate)
    
        if (storedBookingDetails) {
            setTravelList([storedBookingDetails])
        }
    }, []);
    

    function funcchecker() {
        const votnu = document.querySelector('.izbaranno');
        const storedItem = localStorage.getItem("avtobus");
        if (!storedItem || storedItem === "") {
            votnu.innerHTML = "Ничего избранного..."
        } else {
            votnu.innerHTML = storedItem
        }
    }


    return (
        <div className="favorites-component">
            <div className="nav">
                <Navigation />
                <marquee >
                    <span className="span1">INFO:</span><span >Можно бронировать тур только 1 раз!</span>
                </marquee>
            </div>
            <br />
            <div className="favorites-list">
                <div className="liked-travels">
                    <Heading size={2}>Бронированные туры</Heading>

                    {travelList.map((booking, index) => (
                        <div key={index}>
                            <p>Дата который вы бронировали: {localStorage.getItem("createdyear")}</p>
                            <div>
                                <p>Дата: {booking.date}</p>

                            </div>
                            <br />
                            <div>
                                <p>Количество взрослых: {booking.vzrosliy}</p>
                            </div>
                            <br />
                            <div>
                                <p>Количество детей: {booking.deti}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
                <div className="favorites-all">
                    <Heading size={2}>Все Избранного вами: </Heading>

                    <hr />
                    <br />
                    <button className="btn-blue" onClick={funcchecker}>Обновить</button> <br />
                    <span className="izbaranno" ></span>

                </div>
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default Favorites;
