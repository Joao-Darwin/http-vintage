import "./Card.css";

const Card = ({ image, statusCode }) => {
    return (
        <div className="card">
            <img className="image" src={image} alt={`Status code ${statusCode} image`} />
            <div className="divStatusCode">
                <h2>{statusCode}</h2>
            </div>
        </div>
    )
}

export default Card;