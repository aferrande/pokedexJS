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

window.onload = () => {
  getPokemonGen();
};

/*
first gen 151, 0
second 251, 151
third 386, 251
fourth 493, 386
fifth 649, 493
sixth 721, 649
seventh 809, 721
eighth 905, 809
ninth 1015, 905
*/
