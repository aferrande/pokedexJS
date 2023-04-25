// import pokeAbout from "./pokeAbout.js";

const mainURL = "https://pokeapi.co/api/v2";

const pokemonDetails = async (pokemon) => {
  try {
    const pokeInfo = await fetch(`${mainURL}/pokemon/${pokemon}`);
    const speciesInfo = await fetch(`${mainURL}/pokemon-species/${pokemon}`);
    const evoChainInfo = await fetch(`${mainURL}/evolution-chain/${pokemon}/`);

    const [aboutRes, speciesRes, evolutionRes] = await Promise.all([
      pokeInfo,
      speciesInfo,
      evoChainInfo,
    ]);

    const about = await aboutRes.json();
    const species = await speciesRes.json();
    const evolution = await evolutionRes.json();

    // console.log(about);
    console.log(species);
    // console.log(evolution);

    //about,

    let abili = [];
    for (let ability of about.abilities) {
      abili.push(ability.ability.name);
    }

    let eggGroup = [];
    for (let group of species.egg_groups) {
      eggGroup.push(group.name);
    }

    const pokeAboutData = {
      species: species.genera[7].genus,
      height: about.height * 10,
      weight: about.weight / 10,
      abilities: abili.join(", "),

      gender1: (species.gender_rate / 8) * 100, //so we subtract to take male
      gender2: 100 - (species.gender_rate / 8) * 100,
      eggGroups: eggGroup.join(", "),
    };

    pokeAbout(pokeAboutData);
  } catch (error) {
    console.error(error);
  }
};

// pokemonDetails(1);
// export default pokemonDetails;

//species.egg_groups[i].name

//base stats,

//evolution,
//evolution.chain.evolves_to[i].species.name //getPokemonImage(evolution.chain.evolves_to[i].species.url)
//evolution.chain.evolves_to[i].evolves_to[i].species.name //

//moves
