import React from "react";
import {Link} from "react-router-dom";
import style from './LandingPage.module.css'

 
export default function LandingPage(){




    return(
        <div  className={style.divL}>
            
                <div className={style.welcome}>
                    
                    <h1  >Countries-App</h1>
                
                    
                        <Link className={style.link} to = '/Home'>
                            <button className={style.button}>Go!</button>
                        </Link>
                   

                </div>

           
        </div>
        
    )
}