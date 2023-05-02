//First letter uppercase (or could just 'text-transform: capitalize' in .css)
const firstLetterUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

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
        scrolled = true;
      }, 200);
    } else {
      loadingSpinner.classList.add("visually-hidden");
    }
  },
  {
    passive: true,
  }
);

const getPokemonImage = async (url) => {
  if (url !== undefined) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);
    const data = await resp.json();
    const image = data.sprites.other["official-artwork"].front_default;
    return image;
  }
};

const getPokemonId = () => {
  const div = document.querySelector(".content");
  console.log("main.js ", div);
  div.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log("id: ", e.target.id);
      fetchSinglePokemon(e.target.id);
    }
  });
};

getPokemonId();
// export const number = () => {};
