import Heading from "../common/Heading";
import Excursion from "../../db/excursion.json";
import ExcursionItem from "./ExcursionItem";

function ExcursionComponent() {
    return (
        <div className="excursion-wrapper">

            <Heading size={2}>Виды экскурсий</Heading>
            {Excursion.map((item, index) => (
                <ExcursionItem
                    key={index}
                    id={item.id}
                    type={item.type}
                    title={item.title}
                    subtitle={item.subtitle}
                    time={item.time}
                    price={item.price}
                    link={item.link}
                    image={item.image}
                />
            ))}
        </div>
    );
}

export default ExcursionComponent;