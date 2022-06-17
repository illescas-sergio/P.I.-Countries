import React from "react";
import ReloadAllCountries from "../ReloadAllCountries/ReloadAllCountries";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";




export default function Header(){

    return(
        <div>
            <div>        
                <h1 className={styles.titulo}>Countries-app</h1>               
            </div>

            <div className={styles.bar}>               
                <ReloadAllCountries />
                <SearchBar/>
                <Link to={'/Add/Activity'}> <button className={styles.button}> Add Activity </button></Link>
            </div>

        </div>
        


    )

}