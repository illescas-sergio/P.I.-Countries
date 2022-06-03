import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, sortByName, sortByPopulation } from "../Actions";






export default function Filtros({setCurrentPage}){

    const allCountries = useSelector((state) => state.countries);

    const [orden, setOrden] = useState('');
    const [numPop, setNumPop] = useState('');
    
    const dispatch = useDispatch();

    function handleFilterByContinent(e){
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
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
        
        <div className="botonera">
                
                <div className="desplegables">
                    <h3>Alphabetic Order</h3>
                        <select onChange={handleSortByName}>
                            <option value='asc'>A-Z</option>
                            <option value='desc'>Z-A</option>
                        </select>
                </div>

                <div className="desplegables">
                    <h3>Continent</h3>
                        <select onChange={handleFilterByContinent}>
                            <option value='All'>All</option>
                            <option value='Africa'>Africa</option>
                            <option value='Antarctica'>Antarctica</option>
                            <option value='Asia'>Asia</option>
                            <option value='Europe'>Europe</option>                            
                            <option value='North America'>North America</option>
                            <option value='South America'>South America</option>
                            <option value='Oceania'>Oceania</option>
                        </select>
                </div>

                <div className="desplegables">
                    <h3>Population</h3>                    
                        <select onChange={handleSortByPopulation}>
                            <option value='asc'>Asc</option>
                            <option value='desc'>Desc</option>
                        </select>
                </div>

                <div className="desplegables">
                    <h3>Activity</h3>    
                        <select>
                            <option value='asc'>A-Z</option>
                            <option value='desc'>Z-A</option>
                        </select>
                </div>


    </div>
    )
}