//button function for single pokemon detail, we add the eventlistener on the parent div, so we don't add one to every single button
const getPokemonId = () => {
  const cards = document.querySelector(".pokedex");
  cards.addEventListener("click", (e) => {
    if (e.target.classList[0] === "pokeCard") {
      infiniteScrollLimiter(true, 0, 0);
      fetchSinglePokemon(e.target.id);
    }
  });
};

//"infinite" scroll loading of Pokemons + debounced
let timeoutHandler;
const debounce = (callback, wait) => {
  return (...args) => {
    const context = this;
    clearTimeout(timeoutHandler);
    timeoutHandler = setTimeout(() => callback.apply(context, args), wait);
  };
};

const infiniteScrollLimiter = (isScrolled, limit, value) => {
  let offset = value;
  let scrolled = isScrolled;

  const loadingSpinner = document.getElementById("loadingSpinner");

  window.addEventListener(
    "scroll",
    debounce(() => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrolled && limit > 0 && scrollTop >= scrollHeight - clientHeight) {
        scrolled = false;
        loadingSpinner.classList.remove("visually-hidden");
        offset += +limit;
        fetchPokemons(limit, offset);
        scrolled = true;
      } else {
        loadingSpinner?.classList.add("visually-hidden");
      }
    }, 250)
  );
};
