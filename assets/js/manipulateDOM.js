const pokemonDetails = (name, type1, type2, id, image) => {
  //create elements needed, and get our list
  const pokemonImg = document.createElement("img");
  const pokedex = document.querySelector(".pokedex");
  const pokemonTypes = document.createElement("div");
  const pokemonTyping = document.createElement("ol");
  const pokemonLi = document.createElement("li");
  const mainType = document.createElement("li");
  const secondaryType = document.createElement("li");

  //add the image and elements we want inside the card
  pokemonImg.classList.add("pokeImg");
  pokemonImg.src = image;
  pokemonImg.alt = `${name} image`;
  //data.sprites.other["official-artwork"].front_shiny;
  pokemonLi.setAttribute("id", `${id}`);
  pokemonLi.classList.add("card", `${type1}`);
  pokemonLi.innerText = name.charAt(0).toUpperCase() + name.slice(1);
  pokemonTypes.classList.add("typing");
  mainType.innerText = type1.charAt(0).toUpperCase() + type1.slice(1);
  secondaryType.innerText =
    type2 !== undefined ? type2.charAt(0).toUpperCase() + type2.slice(1) : "";
  pokemonTyping.classList.add("types");

  //append all
  pokedex.appendChild(pokemonLi);
  pokemonTyping.append(mainType, secondaryType);
  pokemonTypes.append(pokemonTyping, pokemonImg);
  pokemonLi.appendChild(pokemonTypes);
  // pokemonLi.appendChild(pokemonImg);
};

export default pokemonDetails;
