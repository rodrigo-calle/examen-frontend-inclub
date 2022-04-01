import React, { useEffect, useState } from 'react'
import PokemonCard from "./PokemonCard";
import './PokemonsList.scss';
import { pokeapi, getPokemon } from "../../services/pokeapi";
import { Link } from "react-router-dom";

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loader, setLoader] = useState(false);
    const [pokemonsToList, setPokemonsToList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState([]);
    
    const loadingPokemon = async (data) => {
        const poke = await Promise.all(data.map(async (pokemon) => {
            const pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
        }));

        setPokemonsToList(poke);
    }
    useEffect(() => {
        const loadAllPokemons = async () => {
            try {
                setLoader(true);
                const response = await pokeapi.getAllPokemons();
                const data = await response.json();
                setPokemons(data.results);   
                await loadingPokemon(data.results);
            } catch (error) {
                console.log(error);
            } finally {
                setLoader(false);
            }
        }
        loadAllPokemons();
    }, []);

    if(loader === true) {
        return (
            <>
            <h2 style={{color: '#3761a8'}}>Loading...</h2>
            <img 
            height={150}
            src="https://courses.cs.washington.edu/courses/cse154/17sp/project/pokedex-2/resources/starter/resources/icons/loading-pikachu.gif" 
            alt="loading"
            /></>
        )
    }

    return (
        <div className="container-pokemons-list">
            <h1 className="container-pokemons-list__title">Pokemons List</h1>
            <div className="container-search-and-add-btn">
                <Link to="/pokemon/add">
                    <button className="add-btn">Add Pokemon</button>
                </Link>
                    <br />
                <input type="text" className="search-bar" placeholder="type some pokemon name" onChange={event => {setSearchTerm(event.target.value)}} /> 
                <span style={{color: 'red'}}>**Just type names of the pokemons list bellow**</span>
            </div>

            <div className="container-list-cards">
                { pokemonsToList?.filter((val)=> {
                    if(searchTerm === '') {
                        return val;
                    } else if ( val.name.toLowerCase().includes(searchTerm.toLowerCase()) === true) {
                        return val;
                    } 
                }).map((item) => (
                    <PokemonCard key={item?.id} pokemon={item} />
                ))} 
            </div>
        </div>
    )
}

export default PokemonList;

// <div className="container-list-cards">
// { pokemonsToList?.map((item) => (
//     <PokemonCard key={item?.id} pokemon={item} />
// ))} 
// </div>