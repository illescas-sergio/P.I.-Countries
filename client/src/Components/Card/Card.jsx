import React from "react";
import {Link} from 'react-router-dom';
import styles from "./Card.module.css"


export default function Card({name, flag, continent, id}){  

    return(
        <Link className={styles.link} to={`/${id}`}>
            <div className={styles.card}>
                <h3 className={styles.divName}>{name}</h3>
                <h5 className={styles.h5Card}>{continent}</h5>
                
                <img className={styles.cardImage} src={flag} alt="Not found" />
                
            </div>
        </Link>
    )

}