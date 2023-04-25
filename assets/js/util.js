import fetchPokemons from "./fetchPokemons.js";

//First letter uppercase (or could just 'text-transform: capitalize' in .css)
const firstLetterUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);
export default firstLetterUppercase;

//"infinite" scroll loading of Pokemons
let limit = 14;
let offset = 0;
const loadingSpinner = document.getElementById("loadingSpinner");
let scrolled = true;

window.addEventListener(
  "scroll",
  () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop >= scrollHeight - clientHeight && scrolled) {
      scrolled = false;
      loadingSpinner.classList.remove("visually-hidden");
      offset += 14;
      fetchPokemons(limit, offset);

      setTimeout(() => {
        getPokemonId();
        scrolled = true;
      }, 300);
    } else {
      loadingSpinner.classList.add("visually-hidden");
    }
  },
  {
    passive: true,
  }
);

export const number = () => {};
