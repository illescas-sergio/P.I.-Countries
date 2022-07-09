import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, getActivities, getCountriesById } from "../../Actions";
import Header from "../Header/Header.jsx";
import Card from "../Card/Card.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import SortBy from "../SortBy/SortBy";
import FilterByCont from "../FilterByCont/FilterByCont";
import ActivityFilter from "../ActivityFilter/ActivityFilter.jsx";
import styles from "./Home.module.css"
import { useEffect } from "react";


export default function Home({currentPage, setCurrentPage}){

    const dispatch = useDispatch();

    const countriesActivities = useSelector((state) => state.activities)
    
    const allCountries = useSelector((state) => state.countries); 
    
    const [orden, setOrden] = useState('');
    const [numPop, setNumPop] = useState('');

    const [continent, setContinent] = useState('');    
   
    const [countriesPerPage] = useState(10)

    const indexOfLastCountry = currentPage * countriesPerPage; // 10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage //0
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry); 

    useEffect(() => {
        dispatch(getActivities());
        dispatch(getCountries());
    }, [dispatch]);
    
    function handleCountryById(e){
        e.preventDefault();
        dispatch(getCountriesById(e.target.value))
    }

    return(
        <div className={styles.divL} >

            <div>  
                <Header />                     
            </div>       
                 
            <div className={styles.filters} >

                <SortBy numPop={numPop} setNumPop={setNumPop} orden={orden} setOrden={setOrden} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

                <FilterByCont continent={continent} setContinent={setContinent} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                                                       
                <ActivityFilter countriesActivities={countriesActivities} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                            
            </div>

            <Paginado setCurrentPage={setCurrentPage} currentPage={currentPage} countriesPerPage={countriesPerPage} allCountries={allCountries?.length}/>          
                
                    
            <div className={styles.divcards}>
            {
                currentCountries?.length > 0 ? currentCountries.map(el=> (
                                
                    <div  key={el.id}>                            
                        <Card  key={el.id} onClick={handleCountryById} name={el.name} flag={el.flag} continent={el.continent} id={el.id} currentPage={currentPage} setCurrentPage={setCurrentPage} />                            
                    </div>
                                                    
                )) : <div ><h3>No such country</h3></div>
                                                    
            }
            </div>
                          
        </div>
    )
}

