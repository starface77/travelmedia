import { useState } from "react";
import Heading from "../common/Heading";
import "./style.scss"
import { json } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import Navigation from "../Navigation/Nav";
function Auth() {
    const [theme, setTheme] = useState("🌆")
    function ChangeTheme() {
        const maindiv = document.querySelector(".main-component")
        const form1 = document.querySelector("form")
        setTheme(prevTheme => (prevTheme === "🌆" ? "🌄" : "🌆"))
        if (theme === "🌆") {
            maindiv.style.backgroundColor = "#090909b1"
            notifydarksucces("🌆 | Вы успешно поменяли тему на чёрную!")
        } else {
            maindiv.style.backgroundColor = "#FFF"
            notifysucces("🌄 | Вы успешно поменяли тему на белую!")
        }
    }
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
    const notifydarksucces = (text) => toast.success(text, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    function saveuserinfo(e) {
        e.preventDefault()
        const elementsharam = /[!@#$']/
        const username = document.getElementById("username").value
        const email = document.getElementById("email").value
        const number = document.getElementById("number").value

        if (elementsharam.test(username) || elementsharam.test(email) || elementsharam.test(number)) {
            notifydarksucces("В тексте запрещено использовать плохие буквы!");
        } else {
            notifysucces("Успешно!");
            localStorage.setItem('Username', JSON.stringify(username))
            localStorage.setItem('Email', JSON.stringify(email))
            localStorage.setItem('Number', JSON.stringify(number))
        }
        

    }
    return (
        <div className="auth-wrapper">
            <ToastContainer />
            <video id="bgplayvideo" src="https://pero-travel.netlify.app/video/video2.mp4" autoPlay loop muted>
            </video>
            <div className="main-component">
                <div className="icon-theme">
                    <p className="theme-change" onClick={ChangeTheme}>{theme}</p>
                </div>
                <div className="div-for-all">
                    <form>
                        <Heading>Login/Auth</Heading>
                        <input type="text" id="username" placeholder="Username" />
                        <input type="email" id="email" placeholder="Email" />
                        <input type="number" id="number" placeholder="Number Phone" />
                        <br />
                        <button className="btn-blue" onClick={saveuserinfo}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;