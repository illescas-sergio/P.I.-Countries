import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { getCountries } from "../../Actions";
import style from './LandingPage.module.css'

 
export default function LandingPage(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    

    return(
        <div  className={style.divL}>
                <div className={style.welcome}>
                    <h1  >Countries-App</h1>
                    <button className={style.button}><Link className={style.link} to = '/Home'>Go!</Link></button>   
                </div>
        </div>
        
    )
}