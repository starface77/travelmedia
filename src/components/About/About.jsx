import Heading from '../common/Heading';
import './style.scss'
function About() {
    return (
        <div className="about-wrapper">
            <div className="about-img">
                <div className="div-text">
                    <div className="texts-about">
                    <Heading className="heading-syeb" size={3}>О нас</Heading>
                        <br />
                        <span>PeroTravel - Первый онлайн-сервис по бронированию экскурсий без очередей и операторов. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        <br />
                        <br />
                        <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;