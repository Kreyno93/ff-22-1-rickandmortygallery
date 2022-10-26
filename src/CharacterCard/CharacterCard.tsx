import {CharacterModel} from "../CharacterModel/CharacterModel";
import "./CharacterCard.css"
import {Link} from "react-router-dom";
type CharacterCardProps = {
    character: CharacterModel;
}

export default function CharacterCard(props: CharacterCardProps) {
    return (
        <div className={"CharacterCard"}>
            <h3>{props.character.name}</h3>
            <Link to={"/character/"+props.character.id}>
            <img src={props.character.image} alt={props.character.name}/>
            </Link>
            <p>Status : {props.character.status}</p>
        </div>
    )
}