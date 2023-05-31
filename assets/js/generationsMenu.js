const getPokemonGen = () => {
  const div = document.querySelector(".pokeGens");
  div.addEventListener("click", (e) => {
    if (e.target.classList[1] === "genTitleLink") {
      setTimeout(() => {
        getPokemonId();
        fetchPokemons(10, +e.target.dataset.value);
        infiniteScrollLimiter(true, 10, +e.target.dataset.value);
      }, 200);
    }
  });
};

//calling getPokemon straight into the eventlistener/window.onload method was giving rarely an error where the page was not rendering fast enough for the querySelector to take effect. Using setTimeout on 100ms appears to be the sweet spot for an error free, but it still suggested to not working properly. Not sure if this is the best way to solve it though.
window.addEventListener(
  "load",
  () => {
    setTimeout(() => {
      getPokemonGen();
    });
  },
  100
);
