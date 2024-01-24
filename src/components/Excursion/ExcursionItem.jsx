import React from 'react';
import './style.scss';

function ExcursionItem(props) {
    return (
        <div className="item">
            <div className="wrapper">
                <div className="derjatel" id={props.ide}>
                    <div className="left">
                        <img src={props.img} alt="Excursion" style={{ width: '75px', height: '74px' }} />
                    </div>
                    <div className="text-go">
                        <div className="container-about">
                            <span className="typer">{props.type}</span>
                            <br />
                            <span>{props.subtype}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExcursionItem;