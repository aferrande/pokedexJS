const getPokemonGen = () => {
  let executed = false;
  if (!executed) {
    executed = true;
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
  }
};

window.onload = getPokemonGen;
