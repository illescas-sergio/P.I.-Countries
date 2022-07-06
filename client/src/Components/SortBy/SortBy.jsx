import React from "react";
import { useDispatch } from "react-redux";
import { sortByName, sortByPopulation } from "../../Actions";
import styles from "./SortBy.module.css";


export default function SortBy({currentPage, setCurrentPage, orden, setOrden, setNumPop, numPop}){
    
    const dispatch = useDispatch();

    function handleSort(e){
        if(e.target.value === 'alph-asc' || e.target.value === 'alph-desc'){
            handleSortByName(e);
        } else if(e.target.value === 'pop-asc' || e.target.value === 'pop-desc'){
            handleSortByPopulation(e);
        }
    }

    function handleSortByPopulation(e){
        e.preventDefault();
        dispatch(sortByPopulation(e.target.value))
        setCurrentPage(1);
        setNumPop(`Ordenado ${e.target.value }`)
    }

    function handleSortByName(e){
        e.preventDefault();
        dispatch(sortByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value }`)
    }

    return(       
        
        <div >
            <h3 className={styles.h3}>Filter by</h3>
            <select onChange={handleSort}>
                <option value='-'> - </option>
                <option value='alph-asc'>Alphabetic A-Z</option>
                <option value='alph-desc'>Alphabetic Z-A</option>
                <option value='pop-asc'>Population Desc</option>
                <option value='pop-desc'>Population Asc</option>
            </select>
        </div>

    )
}