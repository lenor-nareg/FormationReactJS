import React from "react"

export default function Hobbies({hobbies}){
    return (
        <ul>
            {hobbies.map(element => {
                return(
                    <li>{element}</li>
                )
            })}
            
        </ul>
    )
}