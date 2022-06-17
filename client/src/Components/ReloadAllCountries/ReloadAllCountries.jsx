import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "../../Actions";
import styles from "./ReloadAllCountries.module.css";




export default function ReloadAllCountries(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries());
      }, [dispatch]);

    function handleClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    return(
               
            <button className={styles.button} onClick = {handleClick}>Reload all countries</button>               
       
    )

}


