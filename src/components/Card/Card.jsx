import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ image, statusCode }) => {
    const nativate = useNavigate();

    return (
        <div className="card" onClick={() => nativate(`/status/${statusCode}`)}>
            <img className="image" src={image} alt={`Status code ${statusCode} image`} />
            <div className="divStatusCode">
                <h2>{statusCode}</h2>
            </div>
        </div>
    )
}

export default Card;