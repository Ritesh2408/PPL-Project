import React, { useState, useEffect } from "react";

import "./Places.css";
import HomePage from "../HomePage/HomePage";

const Places = ({ places }) => {
    return (
        <div className="placesdiv">
            <div>
                <HomePage />
            </div>

            {places.map((place, key) => (
                <div className="card_testimonial">
                    <div className="imagecontainer" class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" className="imageClass" /></div>
                    <div class="card-content_testimonial">
                        <h1> {place.title}</h1>
                        <h2>Best Time to travel : {place.besttimetotravel}</h2>
                        <h2>Creator : {place.name} </h2>
                        <h2>Rating : {place.rating} / 5</h2>
                        <h3 class="feedback_testimonial">Description : {place.description}</h3>
                        <h4 class="author_testimonial">&#8377; {place.price}</h4>
                    </div>
                </div>

            ))}
        </div>
    )
}

export default Places;