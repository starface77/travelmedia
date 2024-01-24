import Heading from "../common/Heading";
import "./Expenses.scss"

function Expenses() {
    return (
        <div className="expenses-wrapper">
            <div className="expenses-container">
                <Heading size={2}>Дополнительные расходы (по желанию)</Heading>
                <div className="right">

                    <div className="fon-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <circle cx="28.5" cy="28.5" r="28.5" fill="#FFC700" />
                        </svg>

                        <div className="money-container">
                            <Heading size={2.5}>1 618 ₽</Heading>
                            <p>Дача Сталина</p>
                        </div>
                    </div>
                    <div className="fon-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <circle cx="28.5" cy="28.5" r="28.5" fill="#FFC700" />
                        </svg>
                        <div className="money-container">
                            <Heading size={2.5}>1 412 ₽</Heading>
                            <p>Молочный водопад</p>
                        </div>
                    </div>
                    <div className="fon-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <circle cx="28.5" cy="28.5" r="28.5" fill="#FFC700" />
                        </svg>
                        <div className="money-container">
                            <Heading size={2.5}>500 ₽</Heading>
                            <p>Молочный водопад</p>
                        </div>
                    </div>

                    <div className="fon-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <circle cx="28.5" cy="28.5" r="28.5" fill="#FFC700" />
                        </svg>
                        <div className="money-container">
                            <Heading size={2.5}>500 ₽</Heading>
                            <p>Термальный источник</p>
                        </div>
                    </div>

                    <div className="fon-img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
                            <circle cx="28.5" cy="28.5" r="28.5" fill="#FFC700" />
                        </svg>
                        <div className="money-container">
                            <Heading size={2.5}>Обед</Heading>
                            <p>1000 ₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expenses;