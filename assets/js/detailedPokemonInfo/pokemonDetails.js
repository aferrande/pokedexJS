const mainURL = "https://pokeapi.co/api/v2";

const pokemonDetails = async (pokemon) => {
  try {
    const speciesInfo = await fetch(`${mainURL}/pokemon-species/${pokemon}`);
    const species = await speciesInfo.json();

    const evoChainInfo = await fetch(`${species.evolution_chain.url}`);
    const evolution = await evoChainInfo.json();

    const pokeInfo = await fetch(`${mainURL}/pokemon/${pokemon}`);
    const about = await pokeInfo.json();

    //about
    let abilities = [];
    for (let ability of about.abilities) {
      abilities.push(ability.ability.name);
    }

    let eggGroup = [];
    for (let group of species.egg_groups) {
      eggGroup.push(group.name);
    }

    let specimen = species.genera[7]?.genus;
    let spec =
      specimen !== undefined
        ? species.genera[7].genus
        : species.genera[3].genus;
    const pokeAboutData = {
      species: spec,
      height: about.height * 10,
      weight: about.weight / 10,
      abilities: abilities.join(", "),
      gender1: (species.gender_rate / 8) * 100,
      gender2: 100 - (species.gender_rate / 8) * 100, //as gender rate is given on female basis, we subtract to take male %
      eggGroups: eggGroup.join(", "),
    };

    pokeAbout(pokeAboutData);
    const showAbout = document.querySelector("#about");
    showAbout.addEventListener("click", (e) => {
      pokeAbout(pokeAboutData);
    });

    //base stats
    let baseStatsValue = [];
    for (let stat of about.stats) {
      baseStatsValue.push(stat.base_stat);
    }

    const showStats = document.querySelector("#baseStats");
    showStats.addEventListener("click", (e) => {
      baseStats(baseStatsValue);
    });

    //evolution chain
    const name1 = evolution.chain.species.name; //firstEvo

    const name2 = evolution.chain.evolves_to[0]?.species.name; //secondEvo

    const name3 = evolution.chain.evolves_to[0]?.evolves_to[0]?.species.name; //thirdEvo

    const nameArray = [name1, name2, name3];

    const imageArray = await Promise.all(
      nameArray.map(async (name) => {
        const image = await getPokemonImage(name);
        return image;
      })
    );

    const showEvos = document.querySelector("#evolution");
    showEvos.addEventListener("click", () => {
      if (imageArray[2] !== undefined) {
        pokeEvolution(
          imageArray[0],
          name1,
          imageArray[1],
          name2,
          imageArray[2],
          name3
        );
      } else {
        pokeEvolution(imageArray[0], name1, imageArray[1], name2);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const getPokemonImage = async (url) => {
  if (url === undefined) {
    return;
  }
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);
  const data = await resp.json();
  const image = data.sprites.other["official-artwork"].front_default;
  return image;
};
