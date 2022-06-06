import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, getCountriesById, filterByContinent } from "../../Actions";
import { Link } from "react-router-dom";
import Card from "../Card";
import SearchBar from "../SearchBar";
import Paginado from "../Paginado";
import Header from "../Header";
import SortBy from "../SortBy/SortBy.jsx";
import ActivityFilter from "../ActivityFilter";
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

    
    function handleFilterByContinent(e){
        e.preventDefault();
        dispatch(filterByContinent(e.target.value))
        setCurrentPage(1);
        setContinent(`Ordenado ${e.target.value }`)
    }

    function handleCountryById(e){
        e.preventDefault();
        dispatch(getCountriesById(e.target.value))
    }

        

    return(
        <div className={styles.divL} >

                <div >  
                        <Header />     
                        <Link to={'/Add/Activity'}> <button className={styles.button}> Add Activity </button></Link>
                        <SearchBar/>                  
                </div>       

            
                 
                    <div className={styles.filters} >

                        <SortBy currentPage={currentPage} setCurrentPage={setCurrentPage} orden={orden} setOrden={setOrden} numPop={numPop} setNumPop={setNumPop}/>

                            <div >
                                <h3 className={styles.h3}>Continent</h3>
                                    <select onChange={handleFilterByContinent}>
                                        <option value='All' defaultValue= "">All</option>
                                        <option value='Africa'>Africa</option>
                                        <option value='Antarctica'>Antarctica</option>
                                        <option value='Asia'>Asia</option>
                                        <option value='Europe'>Europe</option>                            
                                        <option value='North America'>North America</option>
                                        <option value='South America'>South America</option>
                                        <option value='Oceania'>Oceania</option>
                                    </select>
                            </div>
                           
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

