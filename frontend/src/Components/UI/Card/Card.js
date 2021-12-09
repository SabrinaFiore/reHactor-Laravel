import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
    // console.log("card", props)
    return (
        <div className="card-game">
            <img src={props.image} alt="test" />
            <p>{props.name}</p>
            <Link to={`/game/${props.slug}`}>
                {/* DOESN'T WORK: <i className="fas fa-chevron-down text-white"></i> */}
                <span className="text-white text-decoration-none mt-1"> &gt; </span>
            </Link>
            <div></div>
            <div></div>
        </div>
    );
}
