import React from 'react';
import ExcursionAbout from "./Excursioner";
import ExcursionData from "../../db/jrexcursion.json";
import Heading from "../common/Heading";

function ExcursionItemer() {
    return (
        <div className="main-wrapper-excursion">
            {ExcursionData.map((item, index) => (
                <ExcursionAbout
                    key={index}
                    ide={item.ide}
                    type={item.type}
                    subtype={item.subtype}
                    price={item.price}
                    time={item.time}
                    detskiy={item.detskiy}
                    subinfo={item.subinfo}
                    biletdets={item.biletdets}
                    biletvzros={item.biletvzros}
                    img={item.img}

                    jippingimg={item.imgjipping}
                    jippingType={item.typejipping}
                    jippingSubtype={item.subtypejipping}
                    jippingPrice={item.pricejipping}
                    detskiyjipping={item.detskiyjipping}
                    timejipping={item.timejipping}
                    subinfojipping={item.subinfojipping}

                    yaxtingImg={item.yaxtingimg1}
                    yaxtingType={item.yaxting}
                    yaxtingSubType={item.subtypeyaxting}
                    yaxtingPrice={item.priceyaxting}
                    yaxtingDetskiy={item.detskiyjipping}
                    yaxtingtime={item.timeyaxting}
                    yaxtingsubinfo={item.subinfoyaxting}
                />
                
            ))}
        </div>
    );
}

export default ExcursionItemer;
