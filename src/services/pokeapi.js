const URL_BASE = process.env.REACT_APP_API_URL_BASE;

const getAllPokemons = () => {
    const payload = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return fetch(`${URL_BASE}/pokemon?limit=100&offset=200`, payload);
  };


export async function getAllPokemonsService(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
  })
}

export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      resolve(data);
    })
  })
}
export const pokeapi = {
    getAllPokemons,
}