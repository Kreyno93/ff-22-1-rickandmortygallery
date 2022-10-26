import React, {useEffect, useState} from 'react';
import './App.css';
import CharacterGallery from "./CharacterGallery/CharacterGallery";
import logo from "./rickandmortylogo.png"
import axios from "axios";
import {HashRouter, Route, Routes} from "react-router-dom";
import CharacterDetailCard from "./CharacterDetailCard/CharacterDetailCard";


function App() {


    const [characterList, setCharacterList] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                return response.data
            })
            .then((data) => {
                setCharacterList(data.results)
            })
            .catch((error) => {
                console.error("No Characters found! : " + error)
            })
    }, [])

    return (
        <div className="App">
            <header className={"App-header"}>Rick and Morty Character Gallery
                <img
                    src={logo}
                    className="App-logo" alt="logo"/>
                <HashRouter>
                    <Routes>
                        <Route path={"/"} element={<CharacterGallery character={characterList}/>}/>
                        <Route path={"/character/:id"} element={<CharacterDetailCard characterList={characterList}/>}/>
                    </Routes>
                </HashRouter>
            </header>
        </div>
    );
}

export default App;
