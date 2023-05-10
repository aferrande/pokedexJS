const evoHtml = (image1, image2, name1, name2) => {
  return `<div class="evolutionChain">
                <div class="evoBlock">
                <img src="${image1}" alt="${name1} image" class="evoImg">
                <figcaption class="text-capitalize">${name1}</figcaption>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="evoArrow bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                </svg>
                <div class="evoBlock">
                <img src="${image2}" alt="${name2} image" class="evoImg">
                <figcaption class="text-capitalize">${name2}</figcaption>
                </div>
              </div>;`;
};

const insertToHtml = (evoChain) => {
  const pokeEvo = document.querySelector(".detailedPokemonInfo");
  pokeEvo.innerHTML = evoChain;
};

const pokeEvolution = (image1, name1, image2, name2, image3, name3) => {
  if (image2 === undefined) {
    const NoEvolution = "<h4>Pokemon has no evolution</h4>";
    insertToHtml(NoEvolution);
  } else if (image3 !== undefined) {
    const DoubleEvoChain = `<h4>Evolution Chain</h4>
    ${evoHtml(image1, image2, name1, name2)}
    <hr class="lineBreak">
    ${evoHtml(image2, image3, name2, name3)}
    `;
    insertToHtml(DoubleEvoChain);
  } else {
    const SingleEvoChain = `<h4>Evolution Chain</h4>
    ${evoHtml(image1, image2, name1, name2)}`;
    insertToHtml(SingleEvoChain);
  }
};
