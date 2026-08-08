// Pokémon Lunacore — Website-Filtered Shiny Variant Gallery (Shiny Assets Only)
const shinyVariantFiles = [
  { imageId: "aloncole", front: "aloncole-shiny-front.png", back: "aloncole-shiny-back.png", icon: "aloncole-shiny-icon.png", overworld: "" },
  { imageId: "arbok-1", front: "arbok-1-shiny-front.png", back: "arbok-1-shiny-back.png", icon: "arbok-1-shiny-icon.png", overworld: "arbok-1-shiny-overworld.png" },
  { imageId: "baadupe", front: "baadupe-shiny-front.png", back: "baadupe-shiny-back.png", icon: "baadupe-shiny-icon.png", overworld: "baadupe-shiny-overworld.png" },
  { imageId: "bagon-2", front: "bagon-2-shiny-front.png", back: "bagon-2-shiny-back.png", icon: "bagon-2-shiny-icon.png", overworld: "bagon-2-shiny-overworld.png" },
  { imageId: "barkuffly", front: "barkuffly-shiny-front.png", back: "barkuffly-shiny-back.png", icon: "", overworld: "" },
  { imageId: "blitzle-1", front: "blitzle-1-shiny-front.png", back: "blitzle-1-shiny-back.png", icon: "blitzle-1-shiny-icon.png", overworld: "blitzle-1-shiny-overworld.png" },
  { imageId: "bonferno", front: "bonferno-shiny-front.png", back: "bonferno-shiny-back.png", icon: "bonferno-shiny-icon.png", overworld: "bonferno-shiny-overworld.png" },
  { imageId: "calcalater", front: "calcalater-shiny-front.png", back: "calcalater-shiny-back.png", icon: "calcalater-shiny-icon.png", overworld: "" },
  { imageId: "calfirsip", front: "calfirsip-shiny-front.png", back: "calfirsip-shiny-back.png", icon: "calfirsip-shiny-icon.png", overworld: "calfirsip-shiny-overworld.png" },
  { imageId: "californ", front: "californ-shiny-front.png", back: "californ-shiny-back.png", icon: "", overworld: "" },
  { imageId: "campire", front: "campire-shiny-front.png", back: "campire-shiny-back.png", icon: "campire-shiny-icon.png", overworld: "campire-shiny-overworld.png" },
  { imageId: "chingling-1", front: "chingling-1-shiny-front.png", back: "chingling-1-shiny-back.png", icon: "chingling-1-shiny-icon.png", overworld: "chingling-1-shiny-overworld.png" },
  { imageId: "chipile", front: "chipile-shiny-front.png", back: "chipile-shiny-back.png", icon: "chipile-shiny-icon.png", overworld: "chipile-shiny-overworld.png" },
  { imageId: "dashipilla", front: "dashipilla-shiny-front.png", back: "dashipilla-shiny-back.png", icon: "", overworld: "" },
  { imageId: "demoyote", front: "demoyote-shiny-front.png", back: "demoyote-shiny-back.png", icon: "demoyote-shiny-icon.png", overworld: "demoyote-shiny-overworld.png" },
  { imageId: "dingrowl", front: "dingrowl-shiny-front.png", back: "dingrowl-shiny-back.png", icon: "dingrowl-shiny-icon.png", overworld: "dingrowl-shiny-overworld.png" },
  { imageId: "dorsail", front: "dorsail-shiny-front.png", back: "dorsail-shiny-back.png", icon: "dorsail-shiny-icon.png", overworld: "dorsail-shiny-overworld.png" },
  { imageId: "egva", front: "egva-shiny-front.png", back: "egva-shiny-back.png", icon: "egva-shiny-icon.png", overworld: "egva-shiny-overworld.png" },
  { imageId: "ekans-1", front: "ekans-1-shiny-front.png", back: "ekans-1-shiny-back.png", icon: "ekans-1-shiny-icon.png", overworld: "ekans-1-shiny-overworld.png" },
  { imageId: "emboar-1", front: "emboar-1-shiny-front.png", back: "emboar-1-shiny-back.png", icon: "emboar-1-shiny-icon.png", overworld: "" },
  { imageId: "flabebe-5", front: "", back: "", icon: "flabebe-5-shiny-icon.png", overworld: "" },
  { imageId: "floette-6", front: "floette-6-shiny-front.png", back: "floette-6-shiny-back.png", icon: "floette-6-shiny-icon.png", overworld: "" },
  { imageId: "friedarock", front: "friedarock-shiny-front.png", back: "friedarock-shiny-back.png", icon: "friedarock-shiny-icon.png", overworld: "friedarock-shiny-overworld.png" },
  { imageId: "hamta", front: "hamta-shiny-front.png", back: "hamta-shiny-back.png", icon: "hamta-shiny-icon.png", overworld: "hamta-shiny-overworld.png" },
  { imageId: "harkrown", front: "harkrown-shiny-front.png", back: "harkrown-shiny-back.png", icon: "harkrown-shiny-icon.png", overworld: "" },
  { imageId: "hummly", front: "hummly-shiny-front.png", back: "hummly-shiny-back.png", icon: "hummly-shiny-icon.png", overworld: "" },
  { imageId: "inflamaburn", front: "inflamaburn-shiny-front.png", back: "inflamaburn-shiny-back.png", icon: "inflamaburn-shiny-icon.png", overworld: "inflamaburn-shiny-overworld.png" },
  { imageId: "kobothorn", front: "kobothorn-shiny-front.png", back: "kobothorn-shiny-back.png", icon: "kobothorn-shiny-icon.png", overworld: "kobothorn-shiny-overworld.png" },
  { imageId: "kroxhling", front: "kroxhling-shiny-front.png", back: "kroxhling-shiny-back.png", icon: "kroxhling-shiny-icon.png", overworld: "" },
  { imageId: "larvabuzz", front: "larvabuzz-shiny-front.png", back: "larvabuzz-shiny-back.png", icon: "larvabuzz-shiny-icon.png", overworld: "larvabuzz-shiny-overworld.png" },
  { imageId: "leofish", front: "leofish-shiny-front.png", back: "leofish-shiny-back.png", icon: "", overworld: "" },
  { imageId: "minipooch", front: "minipooch-shiny-front.png", back: "minipooch-shiny-back.png", icon: "minipooch-shiny-icon.png", overworld: "minipooch-shiny-overworld.png" },
  { imageId: "minquez", front: "minquez-shiny-front.png", back: "minquez-shiny-back.png", icon: "minquez-shiny-icon.png", overworld: "minquez-shiny-overworld.png" },
  { imageId: "mystinferat", front: "mystinferat-shiny-front.png", back: "mystinferat-shiny-back.png", icon: "mystinferat-shiny-icon.png", overworld: "mystinferat-shiny-overworld.png" },
  { imageId: "nezuori", front: "nezuori-shiny-front.png", back: "nezuori-shiny-back.png", icon: "", overworld: "" },
  { imageId: "overfumepue", front: "overfumepue-shiny-front.png", back: "", icon: "", overworld: "" },
  { imageId: "plantakans", front: "plantakans-shiny-front.png", back: "plantakans-shiny-back.png", icon: "plantakans-shiny-icon.png", overworld: "plantakans-shiny-overworld.png" },
  { imageId: "powow", front: "powow-shiny-front.png", back: "powow-shiny-back.png", icon: "powow-shiny-icon.png", overworld: "powow-shiny-overworld.png" },
  { imageId: "pueppey", front: "pueppey-shiny-front.png", back: "pueppey-shiny-back.png", icon: "pueppey-shiny-icon.png", overworld: "pueppey-shiny-overworld.png" },
  { imageId: "pueppey-3", front: "pueppey-3-shiny-front.png", back: "pueppey-3-shiny-back.png", icon: "", overworld: "" },
  { imageId: "puphrysalis", front: "puphrysalis-shiny-front.png", back: "puphrysalis-shiny-back.png", icon: "", overworld: "" },
  { imageId: "qilibra", front: "qilibra-shiny-front.png", back: "qilibra-shiny-back.png", icon: "qilibra-shiny-icon.png", overworld: "qilibra-shiny-overworld.png" },
  { imageId: "rattiss", front: "rattiss-shiny-front.png", back: "rattiss-shiny-back.png", icon: "rattiss-shiny-icon.png", overworld: "rattiss-shiny-overworld.png" },
  { imageId: "rexiorn", front: "rexiorn-shiny-front.png", back: "rexiorn-shiny-back.png", icon: "", overworld: "" },
  { imageId: "rubird", front: "rubird-shiny-front.png", back: "rubird-shiny-back.png", icon: "rubird-shiny-icon.png", overworld: "rubird-shiny-overworld.png" },
  { imageId: "salamence-2", front: "salamence-2-shiny-front.png", back: "salamence-2-shiny-back.png", icon: "salamence-2-shiny-icon.png", overworld: "salamence-2-shiny-overworld.png" },
  { imageId: "salmite", front: "salmite-shiny-front.png", back: "salmite-shiny-back.png", icon: "salmite-shiny-icon.png", overworld: "salmite-shiny-overworld.png" },
  { imageId: "sharksturf", front: "sharksturf-shiny-front.png", back: "sharksturf-shiny-back.png", icon: "sharksturf-shiny-icon.png", overworld: "" },
  { imageId: "shelgon-2", front: "shelgon-2-shiny-front.png", back: "shelgon-2-shiny-back.png", icon: "shelgon-2-shiny-icon.png", overworld: "shelgon-2-shiny-overworld.png" },
  { imageId: "sippagaist", front: "sippagaist-shiny-front.png", back: "sippagaist-shiny-back.png", icon: "sippagaist-shiny-icon.png", overworld: "sippagaist-shiny-overworld.png" },
  { imageId: "sludgemander", front: "sludgemander-shiny-front.png", back: "sludgemander-shiny-back.png", icon: "sludgemander-shiny-icon.png", overworld: "sludgemander-shiny-overworld.png" },
  { imageId: "smoseed", front: "smoseed-shiny-front.png", back: "smoseed-shiny-back.png", icon: "", overworld: "" },
  { imageId: "spikilk", front: "spikilk-shiny-front.png", back: "spikilk-shiny-back.png", icon: "spikilk-shiny-icon.png", overworld: "spikilk-shiny-overworld.png" },
  { imageId: "spikindlpe", front: "spikindlpe-shiny-front.png", back: "spikindlpe-shiny-back.png", icon: "", overworld: "" },
  { imageId: "supamter", front: "supamter-shiny-front.png", back: "", icon: "", overworld: "" },
  { imageId: "tinsyix", front: "tinsyix-shiny-front.png", back: "tinsyix-shiny-back.png", icon: "tinsyix-shiny-icon.png", overworld: "tinsyix-shiny-overworld.png" },
  { imageId: "toxzilla", front: "toxzilla-shiny-front.png", back: "toxzilla-shiny-back.png", icon: "toxzilla-shiny-icon.png", overworld: "toxzilla-shiny-overworld.png" },
  { imageId: "vastekuez", front: "vastekuez-shiny-front.png", back: "vastekuez-shiny-back.png", icon: "vastekuez-shiny-icon.png", overworld: "vastekuez-shiny-overworld.png" },
  { imageId: "venomosilk", front: "venomosilk-shiny-front.png", back: "venomosilk-shiny-back.png", icon: "venomosilk-shiny-icon.png", overworld: "venomosilk-shiny-overworld.png" },
  { imageId: "victini-1", front: "victini-1-shiny-front.png", back: "victini-1-shiny-back.png", icon: "victini-1-shiny-icon.png", overworld: "victini-1-shiny-overworld.png" },
  { imageId: "voltadybug", front: "voltadybug-shiny-front.png", back: "voltadybug-shiny-back.png", icon: "voltadybug-shiny-icon.png", overworld: "voltadybug-shiny-overworld.png" },
  { imageId: "wurrel", front: "wurrel-shiny-front.png", back: "wurrel-shiny-back.png", icon: "wurrel-shiny-icon.png", overworld: "wurrel-shiny-overworld.png" },
  { imageId: "yamask-2", front: "yamask-2-shiny-front.png", back: "yamask-2-shiny-back.png", icon: "yamask-2-shiny-icon.png", overworld: "yamask-2-shiny-overworld.png" },
  { imageId: "zebstrika-1", front: "zebstrika-1-shiny-front.png", back: "zebstrika-1-shiny-back.png", icon: "zebstrika-1-shiny-icon.png", overworld: "zebstrika-1-shiny-overworld.png" },
  { imageId: "zebstrika-2", front: "zebstrika-2-shiny-front.png", back: "zebstrika-2-shiny-back.png", icon: "zebstrika-2-shiny-icon.png", overworld: "zebstrika-2-shiny-overworld.png" }
];

function shinyNormalizeId(value) {
  return String(value || "").toLowerCase().replace(/_/g, "-").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function allWebsitePokemon() {
  const main = typeof pokemonData !== "undefined" ? pokemonData : [];
  const forms = typeof regionalFormData !== "undefined" ? regionalFormData : [];
  return [...main, ...forms];
}

function findPokemonForShiny(imageId) {
  return allWebsitePokemon().find(mon => shinyNormalizeId(mon.imageId || mon.id) === shinyNormalizeId(imageId));
}

function shinyImageMarkup(fileName, label) {
  if (!fileName) return "";
  return `<div class="shiny-sprite-box"><img src="images/pokemon/${fileName}" alt="${label}" loading="lazy" onerror="this.closest('.shiny-sprite-box').style.display='none';"><span>${label}</span></div>`;
}

function createShinyCard(entry) {
  const mon = findPokemonForShiny(entry.imageId);
  const displayName = mon ? mon.name : entry.imageId;
  const article = document.createElement("article");
  article.className = "dex-card shiny-card";
  article.innerHTML = `
    <div class="dex-card-header"><span class="dex-number shiny-label">★ Shiny Variant</span><h3>${displayName}</h3></div>
    ${mon && Array.isArray(mon.types) ? `<div class="type-list">${mon.types.map(type => `<span class="type-badge type-${type.toLowerCase()}">${type}</span>`).join("")}</div>` : ""}
    <div class="shiny-comparison">
      ${shinyImageMarkup(entry.front, "Shiny Front")}
      ${shinyImageMarkup(entry.back, "Shiny Back")}
      ${shinyImageMarkup(entry.icon, "Shiny Icon")}
      ${shinyImageMarkup(entry.overworld, "Shiny Overworld")}
    </div>`;
  return article;
}

function ensureShinySection() {
  let section = document.getElementById("shinyVariantsSection");
  if (section) return section;
  const main = document.querySelector("main");
  if (!main) return null;
  section = document.createElement("section");
  section.id = "shinyVariantsSection";
  section.innerHTML = `<div class="shiny-section-heading"><div><h2>Shiny Variants</h2><p>Alternate-color Pokémon currently available in Pokémon Lunacore. Only variants with completed shiny artwork are displayed.</p></div><span class="shiny-count" id="shinyVariantCount"></span></div><div id="shinyVariantsGrid" class="dex-grid"></div>`;
  main.appendChild(section);
  return section;
}

function addShinyStyles() {
  if (document.getElementById("lunacoreShinyStyles")) return;
  const style = document.createElement("style");
  style.id = "lunacoreShinyStyles";
  style.textContent = `
    #shinyVariantsSection{margin-top:3rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,.14)}
    .shiny-section-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1.5rem}
    .shiny-count{display:inline-flex;align-items:center;white-space:nowrap;border:1px solid rgba(255,215,90,.45);border-radius:999px;padding:.4rem .75rem;color:#ffe28a;background:rgba(255,215,90,.08);font-size:.9rem}
    .shiny-card{border-color:rgba(255,215,90,.28)} .shiny-label{color:#ffe28a;white-space:nowrap}
    .shiny-comparison{display:grid;grid-template-columns:repeat(auto-fit,minmax(105px,1fr));gap:.75rem;margin-top:1rem}
    .shiny-sprite-box{min-height:132px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;padding:.75rem;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.035);text-align:center}
    .shiny-sprite-box img{max-width:96px;max-height:96px;image-rendering:pixelated;object-fit:contain}.shiny-sprite-box span{font-size:.82rem;opacity:.82}
    @media(max-width:600px){.shiny-section-heading{flex-direction:column}}
  `;
  document.head.appendChild(style);
}

function renderShinyVariants(query = "") {
  const section = ensureShinySection();
  if (!section) return;
  const grid = section.querySelector("#shinyVariantsGrid");
  const count = section.querySelector("#shinyVariantCount");
  const q = query.trim().toLowerCase();
  grid.innerHTML = "";
  const matches = shinyVariantFiles.filter(entry => {
    const mon = findPokemonForShiny(entry.imageId);
    return [entry.imageId, mon ? mon.id : "", mon ? mon.name : "", mon ? mon.category : "", mon && Array.isArray(mon.types) ? mon.types.join(" ") : "", "shiny variant"].join(" ").toLowerCase().includes(q);
  });
  count.textContent = `${matches.length} variant${matches.length === 1 ? "" : "s"}`;
  if (!matches.length) { grid.innerHTML = `<p class="no-results">No shiny variants matched your search.</p>`; return; }
  matches.forEach(entry => grid.appendChild(createShinyCard(entry)));
}

document.addEventListener("DOMContentLoaded", () => {
  addShinyStyles();
  renderShinyVariants();
  const search = document.getElementById("dexSearch");
  if (search) search.addEventListener("input", () => renderShinyVariants(search.value));
});