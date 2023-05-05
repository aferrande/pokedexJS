//First letter uppercase (or could just 'text-transform: capitalize' in .css)
const firstLetterUppercase = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1);

//"infinite" scroll loading of Pokemons

const infiniteScrollLimiter = (value) => {
  let limit = 14;
  let offset = value;
  // let total = value;
  let scrolled = true;
  const loadingSpinner = document.getElementById("loadingSpinner");
  window.addEventListener(
    "scroll",
    () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop >= scrollHeight - clientHeight && scrolled) {
        scrolled = false;
        loadingSpinner.classList.remove("visually-hidden");
        offset += +14;
        console.log(offset);
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
};

//image getter for easier work when possible
const getPokemonImage = async (url) => {
  if (url !== undefined) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${url}`);
    const data = await resp.json();
    const image = data.sprites.other["official-artwork"].front_default;
    return image;
  }
};

//button function for single pokemon detail, so we don't add an eventListener to every single button, but instead to the parent div
const getPokemonId = () => {
  const div = document.querySelector(".content");
  div.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      fetchSinglePokemon(e.target.id);
    }
  });
};
getPokemonId();
