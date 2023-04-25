const pokeAbout = (pokemon) => {
  const aboutPokemon = `<ol class="first">
<li class="itemTitle">Species</li>
<li class="itemData">${pokemon.species}</li>
<li class="itemTitle">Height</li>
<li class="itemData">${pokemon.height} cm</li>
<li class="itemTitle">Weight</li>
<li class="itemData">${pokemon.weight} kg</li>
<li class="itemTitle">Abilities</li>
<li class="itemData text-capitalize">${pokemon.abilities}</li>
</ol>
<h4>Breeding</h4>
<ol class="second">
<li class="itemTitle">Gender</li>
<li class="itemData">M ${pokemon.gender1}% F ${pokemon.gender2}%</li>
<li class="itemTitle">Egg Groups</li>
<li class="itemData text-capitalize">${pokemon.eggGroups}</li>
</ol>`;

  const aboutPoke = document.querySelector(".aboutPokemon");
  aboutPoke.innerHTML += aboutPokemon;
};

// export default pokeAbout;

// about();
