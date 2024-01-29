import { useEffect, useState } from "react";
import Heading from "../common/Heading";
import "./style.scss"
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Nav";
import usericon from "../../assets/user-profile.png"
import { Head } from "react-axios";
import { ToastContainer, toast } from "react-toastify";

function Favorites() {
    const [travelList, setTravelList] = useState([]);
    const [counter, setCounter] = useState(0)
    const notifysucces = (text) => toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
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
    }, [])

    function DeleteInfo() {
        localStorage.setItem("Username", "Удалено")
        localStorage.setItem("Email", "Удалено")
        localStorage.setItem("Number", "Удалено")
        setTimeout(() => {
            window.location.reload()
        }, 3000)
        notifysucces("Через 3 секунды все информации о вас будет удалены!")
    }


    function funcchecker() {
        const votnu = document.querySelector('.izbaranno');
        const storedItem = localStorage.getItem("avtobus");
        if (!storedItem || storedItem === "") {
            votnu.innerHTML = "Ничего избранного..."
        } else {
            votnu.innerHTML = storedItem
        }
    }
    const username = localStorage.getItem("Username")
    const email = localStorage.getItem("Email")
    const number = localStorage.getItem("Number")

    return (
        <div className="favorites-component">
            <ToastContainer />
            <div className="nav">
                <Navigation />

            </div>
            <div className="user-icon">
                <div className="icon">
                    <img src={usericon} width="50px" height="50px" />
                    <p>Имя пользователя: {username}</p>
                </div>
                <br />
                <div className="more">
                    <div className="diver">
                        <Heading size={2}>Почта/Email</Heading>
                        <p>{email}</p>
                    </div>
                    <br />
                    <div className="diver">
                        <Heading size={2}>Номер/Number</Heading>
                        <p>{number}</p>
                    </div>
                    <button className="btn-blue" onClick={DeleteInfo}>Удалить аккаунт</button>
                </div>
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
            <marquee >
                <span className="span1">INFO:</span><span >Можно бронировать тур только 1 раз!</span>
            </marquee>
            <Footer />
        </div>
    );
}

export default Favorites;
