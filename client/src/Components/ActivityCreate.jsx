import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../Actions";



function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = "Name is require"
    } else if(!input.countryId.length){
        errors.countryId = "Country is require"
    }
    return errors
}



export default function ActivityCreate(){

    const dispatch = useDispatch();
    
    const countries = useSelector((state) => state.countries);
    const [errors, setErrors] = useState({})
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
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
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

    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivity(input))
        setInput({
            countryId: "",
            name: "",
            season: "",
            duration: "",
            difficulty: ""
        })
        alert('Activity Added!!');
        
        
    }

    

    return(
        <div>
            <Link to={'/Home'}> <button> HOME </button> </Link>

            <h2>Add Activity</h2>

            <form onSubmit={handleSubmit}>
                        

                <div>
                    <label >Nombre:</label>
                    <input type="text" name="name" value={input.name} onChange={handleChange} />
                    {
                        errors.name && (
                            <p>{errors.name}</p>
                        )
                    }
                     
                </div>

                <div>
                    <label >Country:
                        <select name="countryId" onChange={handleCountryId} >
                        <option key={-1} >Select Country</option>
                            {
                                            
                               
                                countries?.map((el, i) =>(

                                    <option key={i} value={el.id} >{el.name}</option>
                                    
                                ) 
                                )
                            }
                            
                        </select>
                        </label>

                    
                </div>



                <div>
                    <h3>Season:</h3>
                    <label >Spring<input type="radio" name="season" value='spring' onChange={handleCheck}/>
                    </label>
                    <label >Summer<input type="radio" name='season' value='summer' onChange={handleCheck}/>
                    </label>
                    <label >Fall<input type="radio" name='season' value='fall' onChange={handleCheck}/>
                    </label>
                    <label >Winter<input type="radio" name='season' value='winter' onChange={handleCheck}/>
                    </label>                     
                                                 
                                                        
                </div>
                <div>
                    <label >Duration:</label>
                            
                    <label >1<input type="radio" name="duration" value='1' onChange={handleCheck}/>
                    </label>
                    <label >2<input type="radio" name="duration" value='2' onChange={handleCheck}/>
                    </label>
                    <label >3<input type="radio" name="duration" value='3' onChange={handleCheck}/>
                    </label>
                    <label >4<input type="radio" name="duration" value='4' onChange={handleCheck}/>
                    </label>
                    <label >5<input type="radio" name="duration" value='5' onChange={handleCheck}/>
                    </label>   
                        
                </div>
                <div>
                    <label >Difficulty:</label>

                    <label >1<input type="radio" name="difficulty" value='1' onChange={handleCheck}/>
                    </label>
                    <label >2<input type="radio" name="difficulty" value='2' onChange={handleCheck}/>
                    </label>
                    <label >3<input type="radio" name="difficulty" value='3' onChange={handleCheck}/>
                    </label>
                    <label >4<input type="radio" name="difficulty" value='4' onChange={handleCheck}/>
                    </label>
                    <label >5<input type="radio" name="difficulty" value='5' onChange={handleCheck}/>
                    </label>   
                        
                </div>

                <div>
                    <button disabled={!input.name || !input.countryId.length || !input.difficulty || !input.duration || !input.season} type="Submit" >Add!</button>
                </div>


            </form>



        </div>
    )

}