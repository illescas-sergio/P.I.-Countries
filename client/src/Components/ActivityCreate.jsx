import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../Actions";


export default function ActivityCreate(){

    const dispatch = useDispatch();
    
    const countries = useSelector((state) => state.countries);

    const [input, setInput] = useState({
        countryId: [],
        name: "",
        season: "",
        duration: "",
        difficulty: ""
    })

    console.log(input)

    useEffect(() => {        
        dispatch(getCountries())
    }, [])

   
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    
    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                [e.target.name]: e.target.value, 
            })
        }
    }

    function handleCountryId(e){
        setInput({
            ...input,
            countryId: [...input.countryId, e.target.value]
        })

    }

    function handleSelect(e){
        setInput({
            ...input,
            [e.target.name]:  e.target.value 
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivity(input))
        alert('Activity Added!!');
        setInput({
        countryId: "",
        name: "",
        season: "",
        duration: "",
        difficulty: ""
        })
        
    }



    return(
        <div>
            <Link to={'/Home'}> <button> HOME </button> </Link>

            <h2>Add Activity</h2>

            <form onSubmit={handleSubmit}>
                        

                <div>
                    <label >Nombre:</label>
                    <input type="text" name="name" value={input.name} onChange={handleChange}/>
                     
                </div>

                <div>
                    <label >Country:
                        <select name="countryId" onChange={handleCountryId}>
                            
                            {
                                countries?.map(el =>(

                                    <option value={el.id} >{el.name}</option>
                                    
                                ) 
                                )
                            }
                            
                        </select>
                        </label>

                    
                </div>



                <div>
                    <h3>Season:</h3>
                    <label >Spring<input type="checkbox" name="season" value='spring' onChange={handleCheck}/>
                    </label>
                    <label >Summer<input type="checkbox" name='season' value='summer' onChange={handleCheck}/>
                    </label>
                    <label >Fall<input type="checkbox" name='season' value='fall' onChange={handleCheck}/>
                    </label>
                    <label >Winter<input type="checkbox" name='season' value='winter' onChange={handleCheck}/>
                    </label>                     
                                                 
                                                        
                </div>
                <div>
                    <label >Duration:</label>
                        <select name='duration' onChange={handleSelect}>
                            <option  value='-'> - </option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>                            
                            <option value='5'>5</option>
                            
                        </select>
                </div>
                <div>
                    <label >Difficulty:</label>
                        <select name='difficulty' onChange={handleSelect}>
                            <option value='-'> - </option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>                            
                            <option  value='5'>5</option>
                            
                        </select>
                </div>

                <div>
                    <button type="Submit" >Add!</button>
                </div>


            </form>



        </div>
    )

}