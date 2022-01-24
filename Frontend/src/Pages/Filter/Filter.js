import React, { useState,useEffect } from "react";
import axios from "axios";

import "./Filter.css";
import HomePage from "../HomePage/HomePage";

function handlerror(){
    
}

const Filter = (props) => {
        //under 20k
        const [under20k, setUnder20k] = useState([])
        useEffect(() => {
            axios.get('http://localhost:9002/placesunder20k')
              .then(res => setUnder20k(res.data))
              .catch(error => handlerror());
          }, [])
        
        //20k-40k
        const [p2040k, setP2040k] = useState([])
        useEffect(() => {
            axios.get('http://localhost:9002/places20-40k')
              .then(res => setP2040k(res.data))
              .catch(error => handlerror());
          }, [])

        //40k-60k
        const [p4060k, setP4060k] = useState([])
        useEffect(() => {
            axios.get('http://localhost:9002/places40-60k')
              .then(res => setP4060k(res.data))
              .catch(error => handlerror());
          }, [])

        //60-100k
        const [p60100k, setP60100k] = useState([])
        useEffect(() => {
            axios.get('http://localhost:9002/places60-100k')
              .then(res => setP60100k(res.data))
              .catch(error => handlerror());
          }, [])

        //above100k
        const [above100k, setAbove100k] = useState([])
        useEffect(() => {
            axios.get('http://localhost:9002/placesover100k')
              .then(res => setAbove100k(res.data))
              .catch(error => handlerror());
          }, [])

        if(props.price==="20000"){
            return(
                <div>
                    {under20k.map((place,key) => (
                        <div class="card_testimonial">
                            <div class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                ))}
                </div>
            )
        }
        
        else if(props.price==="40000"){
            return(
                <div>
                    {p2040k.map((place,key) => (
                        <div class="card_testimonial">
                            <div class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                ))}
                </div>
            )
        }

        else if(props.price==="60000"){
            return(
                <div>
                    {p4060k.map((place,key) => (
                        <div class="card_testimonial">
                            <div class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                ))}
                </div>
            )
        }
        
        else if(props.price==="100000"){
            return(
                <div>
                    {p60100k.map((place,key) => (
                        <div class="card_testimonial">
                            <div class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                ))}
                </div>
            )
        }

        if(props.price==="500000"){
            return(
                <div>
                    {above100k.map((place,key) => (
                        <div class="card_testimonial">
                            <div class="img-container_testimonial"> <img src={`http://localhost:9002/${place.image}`} alt="no image" /></div>
                            <div class="card-content_testimonial">
                                <h1>Title : {place.title}</h1>
                                <h2>Best Time to travel : {place.besttimetotravel}</h2>
                                <h2>Creator : {place.name} </h2>
                                <h2>Rating : {place.rating}</h2>
                                <p class="feedback_testimonial">Description : {place.description}</p>
                                <p class="author_testimonial">Price : {place.price}</p>
                            </div>
                        </div>
                ))}
                </div>
            )
        }
}

export default Filter;