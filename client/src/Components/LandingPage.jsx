import React from "react";
import {Link} from "react-router-dom";

export default function LandingPage(){
    return(
        <div >
            <h1>Fantasias animadas de Ayer y Hoy presentan...</h1>
            <Link to = '/Home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}