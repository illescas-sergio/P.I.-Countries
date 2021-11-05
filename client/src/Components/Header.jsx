import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../Actions";




export default function Header(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
      }, [dispatch]);

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    return(
        <div>
            <Link to= '/countries'>Link a la ruta countries</Link>
                    <h1>Algun titulo (Titulo de la página)</h1>
                    <button onClick = {handleClick}>
                        volver a cargar todos los paises
                    </button>
        </div>
    )

}