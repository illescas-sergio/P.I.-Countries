import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesByName } from "../Actions";


export default function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const countriesAll = useSelector((state) => state.allCountries)

    


    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        
    }

    
    function handleSubmit(e){
        e.preventDefault();
        const toSearch = name.toLowerCase();
        const validate= countriesAll.filter((el) => el.name.toLowerCase().includes(toSearch))
        console.log(name)
        console.log(validate);
        if(validate.length < 1){
           return alert('That Country doesn\' exist')
        } else {

            dispatch(getCountriesByName(name))
        }
    }


    return(
        <div>
            <input type="text" placeholder="search your country"
            onChange={handleInputChange} />
            <button type="submit" onClick={handleSubmit} >Search</button>
        </div>
    )


}