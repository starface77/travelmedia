import { useState } from "react";
import Heading from "../common/Heading";
import "./style.scss"
import { json } from "react-router";
function Auth() {
    const [theme, setTheme] = useState("🌆")
    function ChangeTheme() {
        const maindiv = document.querySelector(".main-component")
        const form1 = document.querySelector("form")
        setTheme(prevTheme => (prevTheme === "🌆" ? "🌄" : "🌆"))
        if(theme === "🌆") {
            maindiv.style.backgroundColor = "#090909b1"
        } else {
            maindiv.style.backgroundColor = "#FFF"
        }
    }
    return (
        <div className="auth-wrapper">
            <div className="main-component">
                <div className="icon-theme">
                    <p className="theme-change" onClick={ChangeTheme}>{theme}</p>
                </div>
                <div className="div-for-all">
                    <form>
                        <Heading>Login/Auth</Heading>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Username" />
                        <br />
                        <button className="btn-blue">Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;