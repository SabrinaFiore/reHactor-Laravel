/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../Contexts/Auth";

export default function NavBar() {

    const {user} = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow fixed-top bg-dark">
            <div className="container-fluid">
                <Link className="text-decoration-none font-sourceSansPro text-main" to="/">
                    ReHacktor
                </Link>

                <div className="navLogo"></div>
                
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/search/action/1">Search</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/">Features</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/sign">Sign</Link>
                        </li>

                        { user && (
                            <li className="nav-item">
                                User: {user.username}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
  }
  