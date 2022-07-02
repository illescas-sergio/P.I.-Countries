import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { filteredByActivities } from "../../Actions";
import styles from "./ActivityFilter.module.css"


export default function ActivityFilter(){

    const [activities, setActivities] = useState()
    const dispatch = useDispatch();
    

    useEffect(()=>{
        axios.get("http://localhost:3001/activities")
        .then((resp) => {
            setActivities(resp.data)
        })
        
    },[])

    
    function handleSelect(e){    
   
        dispatch(filteredByActivities(e.target.value))  
    }   

    return (
        <div>
            <h3 className={styles.h3}>Activities</h3>
            <select onChange={handleSelect}>
            <option key={-1} defaultValue= "Select activity">Select activity</option>
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

                

