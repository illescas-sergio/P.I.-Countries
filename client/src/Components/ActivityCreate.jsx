import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router"; 
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../Actions";


export default function ActivityCreate(){

    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);

    const [input, setInput] = useState({
        name: "",
        season: "",
        duration: "",
        difficulty: ""
    })

    useEffect(() => {
        dispatch(getCountries())
    }, [])

    return(
        <div>
            <Link to={'/Home'}> <button> HOME </button> </Link>
        </div>
    )

}