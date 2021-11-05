import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../Actions";

export default function SearchBar(){

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        // e.preventDefault(); 
        dispatch(getCountriesByName(name))
    }

    return(
        <div>
            <input type="text" placeholder="search your country"
            onChange={handleInputChange} />
            <button type="submit" onClick={handleSubmit} >Search</button>
        </div>
    )


}