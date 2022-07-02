import React from "react";
import {Link} from "react-router-dom";
import styles from "./Paginado.module.css"


export default function Paginado({countriesPerPage, allCountries, paginado}){

    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i)
    };

   

    return(
        <section className={styles.paginacion}>
            <ul >
                {
                    pageNumber && pageNumber.map(number => (
                        <li key={number}>
                            <Link to='Home'>
                        <p onClick={()=> paginado(number)}>{number}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )

}