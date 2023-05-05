const renderPokedex = (name, type1, type2, id, image) => {
  //we could use document.createElement and manipulate the DOM that way, but it would leave us with an extense and cluttered code. So we'll return HTML as if returning JSX when using React.

  const render = `
    <li id=poke${id} class="card ${type1}">
    <span class="pokeNum">#${id}</span>
      <span class="pokeName">${firstLetterUppercase(name)}</span>
      <div class="info">
        <ol class="types">
          <li class="typeBg ${type1} typingBgColor">
          ${firstLetterUppercase(type1)}</li>
          <li class="typeBg ${type2}">${
    type2 !== undefined ? firstLetterUppercase(type2) : ""
  }</li>
        </ol>
        <img src="${image}" alt="${name} default sprite" class="pokeImg">
        <nav>
        <a href="#pokemon" id="${id}" class="bttnStyling stretched-link"></a>
        </nav>
      </div>
    </li>
  `;

  const pokedex = document.querySelector(".pokedex");
  pokedex.innerHTML += render;
};
