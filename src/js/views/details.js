import React, { useState, useContext, useEffect } from "react";
import { CharactersCard } from "../component/CharactersCard";
import { PlanetsCard } from "../component/PlanetsCard";
import { StarshipsCard } from "../component/StarshipsCard";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Details = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [character, setCharacter] = useState();
    const [planet, setPlanet] = useState();
    const [starship, setStarship] = useState();

    useEffect(() => {
        if (params.uid && params.entities === "characters") {
            const selectedCharacter = store.people.find((char) => char.uid === params.uid);
            setCharacter(selectedCharacter);
        }
    }, [params.uid, params.entities, store.people]);

    useEffect(() => {
        if (params.uid && params.entities === "planets") {
            const selectedPlanet = store.planets.find((planet) => planet.uid === params.uid);
            setPlanet(selectedPlanet);
        }
    }, [params.uid, params.entities, store.planets]);

    useEffect(() => {
        if (params.uid && params.entities === "starships") {
            const selectedStarship = store.starships.find((starship) => starship.uid === params.uid);
            setStarship(selectedStarship);
        }
    }, [params.uid, params.entities, store.starships]);

    return (
        <div className="container">
            {character && params.entities === "characters" && (
                <CharactersCard character={character} />
            )}
            {planet && params.entities === "planets" && (
                <PlanetsCard planet={planet} />
            )}
            {starship && params.entities === "starships" && (
                <StarshipsCard starship={starship} />
            )}
        </div>
    );
};
