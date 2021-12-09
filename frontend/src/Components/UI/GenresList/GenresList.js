import { Link } from "react-router-dom";
import "./GenresList.css";

export default function GenresList(props) {
    return (
        <div className="genres-wrapper">
            {props.data.map( genre => 
                <Link key={genre.id} to={`/search/${genre.slug}/1`} className="text-decoration-none">
                    <button
                        className="btn btn-outline-info rounded-0 d-block w-100 mt-2 text-start">
                        {genre.name}
                    </button>
                </Link>
            )}
        </div>
    );
}
