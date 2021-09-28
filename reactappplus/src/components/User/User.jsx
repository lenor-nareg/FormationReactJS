import React from "react"

import FullName from '../FullName/FullName'
import Hobbies from '../Hobbies/Hobbies'

export default function User({firstName, lastName, hobbies}){
    return(
        <div>
            <FullName firstName={firstName} lastName={lastName} />
            <Hobbies hobbies={hobbies} />
        </div>
    )
}