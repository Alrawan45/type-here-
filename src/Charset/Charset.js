import React from 'react'
import '../Charset/Charset.css'

const charset=(props)=>{
    return(
        < div className = "char" onClick={props.remove} >
             <h4>{props.two}</h4>
        </div>
    )
}
export default charset;