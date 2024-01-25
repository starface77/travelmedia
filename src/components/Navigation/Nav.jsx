import "./style.scss"

function Navigation() {
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
             
            </div>
        </div>
    );
}

export default Navigation;