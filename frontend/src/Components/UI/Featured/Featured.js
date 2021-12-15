import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Featured() {

    const [featured, setFeatured] = useState(null);

    useEffect(() => {
        fetch('https://api.rawg.io/api/games?dates=2021-01-01,2021-12-31&ordering=-rating&key=c2bb099076634fcd95738d7e0ec1cf38')
        .then(response => response.json())
        .then(data => {
            // Home page displayed cards
            console.log(data.results.slice(0, 4));
            setFeatured(data.results.slice(0, 4));
        });
    }, []);

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    {featured && featured.map((el) => {
                        return (
                            <div key={el.id} className="col-12 col-md-6 col-lg-3">
                                <Card 
                                    image={el.background_image} 
                                    name={el.name} 
                                    slug={el.slug}
                                ></Card>
                                <div className="card bg-transparent">
                                    <div className="card-body">
                                        <Link to={`/game/${el.slug}`}>{el.name}</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}