const pokeAbout = (pokemon) => {
  if (pokemon.gender1 < 0 || pokemon.gender2 < 0) {
    pokemon.gender1 = 0;
    pokemon.gender2 = 0;
  }

  const aboutPokemon = `<ol class="mainAbout">
  <li class="text-secondary">Species</li>
  <li>${pokemon.species}</li>
  <li class="text-secondary">Height</li>
  <li>${pokemon.height} cm</li>
  <li class="text-secondary">Weight</li>
  <li>${pokemon.weight} kg</li>
  <li class="text-secondary">Abilities</li>
  <li class="itemData text-capitalize">${pokemon.abilities}</li>
</ol>
<hr class="lineBreak">
<h4>Breeding</h4>
<ol class="breedingInfo">
  <li class="text-secondary">Gender</li>
  <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-female" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"/>
</svg>${pokemon.gender1}%  &nbsp;&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gender-male" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
</svg>${pokemon.gender2}%</li>
  <li class="text-secondary">Egg Groups</li>
  <li class="itemData text-capitalize">${pokemon.eggGroups}</li>
</ol>`;

  const aboutPoke = document.querySelector(".detailedPokemonInfo");
  aboutPoke.innerHTML = aboutPokemon;
};
