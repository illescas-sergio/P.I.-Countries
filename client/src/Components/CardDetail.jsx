import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function CardDetail(){ 

    const {id} = useParams();

    const [detail, setDetail] = useState('');

    useEffect(()=>{
        axios.get("http://localhost:3001/countriesById/" + id)
        .then((resp) => {
            setDetail(resp.data)
        })
        return () => {
            setDetail(null)
        }
    },[])

    console.log(detail)
    
   
    return(

        
        <div>           
            <h3>{detail.name}</h3>
            <h5>{detail.continent}</h5>
            <img src={detail.flag} alt="Not found" />
            <h5>Code: {detail.id}</h5>
            <h5>Capital: {detail.capital}</h5>
            <h5>Subregion: {detail.capital}</h5>
            <h5>Area: {detail.area}</h5>
            <h5>Population: {detail.population}</h5>
            <h5>Activities: </h5>
                      
        </div>
    )
    
}




