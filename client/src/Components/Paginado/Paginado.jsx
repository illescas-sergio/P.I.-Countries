import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Paginado.module.css"


export default function Paginado({currentPage, countriesPerPage, allCountries, paginado}){

    const pageNumber = [];

    for(let i = 1; i <= Math.ceil(allCountries/countriesPerPage); i++){
        pageNumber.push(i)
    };
    


    return(
        <section className={styles.paginacion}>
            <ul >
                {
                    pageNumber && pageNumber.map(number => {
                        if(currentPage === number){
                            return  <li key={number}>
                            
                            <NavLink to='Home' activeClassName={styles.activo} onClick={()=> paginado(number)}>{number}</NavLink>
                            
                        </li>
                        } else {

                            return<li key={number}>
                            
                            <NavLink to='Home' onClick={()=> paginado(number)}>{number}</NavLink>
                            
                        </li>
                        }
                        
                        
                    })
                }
            </ul>
        </section>
    )

}