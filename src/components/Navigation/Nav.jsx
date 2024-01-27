import { useState } from "react";
import Auth from "../Auth/Auth";
import "./style.scss"

function Navigation() {
    const [isRegistrationVisible, setRegistrationVisible] = useState("none")
    function openreg() {
        setRegistrationVisible(isRegistrationVisible("flex"))
    }
    return (
        <div className="nav-wrapper">
            <div className="left">
                <img src='' />
            </div>
            <div className="right">
                <a href='/'>
                    Главная
                </a>

                <a href='/excursion'>
                    Экскурсии
                </a>
                <a href='/Personal'>
                    Личный кабинет
                </a>
                <a href='/' className="auth">
                    Регистрация
                </a>

            </div>
          
        </div>
    );
}

export default Navigation;