import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const StarshipsCard = () => {
	const { store, actions } = useContext(Context);
		return(
			<div className="text-center mt-5">
				<h1>Get a vehicle, pay after</h1>
				<div className="card bg-secondary opacity-50" >
					<div> <h5 className="card-title">Card title</h5></div>
					  <img src={store.imageStarship} className="card-img-top"/>
				  <div className="card-body">
						<p className="card-text"></p>
				   </div>
				  <ul className="list-group list-group-flush">
					 <li className="list-group-item">An item</li>
						<li className="list-group-item">A second item</li>
					 <li className="list-group-item">A third item</li>
				  </ul>
				 <div className="card-body">
				   <a href="#" className="card-link">Card link</a>
				   <a href="#" className="card-link">Another link</a>
				 </div>
			   </div>
				
			</div>
		);
}