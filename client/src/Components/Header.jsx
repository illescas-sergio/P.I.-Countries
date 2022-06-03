import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../Actions";
import styles from "./Header.module.css"




export default function Header(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
      }, [dispatch]);

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    return(
        <div>        
               <h1 className={styles.titulo}>Countries-app</h1>
               <button className={styles.button} onClick = {handleClick}>
                   Reload all countries
               </button>

               
        </div>
    )

}