import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import './PokemonDetail.scss';
const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const PokemonDetail = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(`${URL_BASE}/pokemon/${id}`)
        .then(response => response.json())
        .then(data => setPokemon(data));
    }, [])
    console.log(pokemon);
    return (
        <div className="pokemon-detail-container">
            <h1>Pokemon Detail</h1>
            <Link to="/" className="back-link">Go to back {'>>'} </Link>
            <div className="pokedex">
                <div className="pokedex-screen">
                    <p className="pokemon-name">{pokemon?.name}</p>
                    <div className="pokemon-information">
                        <img src={pokemon?.sprites?.front_default}  alt={`${pokemon?.name}`} />
                        <div className="pokemon-information-description">
                            <p className="pokemon-type"><span>Type: </span>{pokemon?.types?.map((i) => (
                                <><span className="span-type">{i.type?.name}</span><br /></>
                            ))}</p>
                            <p className="pokemon-height"><span>Height: </span>{pokemon?.height}''</p>
                            <p className="pokemon-weight"><span>Weight: </span> {pokemon?.weight}</p>
                            <p className="pokemon-weight"><span>Base Experience: </span> {pokemon?.base_experience}</p>
                        </div>
                    </div>                
                </div>
                <div className="btns">
                    <div className="play-btn"/>
                    <div className="green-bnt"/>
                    <div className="blue-bnt"/>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetail;