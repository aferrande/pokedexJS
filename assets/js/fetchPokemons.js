const fetchPokemons = async (limit, offset) => {
  try {
    const pokemonList = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    );
    const data = await pokemonList.json();
    const pokemonsArray = await data.results;
    const pokemonDetail = await Promise.all(
      pokemonsArray.map(async (url) => {
        const response = await fetch(url.url);
        return response.json();
      })
    );

    pokemonDetail.map((pokemon) => pokemonInfo(pokemon));
  } catch (error) {
    console.error("Error found: ", error);
  }
};

const pokemonInfo = (data) => {
  const name = data.name;
  //as we only have 2 types per pokemon we can hard code the index, else we could use .map and destructuring
  const type1 = data.types[0].type.name;
  const type2 = data.types[1]?.type.name;
  const id = data.id;
  const image = data.sprites.other["official-artwork"].front_default;
  renderPokedex(name, type1, type2, id, image);
};

fetchPokemons(14, 0);
