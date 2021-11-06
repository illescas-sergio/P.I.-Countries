import React from "react";
import Card from "./Card";




export default function CardGalery({currentCountries, handleCountryById}){

    return (

        <div className="cardDiv">
                        {
                            currentCountries?.map(el=> (
                                
                                <div key={el.id}>
                                    
                                        <Card onClick={handleCountryById} name={el.name} flag={el.flag} continent={el.continent} id={el.id}/>
                                    
                                </div>
                                                    
                                )
                            )
                        }
        </div>
    )
}
