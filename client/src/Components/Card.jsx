import React from "react";
import {Link} from 'react-router-dom';
import styles from "./Card.module.css"


export default function Card({name, flag, continent, id}){  

    return(
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
            <h3 className={styles.divName}>{name}</h3>
            <h5 >{continent}</h5>
            
            <img className={styles.cardImage} src={flag} alt="Not found" />
            
            </Link>
        </div>
    )

}