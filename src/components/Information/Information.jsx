import Heading from "../common/Heading";
import passport from "../../assets/pasport 1.png"
import "./Information.scss"

function Information() {
    return (
        <div className="information-wrapper">
            <Heading size={2}>Важная информация</Heading>
            <br />
            <div className="info-container">
                <span>При пересечении границы (Россия-Абхазия) при себе иметь:</span>

                <div className="left">
                    <div className="images">
                        <img src={passport} />
                        <Heading size={3}>Паспорт гражданина РФ</Heading>
                    </div>
                    <br />
                    <div className="images">
                        <img src={passport} />
                        <Heading size={3}>Гражданам до 14 лет свидетельство о рождении</Heading>
                    </div>
                    <br />
                    <p>Несовершеннолетние дети пересекают границу в сопровождении родителей,<br /> в сопровождении законного представителя (нотариально заверенная доверенность <br /> с указанием страны вывоза ребенка).</p>

                </div>

                <div className="right">
                    <div className="container">
                        <p>Иностранным гражданам въезд в Абхазию <b>ограничен</b>, кроме граждан Украины, республик ДНР и ЛНР.</p>
                    </div>
                    <div className="container">
                        <p>При возвращении из Абхазии в Россию сдавать ПЦР-тест не нужно, на карантин помещать не будут (Постановление Правительства РФ 1996-Р от 01.08.2020).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;