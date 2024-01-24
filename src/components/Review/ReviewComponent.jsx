import "./style.scss"

function ReviewComponent(props) {
    return (
        <div className="review-json">
            <div className="review-wrapper">
                <div className="main-container">
                    <div className="last-component" id={props.id}>
                        <div className="left">
                            <img src={props.img} />
                        </div>
                        <div className="right">
                            <span><b>{props.name}</b></span>
                            <br />
                            <br />

                            <span>{props.textreview}</span>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default ReviewComponent;