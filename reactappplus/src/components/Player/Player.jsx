import React from "react"

export default function Player(){
    const score = 1250;
    const nom = "Joxk";
    let prenom = "Dre";
    const age = 30;
    let permis = true;

    return (
        <div>
            <h1>{score > 500 ? `Vainqueur: ${score}` : `Perdant: ${score}`}</h1>
            <h2>Nom complet : {`${nom} ${prenom}`}</h2>
            {age > 18 ? <h3>Majeur</h3> : <h3>Mineur</h3>}
            <p>{permis ? "oui" : "no"}</p>
        </div>
    );
}