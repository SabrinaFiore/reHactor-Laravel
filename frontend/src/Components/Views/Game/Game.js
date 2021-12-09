/* eslint-disable jsx-a11y/anchor-has-content */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../UI/Loader/Loader";
import { ConfigContext } from "../../../Contexts/Config";

export default function Game() {

    let {slug} = useParams();

    let { api_urls, api_secrets } = useContext(ConfigContext)

    const [game, setGame] = useState(null);

    useEffect(() => {
        fetch(`https://api.rawg.io/api/games/${slug}?&key=c2bb099076634fcd95738d7e0ec1cf38`)
        // fetch(`${api_urls.games}/api/games/${slug}?&$key=${api_secrets.games}`)
        .then((response) => response.json())
        .then((data) => {
            setGame(data);
            console.log(data);
        });
    }, []);

    return (
        <>
            { game ? (
                <div className="cointainer-fluid pt-5 min-vh-100" 
                    style={{ background: `linear-gradient(rgba(33, 33, 33, 1), rgba(33, 33, 33, 0.8), rgba(33, 33, 33, 1)), 
                        url(${game.background_image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div className="container text-white">
                        <div className="row mt-5">
                            <div className="col-12">
                                <h1>{game.name}</h1>
                                <p className="small">Developed by {game.developers[0].name}</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-12 col-md-6">
                                {game.description_raw}
                            </div>
                            <div className="col-12 col-md-6">
                                <img className="img-fluid" 
                                    src={game.background_image} 
                                    alt={game.name}
                                />
                            </div>
                        </div>
                        <div className="row mt-5">
                            <h3>Generes</h3>
                            <div className="d-flex">
                                { game.genres.map(el => 
                                    <Link 
                                        key={el.id} to={`/search/${el.slug}/1`}
                                        className="text-decoration-none mt-1">
                                        <button className="btn btn-small btn-outline-info rounded-0 px-5 mx-1">{el.name}</button>
                                    </Link>
                                    ) 
                                }
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-12 col-md-4 col-lg-3 mb-5">
                                <p className="h4 text-main">Informations</p>
                                <div className="mb-3">
                                    <p className="small mb-0">WEBSITE</p>
                                    <p className="ms-3 mb-0">
                                        <i className="fal fa-level-up fa-rotate-90 text-main me-3"></i>
                                        {/* SHOLD BE A LINK FROM react-router-dom */}
                                        <a className="text-decoration-none text-white" href={game.website}></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : <Loader/> }
        </>
    );
}
  