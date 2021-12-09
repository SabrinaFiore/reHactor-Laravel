import "./Search.css";
import { useEffect, useState } from "react";
import GenresList from "../../UI/GenresList/GenresList";
import Card from "../../UI/Card/Card";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../../UI/Loader/Loader";

export default function Search() {

    const [genres, setGenres] = useState(null);
    const [games, setGames] = useState(null);
    const [searched, setSearched] = useState("");
    
    let {genre} = useParams();
    let {num} = useParams();

    useEffect(() => {
        fetch('https://api.rawg.io/api/genres?&key=c2bb099076634fcd95738d7e0ec1cf38')
        .then((response) => response.json())
        .then((data) => {
            setGenres(data.results);
            console.log(genre, num);
        });
    }, []);

    useEffect(() => {
        setGames(null);
        fetch(`https://api.rawg.io/api/games?&key=c2bb099076634fcd95738d7e0ec1cf38&genres=${genre}&page=${num}&page_size=12`)
        .then(response => response.json()
        .then(data => 
            // console.log(response)
            setGames(data.results)
        ));
    }, [genre, num]);

    useEffect(() => {
        if (searched.length > 4) {
            fetch(`https://api.rawg.io/api/games?&key=c2bb099076634fcd95738d7e0ec1cf38&page_size=24&search=${searched}&search_precise=true`)
            .then(response => response.json()
            .then(data => 
                // console.log(data)
                setGames(data.results)
        ));
       }
    }, [searched]);

    return (<> 
        <div className="container-fluid my-5 py-5 min-vh-100 bg-info">
            <div className="row my-5">
                <div className="col-12 col-md-3 col-lg-2">{ genres && <GenresList data={genres} />}</div>
                <div className="col-12 col-md-3 col-lg-10">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="input-group mb-3">
                                <input type="text"
                                    className="form-control bg-transparent border-0 border-bottom border-info rounded-0 text-white"
                                    placeholder="Search by name"
                                    onChange={(ev) => setSearched(ev.target.value)}
                                    value={searched}
                                />
                                <button className="btn border-0" type="button">
                                    <span className="text-white text-decoration-none mt-1 text-main"> &gt; </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    { !searched && (
                        <div className="row justify-content-between text-white mb-2">
                            <div className="col-2">
                                { num > 1 ? <Link to={`/search/${genre}/${+num - 1}`} className="text-decoration-none text-white dt font-sourceSansPro">&lt; Prev</Link> : " " }
                            </div>
                            <div className="col-2">
                                <Link to={`/search/${genre}/${+num + 1}`} className="text-decoration-none text-white dt font-sourceSansPro">Go Next &gt;</Link>
                                <p className="text-white">Page number {num}</p>
                            </div>
                        </div>
                    )}
                    <div className="row">
                        { games ? ( games.map(game => 
                            <div key={game.id} className="col-12 col-md-6 col-lg-4 mb-5">
                                <Card 
                                    image={game.background_image} 
                                    name={game.name} 
                                    slug={game.slug}
                                />
                            </div>)) : ( <Loader/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </>);
}
  