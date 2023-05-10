const baseStats = (stats) => {
  let total = 0;
  for (value of stats) {
    total += value;
  }

  const baseStats = `<ol class="baseStats">
<div class="stats">
  <li class="statTitle text-secondary">HP</li>
  <div class="progress">
    <div class="progress-bar bg-danger" role="progressbar" style="width: ${
      stats[0]
    }%" aria-valuenow="${stats[0]}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <li class="statData">${stats[0]}</li>
</div>
<div class="stats">
  <li class="statTitle text-secondary">Attack</li>
  <div class="progress">
    <div class="progress-bar bg-secondary" role="progressbar" style="width: ${
      stats[1]
    }%" aria-valuenow="${stats[1]}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <li class="statData">${stats[1]}</li>
</div>
<div class="stats">
  <li class="statTitle text-secondary">Defense</li>
  <div class="progress">
    <div class="progress-bar bg-warning" role="progressbar" style="width: ${
      stats[2]
    }%" aria-valuenow="${stats[2]}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <li class="statData">${stats[2]}</li>
</div>
<div class="stats">
  <li class="statTitle text-secondary">Sp.Atk</li>
  <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" style="width: ${
      stats[3]
    }%" aria-valuenow="${stats[3]}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <li class="statData">${stats[3]}</li>
</div>
<div class="stats">
  <li class="statTitle text-secondary">Sp.Def</li>
  <div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${
      stats[4]
    }%" aria-valuenow="${stats[4]}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <li class="statData">${stats[4]}</li>
</div>
<div class="stats">
  <li class="statTitle text-secondary">Speed</li>
  <div class="progress">
    <div class="progress-bar bg-black" role="progressbar" style="width: ${
      stats[5]
    }%" aria-valuenow="${stats[5]}" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <li class="statData">${stats[5]}</li>
</div>
<div class="stats">
  <li class="statTitle text-secondary">Total</li>
  <div class="progress">
    <div class="progress-bar" role="progressbar" style="width: ${
      total / 7.8
    }%" aria-valuenow="${
    total / 7.8
  }" aria-valuemin="0" aria-valuemax="100"></div>
  </div>
  <li class="statData">${total}</li>
</div>
</ol>`;

  const aboutPoke = document.querySelector(".detailedPokemonInfo");
  aboutPoke.innerHTML = baseStats;
};
