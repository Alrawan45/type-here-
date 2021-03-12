import React from 'react'


const validation =(props)=>{
     let match="this is short";
    if(props.number >= 5){
        match="this is enough"
    }
    return(
        <div>
         <h1>Total No:{props.number}</h1>
         <h2>{match}</h2>
        </div>

    )
}
export default validation;