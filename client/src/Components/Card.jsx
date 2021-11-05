import React from "react";
import {Link} from 'react-router-dom';


export default function Card({name, flag, continent, id}){  

    return(
        <div>
            <Link to={`/${id}`}>
            <h3>{name}</h3>
            <h5>{continent}</h5>
            <img src={flag} alt="Not found" />
            </Link>
        </div>
    )

}