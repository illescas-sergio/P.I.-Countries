import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import styles from "./CardDetail.module.css"



export default function CardDetail(){ 

    const {id} = useParams();

    const [detail, setDetail] = useState('');

    useEffect(()=>{
        axios.get("http://localhost:3001/countriesById/"+id)
        .then((resp) => {
            setDetail(resp.data)
        })
        return () => {
            setDetail(null)
        }
    },[])

    console.log(detail)
    
   
    return(
        <div className={styles.divUbication}>
            <div className={styles.card} > 
                <div>
                <Link to={'/Home'}> <button className={styles.button}> HOME </button> </Link>
                </div> 

                <h3 className={styles.cardTitle}>{detail.name}</h3>
                <h5>{detail.continent}</h5>
                <img className={styles.cardImage} src={detail.flag} alt="Not found" />
                <h5>Code: {detail.id}</h5>
                <h5>Capital: {detail.capital}</h5>
                <h5>Subregion: {detail.subregion}</h5>
                <h5>Area: {detail.area}</h5>
                <h5>Population: {detail.population}</h5>
                <h5>Activities: {detail.activities?.map(act => (
                    <div key={act.id}>
                        <h5>Name: {act.name}</h5>
                        <h5>Season: {act.season}</h5>
                        <h5>Duration: {act.duration}</h5>
                        <h5>Difficulty: {act.difficulty}</h5>                    
                    </div>
                ))} </h5>          
                        
            </div>
        </div>    
    )
    

}




