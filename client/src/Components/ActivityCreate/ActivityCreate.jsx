import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { getCountries, postActivity } from "../../Actions";
import styles from "./ActivityCreate.module.css"


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
            countryId: [],
            name: "",
            season: "",
            duration: "",
            difficulty: ""
        })
        alert('Activity Added!!');
        
        
        
    }

    console.log(input.countryId)

    function handleDelete(el){
        console.log(el)
        
        setInput({
            ...input,
            countryId: input.countryId.filter( c => c !== el)
        })
    }

    

    return(
        <div className={styles.card} >
            <Link to={'/Home'}> <button  className={styles.button}> HOME </button> </Link>

            <h2 className={styles.text}>Add Activity</h2>

            <form  onSubmit={handleSubmit}>
                        

                <div>
                    <label className={styles.text} >Nombre:</label>
                    <input className={styles.radioSpace} type="text" name="name" value={input.name} onChange={handleChange} />
                    {
                        errors.name && (
                            <p>{errors.name}</p>
                        )
                    }
                     
                </div>

                <div>
                    <label className={styles.text} >Country:
                        <select  name="countryId" onChange={handleCountryId} >
                        <option  defaultValue="" >Select Country</option>
                            {
                                            
                               
                                countries?.map((el) =>(

                                    <option key={el.id} value={el.id} >{el.name}</option>
                                    
                                ) 
                                )
                            }
                            
                        </select>
                        </label>
                        
                </div>



                <div>
                    <h3 className={styles.textSeason}>Season:</h3>
                    <label className={styles.text}>Spring<input className={styles.radioSpace} type="radio" name="season" value='spring' onChange={handleCheck}/>
                    </label>
                    <label className={styles.text}>Summer<input className={styles.radioSpace} type="radio" name='season' value='summer' onChange={handleCheck}/>
                    </label>
                    <label className={styles.text} >Fall<input className={styles.radioSpace} type="radio" name='season' value='fall' onChange={handleCheck}/>
                    </label>
                    <label className={styles.text} >Winter<input className={styles.radioSpace} type="radio" name='season' value='winter' onChange={handleCheck}/>
                    </label>                     
                                                 
                                                        
                </div>
                <div>
                <h3 className={styles.text}>Duration:</h3>
                            
                    <label className={styles.spacing}>1<input className={styles.radioSpace} type="radio" name="duration" value='1' onChange={handleCheck}/>
                    </label>
                    <label className={styles.spacing}>2<input className={styles.radioSpace} type="radio" name="duration" value='2' onChange={handleCheck}/>
                    </label>
                    <label className={styles.spacing}>3<input className={styles.radioSpace} type="radio" name="duration" value='3' onChange={handleCheck}/>
                    </label>
                    <label className={styles.spacing}>4<input className={styles.radioSpace} type="radio" name="duration" value='4' onChange={handleCheck}/>
                    </label>
                    <label className={styles.spacing}>5<input className={styles.radioSpace} type="radio" name="duration" value='5' onChange={handleCheck}/>
                    </label>   
                        
                </div>
                <div>
                <h3 className={styles.text}>Difficulty:</h3>

                    <label className={styles.spacing}>1<input className={styles.radioSpace} type="radio" name="difficulty" value='1' onChange={handleCheck}/>
                    </label>
                    <label className={styles.spacing}>2<input className={styles.radioSpace} type="radio" name="difficulty" value='2' onChange={handleCheck}/>
                    </label>
                    <label className={styles.spacing}>3<input className={styles.radioSpace} type="radio" name="difficulty" value='3' onChange={handleCheck}/>
                    </label>
                    <label className={styles.spacing}>4<input className={styles.radioSpace} type="radio" name="difficulty" value='4' onChange={handleCheck}/>
                    </label>
                    <label className={styles.spacing}>5<input className={styles.radioSpace} type="radio" name="difficulty" value='5' onChange={handleCheck}/>
                    </label>   
                        
                </div>

                <div>
                    <button className={styles.buttonAdd} disabled={!input.name || !input.countryId.length || !input.difficulty || !input.duration || !input.season} type="Submit" >Add!</button>
                </div>


            </form>

                
                
                {input.countryId.map((el) => 
                        (<div key={el} >
                            
                            <button className={styles.button} onClick={(e)=>handleDelete(el)}>x  {el}</button>
                        </div>)
                )}
            



        </div>
    )

}