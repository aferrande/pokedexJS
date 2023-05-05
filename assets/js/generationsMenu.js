const genMenu = () => {
  const menu = `
  <h1>Choose a Pokemon Generation</h1>
  <main class="pokeGens">
  <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="0">Generation I
        </a>
        <img class="genStarters" id="gen1Starter" src="./assets/images/gen1.png" alt="first gen starters">
    </div>
    </nav>
    <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="151">Generation II
        </a>
        <img class="genStarters" id="gen2Starter" src="./assets/images/gen2.jpg" alt="second gen starters">
        </div>
        </nav>
    <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="251">Generation III
        </a>
        <img class="genStarters" id="gen3Starter" src="./assets/images/gen3.jpg" alt="third gen starters">
        </div>
        </nav>
    <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="386">Generation IV
        </a>
        <img class="genStarters" id="gen4Starter" src="./assets/images/gen4.jpg" alt="fourth gen starters">
        </div>
        </nav>
    <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="493">Generation V
        </a>
        <img class="genStarters" id="gen5Starter" src="./assets/images/gen5.png" alt="fifth gen starters">
        </div>
        </nav>
    <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="649">Generation VI
        </a>
        <img class="genStarters" id="gen6Starter" src="./assets/images/gen6.png" alt="sixth gen starters">
        </div>
        </nav>
    <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="721">Generation VII
        </a>
        <img class="genStarters" id="gen7Starter" src="./assets/images/gen7.png" alt="seventh gen starters">
        </div>
        </nav>
    <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="809">Generation VIII
        </a>
        <img class="genStarters" id="gen8Starter" src="./assets/images/gen8.png" alt="eighth gen starters">
        </div>
        </nav>
    <nav>
    <div class="card genCard">
        <a class="stretched-link genTitleLink" href="#pokedex" data-value="905">Generation IX
        </a>
        <img class="genStarters" id="gen9Starter" src="./assets/images/gen9.png" alt="ninth gen starters">
        </div>
        </nav>
   
  </main>`;

  const insertToSection = document.querySelector(".content");
  insertToSection.innerHTML = menu;
};
genMenu();

const getPokemonGen = () => {
  const div = document.querySelector(".pokeGens");
  div.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      basePage();
      infiniteScrollLimiter(+e.target.dataset.value);

      fetchPokemons(14, +e.target.dataset.value);
    }
  });
};
getPokemonGen();

/*
first gen 151, 0
second 251, 151
third 386, 251
fourth 493, 386
fifth 649, 493
sixth 721, 649
seventh 809, 721
eighth 905, 809
ninth 1015, 905
*/
