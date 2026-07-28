// Pokémon Lunacore — Shiny Variant Gallery v3
const shinyVariantFiles = [
  {
    imageId: "aloncole",
    front: "",
    back: "",
    icon: "aloncole-shiny-icon.png",
    follower: ""
  },
  {
    imageId: "barkuffly",
    front: "barkuffly-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "campire",
    front: "campire-shiny-front.png",
    back: "campire-shiny-back.png",
    icon: "campire-shiny-icon.png",
    follower: "campire-shiny-follower.png"
  },
  {
    imageId: "chipile",
    front: "chipile-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "dashipilla",
    front: "dashipilla-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "dorsail",
    front: "dorsail-shiny-front.png",
    back: "dorsail-shiny-back.png",
    icon: "dorsail-shiny-icon.png",
    follower: "dorsail-shiny-follower.png"
  },
  {
    imageId: "ekans-1",
    front: "ekans-1-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "flabebe-5",
    front: "",
    back: "",
    icon: "flabebe-5-shiny-icon.png",
    follower: ""
  },
  {
    imageId: "floette-6",
    front: "",
    back: "",
    icon: "floette-6-shiny-icon.png",
    follower: ""
  },
  {
    imageId: "friedarock",
    front: "friedarock-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "inflamaburn",
    front: "inflamaburn-shiny-front.png",
    back: "inflamaburn-shiny-back.png",
    icon: "",
    follower: ""
  },
  {
    imageId: "larvabuzz",
    front: "",
    back: "",
    icon: "larvabuzz-shiny-icon.png",
    follower: "larvabuzz-shiny-follower.png"
  },
  {
    imageId: "minquez",
    front: "minquez-shiny-front.png",
    back: "minquez-shiny-back.png",
    icon: "minquez-shiny-icon.png",
    follower: ""
  },
  {
    imageId: "nezuori",
    front: "nezuori-shiny-front.png",
    back: "nezuori-shiny-back.png",
    icon: "",
    follower: ""
  },
  {
    imageId: "overfumepue",
    front: "overfumepue-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "puphrysalis",
    front: "puphrysalis-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "qilibra",
    front: "qilibra-shiny-front.png",
    back: "qilibra-shiny-back.png",
    icon: "qilibra-shiny-icon.png",
    follower: "qilibra-shiny-follower.png"
  },
  {
    imageId: "rubird",
    front: "rubird-shiny-front.png",
    back: "rubird-shiny-back.png",
    icon: "rubird-shiny-icon.png",
    follower: ""
  },
  {
    imageId: "salmite",
    front: "salmite-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "sludgemander",
    front: "sludgemander-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "spikindlpe",
    front: "spikindlpe-shiny-front.png",
    back: "spikindlpe-shiny-back.png",
    icon: "",
    follower: ""
  },
  {
    imageId: "tinsyix",
    front: "tinsyix-shiny-front.png",
    back: "tinsyix-shiny-back.png",
    icon: "tinsyix-shiny-icon.png",
    follower: "tinsyix-shiny-follower.png"
  },
  {
    imageId: "toxzilla",
    front: "toxzilla-shiny-front.png",
    back: "",
    icon: "",
    follower: ""
  },
  {
    imageId: "vastekuez",
    front: "vastekuez-shiny-front.png",
    back: "vastekuez-shiny-back.png",
    icon: "vastekuez-shiny-icon.png",
    follower: ""
  },
  {
    imageId: "venomosilk",
    front: "venomosilk-shiny-front.png",
    back: "venomosilk-shiny-back.png",
    icon: "venomosilk-shiny-icon.png",
    follower: "venomosilk-shiny-follower.png"
  },
  {
    imageId: "voltadybug",
    front: "",
    back: "",
    icon: "voltadybug-shiny-icon.png",
    follower: "voltadybug-shiny-follower.png"
  },
  {
    imageId: "yamask-2",
    front: "yamask-2-shiny-front.png",
    back: "yamask-2-shiny-back.png",
    icon: "yamask-2-shiny-icon.png",
    follower: "yamask-2-shiny-follower.png"
  }
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
      ${shinyImageMarkup(entry.follower, "Shiny Overworld")}
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