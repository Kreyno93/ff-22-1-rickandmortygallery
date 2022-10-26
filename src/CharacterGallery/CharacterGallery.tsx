import {CharacterModel} from "../CharacterModel/CharacterModel";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./CharacterGallery.css";
import {useState} from "react";
type GalleryProps = {
    character: CharacterModel[]
}

export default function CharacterGallery(props: GalleryProps) {

    const [filter,setFilter] = useState("")

    const filteredList = props.character.filter(({name}) =>
        name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <>
        <input type="text" onChange={(event) => setFilter(event.target.value)}/>
        <div className={"CharacterGallery"}>
            {filteredList.map((character: CharacterModel) =>
                <CharacterCard character={character} key={character.id}/>)}
        </div>
        </>
    )
}