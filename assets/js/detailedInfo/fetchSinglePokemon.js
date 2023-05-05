const fetchSinglePokemon = async (id) => {
  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await pokemon.json();

    const name = data.name;
    const type1 = data.types[0].type.name;
    const type2 = data.types[1]?.type.name;
    const number = data.id;
    const image = data.sprites.other["official-artwork"].front_default;

    pageRender(name, type1, type2, number, image);
    pokemonDetails(id);
  } catch (error) {
    console.error(error);
  }
};
