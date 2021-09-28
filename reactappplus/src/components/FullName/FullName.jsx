import React from "react"

import FirstName from '../FirstName/FirstName'
import LastName from '../LastName/LastName'

export default function FullName({firstName, lastName}){
    return(
        <div>
            <FirstName firstName={firstName}/>
            {' '}
            <LastName  lastName={lastName}/>
        </div>
    )
}

