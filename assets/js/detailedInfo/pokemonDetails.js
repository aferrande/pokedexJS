const mainURL = "https://pokeapi.co/api/v2";

const pokemonDetails = async (pokemon) => {
  try {
    const pokeInfo = await fetch(`${mainURL}/pokemon/${pokemon}`);
    const speciesInfo = await fetch(`${mainURL}/pokemon-species/${pokemon}`);

    const about = await pokeInfo.json();
    const species = await speciesInfo.json();

    const evoChainInfo = await fetch(`${species.evolution_chain.url}`);
    const evolution = await evoChainInfo.json();

    //about
    let abilities = [];
    for (let ability of about.abilities) {
      abilities.push(ability.ability.name);
    }

    let eggGroup = [];
    for (let group of species.egg_groups) {
      eggGroup.push(group.name);
    }

    const pokeAboutData = {
      species: species.genera[7].genus,
      height: about.height * 10,
      weight: about.weight / 10,
      abilities: abilities.join(", "),
      gender1: (species.gender_rate / 8) * 100, //so we subtract to take male
      gender2: 100 - (species.gender_rate / 8) * 100,
      eggGroups: eggGroup.join(", "),
    };

    pokeAbout(pokeAboutData);
    const showAbout = document.querySelector("#about");
    showAbout.addEventListener("click", () => pokeAbout(pokeAboutData));

    //base stats
    let baseStatsValue = [];
    for (let stat of about.stats) {
      baseStatsValue.push(stat.base_stat);
    }

    const showStats = document.querySelector("#baseStats");
    showStats.addEventListener("click", () => baseStats(baseStatsValue));

    //evolution chain
    const name1 = evolution.chain.species.name; //firstEvo
    const image1 = await getPokemonImage(evolution.chain.species.name);

    const name2 = evolution.chain.evolves_to[0]?.species.name; //secondEvo
    const image2 = await getPokemonImage(
      evolution.chain.evolves_to[0]?.species.name
    );
    const name3 = evolution.chain.evolves_to[0]?.evolves_to[0]?.species.name; //thirdEvo
    const image3 = await getPokemonImage(
      evolution.chain.evolves_to[0]?.evolves_to[0]?.species.name
    );

    const showEvos = document.querySelector("#evolution");
    showEvos.addEventListener("click", () => {
      if (image3 !== undefined) {
        pokeEvolution(image1, name1, image2, name2, image3, name3);
      } else {
        pokeEvolution(image1, name1, image2, name2);
      }
    });
  } catch (error) {
    console.error(error);
  }
};
