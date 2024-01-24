import "./style.scss"

function Heading(props) {
    const fontSize = {
        fontSize: `calc(48px / ${props.size})`,
        color: props.color ? props.color : "",
        filter: props.color ? "grayscale(100%)" : "",
    }
    return (
        <div className="heading-wrapper">
            <b style={fontSize}>
                {props.children}
            </b>
           
        </div>
    );
}

export default Heading;