import React from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getCountries, getCountriesById, filterByContinent, sortByPopulation, sortByName } from "../Actions";
import {Link} from 'react-router-dom';
import Card from "./Card";
import SearchBar from "./SearchBar";
import Paginado from "./Paginado";
// import './Css-modules/home.module.css'



export default function Home(){

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [orden, setOrden] = useState('');
    const [numPop, setNumPop] = useState('');   
    

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

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

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

    function handleCountryById(e){
        e.preventDefault();
        dispatch(getCountriesById(e.target.value))
    }

    return(
        <div>
            <Link to= '/countries'>Link a la ruta countries</Link>
            <h1>Algun titulo (Titulo de la página)</h1>
            <button onClick = {handleClick}>
                volver a cargar todos los paises
            </button>

            <SearchBar/>
            
            

            <div >
                 
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

                    <Paginado countriesPerPage={countriesPerPage} allCountries={allCountries.length} paginado={paginado} />
                

                <div className="cardDiv">
                {
                    currentCountries?.map(el=> (
                        
                        <div key={el.id}>
                            <Link to={"/countries/"+ el.id}>
                                <Card onClick={handleCountryById} name={el.name} flag={el.flag} continent={el.continent}/>
                            </Link>
                        </div>
                                            
                        )
                    )
                }
                </div>
            </div>
                
            
            
            
        </div>
    )
}

