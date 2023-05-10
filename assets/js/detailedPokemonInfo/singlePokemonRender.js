const singlePokemonRender = (name, type1, type2, number, image) => {
  const renderDetailedInfo = `
  
  <section class="detailedContent ${type1}">
  <a class="backToHomePageArrow" href="/"
    ><svg
      xmlns="http://www.w3.org/2000/svg"
     
      fill="currentColor"
      class="bi bi-arrow-left"
      viewBox="0 0 16 16">
      <path
        fill-rule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" /></svg
  ></a>
  
  <span class="pokeNumBig">#${number}</span>
  <span class="pokeNameBig">${name}</span>
 
  
  <ol class="typesBig">
    <li class="typeBgBig  text-capitalize ${type1} typingBgColor">${type1}</li>
    <li class="typeBgBig text-capitalize ${type2}">${
    type2 !== undefined ? type2 : ""
  }</li>
  </ol>
  <img
    src="${image}"
    alt="${name} default sprite"
    class="pokeImgDetailed" />
  <div class="contentMenu">
    <div class="titles">
      <a href="javascript:void(0)" class="menuTitle" id="about" autofocus>About</a>
      <a href="javascript:void(0)" class="menuTitle" id="baseStats">Base Stats</a>
      <a href="javascript:void(0)" class="menuTitle" id="evolution">Evolution</a>
    </div>
  </div>
  <div class="detailedPokemonInfo">
    
  </div>
</section>

  `;

  document.title = name;
  const basePage = document.querySelector(".detailedCard");

  basePage.innerHTML = renderDetailedInfo;
};
