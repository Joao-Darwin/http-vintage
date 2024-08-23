import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ image, code }) => {
    const nativate = useNavigate();

    return (
        <div className="card" onClick={() => nativate(`/status/${code}`)}>
            <img className="image" src={image} alt={`Status code ${code} image`} />
            <div className="divCode">
                <h2>{code}</h2>
            </div>
        </div>
    )
}

export default Card;