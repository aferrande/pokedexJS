import firstLetterUppercase from "./util.js";

const renderPokedex = (name, type1, type2, id, image) => {
  //we could use document.createElement and manipulate the DOM that way, but it would leave us with an extense and cluttered code. So we'll return HTML as if returning JSX when using React, thus simplyfing and making our code easier to read

  //inside our card we need a name, typings, and image. We'll use the id for identifying and further when we expand the pokemon info
  const render = `
    <li id=poke${id} class="card ${type1}">
    <span class="pokeNum">#${id}</span>
      <span class="pokeName">${firstLetterUppercase(name)}</span>
      <div class="info">
        <ol class="types">
          <li class="typeBg ${type1} typingBg">
          ${firstLetterUppercase(type1)}</li>
          <li class="typeBg ${type2}">${
    type2 !== undefined ? firstLetterUppercase(type2) : ""
  }</li>
        </ol>
        <img src="${image}" alt="${name} default sprite" class="pokeImg">
        <button id="${id}" class="clica stretched-link"></button>
        
      </div>
      
    </li>
    
  `;

  // console.log(document.getElementsByClassName("pokedex"));
  // console.log("query: ", document.querySelector(".pokedex"));
  const pokedex = document.querySelector(".pokedex");
  pokedex.innerHTML += render;
};

export default renderPokedex;
//../../pokemonDetailedInfo.html
//<a  href="./pokemonDetailedInfo.html#${id}"  id="${id}" class="clica stretched-link"></a>
