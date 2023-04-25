// const getPokemonId = () => {
//   console.log("READY!");
//   const buttn = document.querySelectorAll(".clica");
//   console.log(buttn);
//   buttn.forEach((pokemon) =>
//     pokemon.addEventListener("click", () => {
//       console.log(pokemon);
//       fetchSinglePokemon(pokemon.id);
//     })
//   );
// };

const getPokemonId = () => {
  console.log("Ready");
  const div = document.querySelector(".pokedex");
  console.log(div);
  div.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.id);
      fetchSinglePokemon(e.target.id);
    }
  });
};

setTimeout(() => {
  getPokemonId();
}, 200);
