import React from "react";
import { useDispatch } from "react-redux";
import { filterByContinent } from "../../Actions";
import styles from "./FilterByCont.module.css";






export default function FilterByCont({setContinent, setCurrentPage}){
    
    const dispatch = useDispatch();

    function handleFilterByContinent(e){
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
        setCurrentPage(1);
        setContinent(`Ordenado ${e.target.value }`)
    }

    return(       
        
        <div className="botonera">
            <div className="desplegables">
                <h3 className={styles.h3}>Continent</h3>
                    <select onChange={handleFilterByContinent}>
                        <option value='All' selected>All</option>
                        <option value='Africa'>Africa</option>
                        <option value='Antarctica'>Antarctica</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>                            
                        <option value='North America'>North America</option>
                        <option value='South America'>South America</option>
                        <option value='Oceania'>Oceania</option>
                    </select>
            </div>
        </div>
    )
}