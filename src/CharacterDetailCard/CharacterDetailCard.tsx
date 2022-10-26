import React from 'react';
import {CharacterModel} from "../CharacterModel/CharacterModel";
import {Link, useParams} from "react-router-dom";
import './CharacterDetailCard.css'

type CharacterDetailCardProps = {
    characterList: CharacterModel[]
}

function CharacterDetailCard(props: CharacterDetailCardProps) {

    const params = useParams() // erlaubt es React Parameter aus der URL zu holen und zu benutzen
    const id = params.id; // liest den parameter aus den Params raus und speichert es in id

    if (!id) // hier prüfen wir ebenfalls ob eine ID vorhanden ist
        // alternativ (if id === undefined) Hier prüfen wir ob die ID undefined ist

    {
        return <div>ID is undefined</div>
    }

    const foundCharacter = props.characterList.find(foundCharacter => foundCharacter.id === parseInt(id)) // hier filtern wir nach dem Charakter mittels der ID aus den Params aus der Gesamten Charakterliste

    if (!foundCharacter) { // es ist natürlich auch möglich das es einen Charakter mit einer angegebenen ID nicht vorhanden ist
        return <>Character not Found</> // dementsprechend geben wir eine "Fehlermeldung" aus
    }


    return (
        <div className={"CharacterDetailCard"}>
            <Link id={"back-link"} to={"/"}>Back</Link>
            <h3>{foundCharacter.name}</h3>
            <img src={foundCharacter.image} alt={"character-avatar"}/>
            <p>Species : {foundCharacter.species}</p>
            <p>Gender : {foundCharacter.gender}</p>
            <p>Location : {foundCharacter.location.name}</p>
            <p>Created at : {foundCharacter.created}</p>
        </div>
    );
}

export default CharacterDetailCard;