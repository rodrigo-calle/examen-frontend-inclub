import React from 'react';
import { Link } from "react-router-dom";
import './PokemonCard.scss';

const PokemonCard = ( props ) => {
    const { pokemon } = props;
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    return (
        <div className="pokemon-card" key={pokemon?.id}>
            <img src={pokemon?.sprites?.front_default}  alt={`${pokemon?.name}`}/>
            <p className="pokemon-name">{capitalizeFirstLetter(pokemon?.name)}</p>
            <p className="pokemon-type"><span>Type: </span>{pokemon?.types?.map((i) => (
                <><span key={i.type?.name} className="span-type">{i.type?.name}</span><br /></>
            ))}</p>
            <p className="pokemon-height"><span>Height: </span>{pokemon?.height}''</p>
            <p className="pokemon-weight"><span>Weight: </span> {pokemon?.weight}</p>
            <Link to={`/pokemon/${pokemon?.id}`}>
                <button className="detail-btn">Go to detail</button>    
            </Link>        
        </div>
    )

}

export default PokemonCard;