import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { filteredByActivities, getActivities } from "../../Actions";
import styles from "./ActivityFilter.module.css"


export default function ActivityFilter({currentPage, setCurrentPage}){

    const activities = useSelector((state) => state.activities);
    const dispatch = useDispatch();
    
    function handleSelect(e){    
        if(e.target.value !== "-"){
            dispatch(filteredByActivities(e.target.value));
            setCurrentPage(1);
        }          
    }   

    return (
        <div>
            <h3 className={styles.h3}>Activities</h3>
            <select onChange={handleSelect}>
            <option value= "-">Select activity</option>
            {
                activities?.map((el, i) => {
                    
                   return (
                    <option value={el.name} key={i}>{el.name}</option>
                )
                    } )
                
            }
            </select>
        </div>
    )

}

                

