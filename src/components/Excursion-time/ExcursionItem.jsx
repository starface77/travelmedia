import { useState } from 'react';
import './style.scss';

function ExcursionItem(props) {
    const [display, setDisplay] = useState(props.display || 'none');
    const [isRotate, setRotate] = useState(false);

    const fontSize = {
        fontSize: `calc(48px / ${props.size})`,
        color: props.color ? props.color : "",
        filter: props.color ? "grayscale(100%)" : "",
    };

    const handleClick = () => {
        setDisplay(display === 'none' ? 'flex' : 'none');
    }
    const handleRotate = (e) => {
        const target = e.target;
        setRotate(!isRotate);
        target.style.transform = isRotate ? 'rotate(0deg)' : 'rotate(90deg)';
    }

    return (
        <div className="excursion-wrapper">
            <b style={fontSize} onClick={handleClick}>
                {props.children}
                <div
                    className="lineplus"
                    onClick={handleClick}
                ></div>
                <div
                    className="lineplus2"
                    onClick={handleRotate}
                ></div>
            </b>

        </div>
    );
}

export default ExcursionItem;
