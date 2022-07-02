import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, getCountriesById } from "../../Actions";
import Header from "../Header/Header.jsx";
import Card from "../Card/Card.jsx";
import Paginado from "../Paginado/Paginado.jsx";
import SortBy from "../SortBy/SortBy";
import FilterByCont from "../FilterByCont/FilterByCont";
import ActivityFilter from "../ActivityFilter/ActivityFilter.jsx";
import styles from "./Home.module.css"



export default function Home(){

    const dispatch = useDispatch();
    
    const allCountries = useSelector((state) => state.countries);
    
    const [orden, setOrden] = useState('');
    const [numPop, setNumPop] = useState('');
    const [continent, setContinent] = useState('');   
    
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10)

    const indexOfLastCountry = currentPage * countriesPerPage; // 10
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage //0
    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry); 


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        dispatch(getCountries());
      }, [dispatch]);

    
    function handleCountryById(e){
        e.preventDefault();
        dispatch(getCountriesById(e.target.value))
    }
    
    console.log(continent)

    return(
        <div className={styles.divL} >

                <div>  
                    <Header />                     
                </div>       

            
                 
                    <div className={styles.filters} >

                        <SortBy currentPage={currentPage} setCurrentPage={setCurrentPage} orden={orden} setOrden={setOrden} numPop={numPop} setNumPop={setNumPop}/>

                        <FilterByCont currentPage={currentPage} setCurrentPage={setCurrentPage} continent={continent} setContinent={setContinent}/>
                                                       
                        <ActivityFilter />
                            
                    </div>

                    <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries?.length} paginado={paginado}/>          
                
                    
                    <div className={styles.divcards}>
                        {
                            currentCountries?.length > 0 ? currentCountries.map(el=> (
                                
                                <div  key={el.id}>                            
                                        <Card  key={el.id} onClick={handleCountryById} name={el.name} flag={el.flag} continent={el.continent} id={el.id}/>                            
                                </div>
                                                    
                                                    )) : <div ><h3>No such country</h3></div>
                                                    
                                                }
                    </div>
            
                   
                      
        </div>
    )
}

