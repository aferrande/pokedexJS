const pageRender = (name, type1, type2, number, image) => {
  const renderDetailedInfo = `
  <div class="detailedInfo">
  <section class="detailedContent ${type1}">
  <a class="backToHomePageArrow" href="./index.html"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="currentColor"
      class="bi bi-arrow-left"
      viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" /></svg
  ></a>

  <span class="pokeNameDetailed">${name}</span>
  <span class="pokeNumDetailed">#${number}</span>
  <ol class="typesDetailed">
    <li class="typeBgDetailed  text-capitalize ${type1} typingBg">${type1}</li>
    <li class="typeBgDetailed text-capitalize ${type2}">${
    type2 !== undefined ? type2 : ""
  }</li>
  </ol>
  <img
    src="${image}"
    alt="${name} default sprite"
    class="pokeImgDetailed" />
  <div class="mainDetailedContent">
    <div class="titles">
      <a href="#" class="pokemonInfo" id="about" autofocus>About</a>
      <a href="#" class="pokemonInfo" id="baseStats">Base Stats</a>
      <a href="#" class="pokemonInfo" id="evolution">Evolution</a>
      <a href="#" class="pokemonInfo" id="moves">Moves</a>
    </div>
  </div>
  <div class="aboutPokemon">
    
  </div>
</section>
</div>
  `;

  document.title = name;
  // const basePage = document.querySelector(".detailedInfo");
  const basePage = document.querySelector(".pokedex");
  basePage.innerHTML = "";
  basePage.innerHTML += renderDetailedInfo;
};
