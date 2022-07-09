import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filteredByActivities } from "../../Actions";
import styles from "./ActivityFilter.module.css"


export default function ActivityFilter({countriesActivities, currentPage, setCurrentPage}){

    const [activities, setActivities] = useState()
    const dispatch = useDispatch();

    useEffect(() => {
        setActivities(countriesActivities)
    }, [countriesActivities]);
    
    function handleSelect(e){    
        if(e.target.value !== "-"){
            dispatch(filteredByActivities(e.target.value));
            setCurrentPage(1);        
        }         
    };   
    
    return (
        <div>
            <h3 className={styles.h3}>Activities</h3>
            <select onChange={handleSelect}>
            <option value= "-">Select activity</option>
            {
                activities?.map((el) => {
                    
                   return (
                    <option value={el.name} key={el.id}>{el.name}</option>
                )
                }) 
            }
            </select>
        </div>
    )

}

                

