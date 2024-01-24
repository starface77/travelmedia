import Heading from "../common/Heading";
import ReviewComponent from "./ReviewComponent";
import ReviewJsoner from "../../db/review.json"
import "./style.scss"
import Slider from "react-slick/lib/slider";

function ReviewJson() {
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <div className="review-json">

            <Heading size={2}>Отзывы</Heading>

            <Slider {...sliderSettings}>
                {ReviewJsoner.map((item, index) => (
                    <ReviewComponent
                        key={index}
                        name={item.name}
                        textreview={item.textreview}
                        img={item.img}
                        id={item.idperson}
                    />
                ))}
            </Slider>
        </div>
    );
}

export default ReviewJson;