import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const StNavbar = () => {
    const { store, actions } = useContext(Context);
	return (
        <nav className="navbar bg-dark mb-3">
        <Link to="/">
            <img src="https://i.pinimg.com/236x/da/b3/1b/dab31beffb01c779a86c00a61ea74bde.jpg" className="rounded-circle w-25 h-25" alt="Star Wars Logo"/>
        </Link>
        <div className="ml-auto">
            <div className="dropdown">
                <button
                    className="btn btn-outline-warning opacity-75 dropdown-toggle m-2 id=toggler"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                   <b className="text-light"> Favorites<span className="badge bg-success opacity-755 text-light">{store.favorites.length}</span></b>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {(store.favorites && store.favorites.length >0) ?
							store.favorites.map((f, index) => (
								<li key={f}>
									<a className="dropdown-item d-flex justify-content-between" onClick={() => actions.removeFavorites(index)}>{f}<i className="fas fa-trash mt-1"></i></a>
								</li>
							)) : <li className="text-center">(empty)</li>
						}
                </ul>
            </div>
        </div>
    </nav>
	    );
    };
