import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortByName, sortByPopulation } from "../../Actions";
import styles from "./SortBy.module.css";





export default function SortBy({currentPage, setCurrentPage, orden, setOrden, numPop, setNumPop}){
    
    const dispatch = useDispatch();

    function handleSort(e){
        console.log("estoy en handleSort")
        if(e.target.value === 'alph-asc' || e.target.value === 'alph-desc'){
            console.log("estoy en ALPHABET")
            handleSortByName(e);
        } else if(e.target.value === 'pop-asc' || e.target.value === 'pop-desc'){
            console.log("estoy en POPULATION")
            handleSortByPopulation(e);
        }
    }

    function handleSortByPopulation(e){
        e.preventDefault();
        dispatch(sortByPopulation(e.target.value))
        setCurrentPage(1);
        console.log("seteando desde Pop")
        setNumPop(`Ordenado ${e.target.value }`)
    }

    function handleSortByName(e){
        e.preventDefault();
        dispatch(sortByName(e.target.value))
        setCurrentPage(1);
        console.log("seteando desde Name")
        setOrden(`Ordenado ${e.target.value }`)
    }




    return(       
        
        <div >
            <h3 className={styles.h3}>Filter by</h3>
            <select onChange={handleSort}>
                <option value='-' defaultValue= ""> - </option>
                <option value='alph-asc'>Alphabetic A-Z</option>
                <option value='alph-desc'>Alphabetic Z-A</option>
                <option value='pop-asc'>Population Asc</option>
                <option value='pop-desc'>Population Desc</option>
            </select>
        </div>

    )
}