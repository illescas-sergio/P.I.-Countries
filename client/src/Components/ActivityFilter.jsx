import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { filteredByActivities } from "../Actions";







export default function ActivityFilter(){

    const [activities, setActivities] = useState()
    const dispatch = useDispatch();

    
    

    useEffect(()=>{
        axios.get("http://localhost:3001/activities")
        .then((resp) => {
            setActivities(resp.data)
        })
        // return () => {
        //     setActivities(null)
        // }
    },[])

    
    function handleSelect(e){    
        console.log('soy HANDLE', e.target.value)    
        dispatch(filteredByActivities(e.target.value))  
    }   

    return (
        <div>
            <h3>Activities</h3>
            <select onChange={handleSelect}>
            <option key={-1}>Select activity</option>
            {
                activities?.map((el, i) => {
                    console.log(el.countries)
                   return (
                    <option value={el.name} key={i}>{el.name}</option>
                )
                    } )
                
            }
            </select>
        </div>
    )

}

                

