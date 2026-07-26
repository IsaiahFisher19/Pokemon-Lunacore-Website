const pokemonData = [
  { dex: "001", name: "RATTISS" },
  { dex: "002", name: "PLANTAKANS" },
  { dex: "003", name: "KOBOTHORN" },
  { dex: "004", name: "POWOW" },
  { dex: "005", name: "BAADUPE" },
  { dex: "006", name: "DEMOYOTE" },
  { dex: "007", name: "SPIKILK" },
  { dex: "008", name: "TINSYIX" },
  { dex: "009", name: "VENOMOSILK" },
  { dex: "010", name: "EGVA" },
  { dex: "011", name: "LARVABUZZ" },
  { dex: "012", name: "VOLTADYBUG" },
  { dex: "013", name: "RUBIRD" },
  { dex: "014", name: "HARKROWN" },
  { dex: "015", name: "HAMTA" },
  { dex: "016", name: "SUPAMTER" },
  { dex: "017", name: "ALONCOLE" },
  { dex: "018", name: "MINQUEZ" },
  { dex: "019", name: "VASTEKUEZ" },
  { dex: "020", name: "DORSAIL" },
  { dex: "021", name: "LEOFISH" },
  { dex: "022", name: "PUEPPEY" },
  { dex: "023", name: "BONFERNO" },
  { dex: "024", name: "MYSTINFERAT" },
  { dex: "025", name: "TOXIPUP" },
  { dex: "026", name: "DIRTOXIBARK" },
  { dex: "027", name: "WILDLIFORN" },
  { dex: "028", name: "VENUSFLIELM" },
  { dex: "029", name: "SPIKINDLPE" },
  { dex: "030", name: "OVERFUMEPUE" },
  { dex: "031", name: "MINIPOOCH" },
  { dex: "032", name: "DINGROWL" },
  { dex: "033", name: "SALMITE" },
  { dex: "034", name: "SLUDGEMANDER" },
  { dex: "035", name: "TOXZILLA" },
  { dex: "036", name: "TIMETOCKO" },
  { dex: "037", name: "CHIPILE" },
  { dex: "038", name: "FRIEDAROCK" },
  { dex: "039", name: "CAMPIRE" },
  { dex: "040", name: "INFLAMABURN" },
  { dex: "041", name: "CALFIRSIP" },
  { dex: "042", name: "SIPPAGAIST" },
  { dex: "043", name: "DASHIPILLA" },
  { dex: "044", name: "PUPHRYSALIS" },
  { dex: "045", name: "BARKUFFLY" },
  { dex: "046", name: "NEZUORI" },
  { dex: "047", name: "WURREL" },
  { dex: "048", name: "FOOTBY" },
  { dex: "049", name: "KROXHLING" },
  { dex: "050", name: "ROKKACHER" },
  { dex: "051", name: "SHARKSTURF" },
  { dex: "052", name: "HUMMLY" },
  { dex: "053", name: "HUMMZLY" },
  { dex: "054", name: "REXIORN" },
  { dex: "055", name: "SMOSEED" },
  { dex: "056", name: "CALIFORN" },
  { dex: "057", name: "FLOWESIGHT" },
  { dex: "058", name: "PUNYRAX" },
  { dex: "059", name: "SPIKERAX" },
  { dex: "060", name: "CALCALATER" },
  { dex: "061", name: "WIRESTRIKE" },
  { dex: "062", name: "HACKAONITRON" },
  { dex: "063", name: "QILIBRA" }
];

function formatName(name) {
  return name.charAt(0) + name.slice(1).toLowerCase();
}

function createSpritePlaceholder(label) {
  return `
    <div class="sprite-box">
      <span>${label}</span>
    </div>
  `;
}

function renderPokemonList(list) {
  const grid = document.getElementById("pokedexGrid");
  grid.innerHTML = "";

  list.forEach(mon => {
    const card = document.createElement("article");
    card.className = "dex-card";

    card.innerHTML = `
      <div class="dex-card-header">
        <span class="dex-number">#${mon.dex}</span>
        <h3>${formatName(mon.name)}</h3>
      </div>

      <p class="dex-subtext">Inflamous Region Pokémon</p>

      <p class="dex-description">
        Pokédex description coming soon. You can replace this with each
        Pokémon’s real lore, types, category, and evolution details.
      </p>

      <div class="sprite-gallery">
        ${createSpritePlaceholder("Front Sprite")}
        ${createSpritePlaceholder("Back Sprite")}
        ${createSpritePlaceholder("Icon")}
        ${createSpritePlaceholder("Overworld")}
        ${createSpritePlaceholder("Footprint")}
      </div>
    `;

    grid.appendChild(card);
  });
}

function setupSearch() {
  const searchBox = document.getElementById("dexSearch");

  searchBox.addEventListener("input", () => {
    const value = searchBox.value.trim().toLowerCase();

    const filtered = pokemonData.filter(mon =>
      mon.name.toLowerCase().includes(value)
    );

    renderPokemonList(filtered);
  });
}

renderPokemonList(pokemonData);
setupSearch();