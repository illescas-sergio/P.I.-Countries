import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByName } from "../Actions";
import styles from "./SearchBar.module.css"



export default function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState("");
    
    const countriesAll = useSelector((state) => state.allCountries)

    


    function handleInputChange(e){
        e.preventDefault(); 
        console.log(e.target.value)      
            setName(e.target.value)       
    }
 
   
    function handleSubmit(e){
        e.preventDefault();    

        const toSearch = name.toLowerCase();
        const validate= countriesAll.filter((el) => el.name.toLowerCase().includes(toSearch))
        
        if(validate.length < 1){
           return alert('That Country doesn\' exist')
            } else {
    
            dispatch(getCountriesByName(name))
            }
        
    }

    

    

    return(
        <div className={styles.divSearch}>
            
                
                    <input className={styles.input} type="text" placeholder="search your country"
                    onChange={handleInputChange} />

                    <button className={styles.button} type="submit" onClick={handleSubmit} >Search</button>
                
           
        </div>
    )



}