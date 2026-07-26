// ============================================================================
// Pokémon Lunacore - Inflamous Pokédex
// Full Pokédex data and card rendering
// ============================================================================

const pokemonData = [
  {
    "dex": "001",
    "id": "RATTISS",
    "name": "Rattiss",
    "types": [
      "Grass"
    ],
    "category": "Tail Bloom Pokémon",
    "description": "Rattiss uses the flower on its tail to lure unsuspecting prey closer. Once they approach, it quickly wraps its vine-like body around them to capture them."
  },
  {
    "dex": "002",
    "id": "PLANTAKANS",
    "name": "Plantakans",
    "types": [
      "Grass",
      "Fairy"
    ],
    "category": "Vine Serpent Pokémon",
    "description": "Plantakans are surprisingly fluffy for a serpentine Pokémon. They have a long-standing rivalry with Ekans and Arbok, often competing for territory in dense forests."
  },
  {
    "dex": "003",
    "id": "KOBOTHORN",
    "name": "Kobothorn",
    "types": [
      "Grass",
      "Fairy"
    ],
    "category": "Bloom Serpent Pokémon",
    "description": "Kobothorn move with incredible speed when they slither. As they glide through tall grass, their movement creates a whistling sound that attracts curious prey."
  },
  {
    "dex": "004",
    "id": "POWOW",
    "name": "Powow",
    "types": [
      "Fire"
    ],
    "category": "Ember Pup Pokémon",
    "description": "Powow are curious and energetic. Sparks fly from its fur when it gets excited or prepares to battle."
  },
  {
    "dex": "005",
    "id": "BAADUPE",
    "name": "Baadupe",
    "types": [
      "Fire",
      "Steel"
    ],
    "category": "Alloy Coyote Pokémon",
    "description": "Its body begins to harden into metal. Baadupe are fiercely loyal and will guard their trainer without hesitation."
  },
  {
    "dex": "006",
    "id": "DEMOYOTE",
    "name": "Demoyote",
    "types": [
      "Fire",
      "Steel"
    ],
    "category": "Inferno Alpha Pokémon",
    "description": "Demoyote's body is forged like steel and burns like a furnace. It hunts with precision and overwhelming force."
  },
  {
    "dex": "007",
    "id": "SPIKILK",
    "name": "Spikilk",
    "types": [
      "Water"
    ],
    "category": "Spike Milk Pokémon",
    "description": "Spikilk stores water in its soft body. When startled, it fires sharp jets from the spikes on its head."
  },
  {
    "dex": "008",
    "id": "TINSYIX",
    "name": "Tinsyix",
    "types": [
      "Water",
      "Poison"
    ],
    "category": "Jet Pokémon",
    "description": "Tinsyix propels itself through the water with powerful streams while toxic fluid forms in its spikes."
  },
  {
    "dex": "009",
    "id": "VENOMOSILK",
    "name": "Venomosilk",
    "types": [
      "Water",
      "Poison"
    ],
    "category": "Venom Jet Pokémon",
    "description": "Venomosilk releases toxic water jets from its spikes. Even a small splash can weaken opponents quickly."
  },
  {
    "dex": "010",
    "id": "EGVA",
    "name": "Egva",
    "types": [
      "Bug"
    ],
    "category": "Egg Bug Pokémon",
    "description": "It clings to leaves and absorbs nutrients from the air. It stores static energy inside its shell as it grows."
  },
  {
    "dex": "011",
    "id": "LARVABUZZ",
    "name": "Larvabuzz",
    "types": [
      "Bug",
      "Electric"
    ],
    "category": "Buzz Larva Pokémon",
    "description": "Its body begins generating electricity. It vibrates its shell to create buzzing sounds that warn predators."
  },
  {
    "dex": "012",
    "id": "VOLTADYBUG",
    "name": "Voltadybug",
    "types": [
      "Bug",
      "Electric"
    ],
    "category": "Volt Beetle Pokémon",
    "description": "It stores massive electrical energy in its shell. It clashes with Ledyba colonies, battling over territory and pride."
  },
  {
    "dex": "013",
    "id": "RUBIRD",
    "name": "Rubird",
    "types": [
      "Normal",
      "Flying"
    ],
    "category": "Rock Peck Pokémon",
    "description": "Found near rocky terrain and grassy routes, it feeds on small stones. Rubird travels in flocks, defending territory from powerful foes like Tyranitar."
  },
  {
    "dex": "014",
    "id": "HARKROWN",
    "name": "Harkrown",
    "types": [
      "Rock",
      "Flying"
    ],
    "category": "Stone Wing Pokémon",
    "description": "After evolving, its body hardens from constant stone consumption. Overconfident in its strength, Harkrown often challenges stronger opponents, leading to fierce battles of pride."
  },
  {
    "dex": "015",
    "id": "HAMTA",
    "name": "Hamta",
    "types": [
      "Normal"
    ],
    "category": "Hamster Pokémon",
    "description": "Hamta are very friendly toward others. However, they become frightened easily when something much larger than them approaches."
  },
  {
    "dex": "016",
    "id": "SUPAMTER",
    "name": "Supamter",
    "types": [
      "Normal",
      "Flying"
    ],
    "category": "Super Hero Pokémon",
    "description": "When Hamta evolves into Supamter, it protects the region with its great strength, using its power to defend others from danger."
  },
  {
    "dex": "017",
    "id": "ALONCOLE",
    "name": "Aloncole",
    "types": [
      "Rock",
      "Normal"
    ],
    "category": "Lost Coal Pokémon",
    "description": "Said to have formed when a Rolycoly lost a piece of its coal, Aloncole roams alone in rocky areas. Though small, it is incredibly dense and can withstand powerful attacks without budging."
  },
  {
    "dex": "018",
    "id": "MINQUEZ",
    "name": "Minquez",
    "types": [
      "Rock"
    ],
    "category": "Friendly Rock Pokémon",
    "description": "Minquez are calm and gentle Pokémon that enjoy basking in sunlight. They rarely move, preferring to make friends with anything that approaches."
  },
  {
    "dex": "019",
    "id": "VASTEKUEZ",
    "name": "Vastekuez",
    "types": [
      "Rock",
      "Ground"
    ],
    "category": "Sun Guardian Pokémon",
    "description": "Vastekuez absorbs sunlight through its rocky body to restore its health. Despite its massive size, it is incredibly gentle and often protects smaller Pokémon."
  },
  {
    "dex": "020",
    "id": "DORSAIL",
    "name": "Dorsail",
    "types": [
      "Water"
    ],
    "category": "Category not yet assigned",
    "description": "Dorsail glide swiftly through the water using their long dorsal fins. They are known for their speed and playful nature near the ocean surface."
  },
  {
    "dex": "021",
    "id": "LEOFISH",
    "name": "Leofish",
    "types": [
      "Water",
      "Steel"
    ],
    "category": "Category not yet assigned",
    "description": "Leofish are territorial predators that use blade-like fins to intimidate rivals. Their metallic scales deflect attacks, making them hard to approach."
  },
  {
    "dex": "022",
    "id": "PUEPPEY",
    "name": "Pueppey",
    "types": [
      "Fire"
    ],
    "category": "Fire Rat Pokémon",
    "description": "Playful and energetic, Pueppey dashes around nonstop. Its psychic spark appears whenever it gets excited."
  },
  {
    "dex": "023",
    "id": "BONFERNO",
    "name": "Bonferno",
    "types": [
      "Fire",
      "Psychic"
    ],
    "category": "Flame Fighter Pokémon",
    "description": "Bonferno's flames burn brighter as it fights. Its sharpened instincts let it react before its foe moves."
  },
  {
    "dex": "024",
    "id": "MYSTINFERAT",
    "name": "Mystinferat",
    "types": [
      "Fire",
      "Psychic"
    ],
    "category": "Mystic Flame Pokémon",
    "description": "Mystinferat burns with psychic fire and can sense danger long before it appears."
  },
  {
    "dex": "025",
    "id": "TOXIPUP",
    "name": "Toxipup",
    "types": [
      "Water",
      "Poison"
    ],
    "category": "Toxic Hound Pokémon",
    "description": "Toxipup’s venom now mixes with its water jets, allowing it to corrode everything it bites or splashes."
  },
  {
    "dex": "026",
    "id": "DIRTOXIBARK",
    "name": "Dirtoxibark",
    "types": [
      "Water",
      "Poison"
    ],
    "category": "Abyss Bark Pokémon",
    "description": "Dirtoxibark commands polluted water currents like a pack leader. Its presence poisons entire ecosystems around it."
  },
  {
    "dex": "027",
    "id": "WILDLIFORN",
    "name": "Wildliforn",
    "types": [
      "Grass"
    ],
    "category": "Wild Bloom Pokémon",
    "description": "A wild evolution of Pueppey adapted to dense jungle zones. It reacts to battle rhythm with sudden bursts of growth energy."
  },
  {
    "dex": "028",
    "id": "VENUSFLIELM",
    "name": "Venusflielm",
    "types": [
      "Grass",
      "Fairy"
    ],
    "category": "Bloom Goddess Pokémon",
    "description": "Its flowers resonate with unpredictable “chance blooms” that alter the flow of battle itself."
  },
  {
    "dex": "029",
    "id": "SPIKINDLPE",
    "name": "Spikindlpe",
    "types": [
      "Fire",
      "Steel"
    ],
    "category": "Furnace Fang Pokémon",
    "description": "Spikindlpe sharpen their blazing steel spikes against rocky cliffs. Their bodies radiate intense heat capable of melting scrap metal nearby."
  },
  {
    "dex": "030",
    "id": "OVERFUMEPUE",
    "name": "Overfumepue",
    "types": [
      "Fire",
      "Steel"
    ],
    "category": "Overheat Beast Pokémon",
    "description": "Overfumepue releases scorching smoke from vents along its armored body. Legends say entire scrapyards melt when two Overfumepue battle."
  },
  {
    "dex": "031",
    "id": "MINIPOOCH",
    "name": "Minipooch",
    "types": [
      "Fairy",
      "Dark"
    ],
    "category": "Wild Pup Pokémon",
    "description": "Minipooch are small, aggressive Pokémon that roam alleyways and forests in packs. Despite their size, they are extremely bold and will challenge much larger opponents without hesitation."
  },
  {
    "dex": "032",
    "id": "DINGROWL",
    "name": "Dingrowl",
    "types": [
      "Fairy",
      "Dark"
    ],
    "category": "Wild Alpha Pokémon",
    "description": "Dingrowl lead packs of Minipooch through ruined streets and wild outskirts. Their eerie howl can disorient opponents and strengthen their allies."
  },
  {
    "dex": "033",
    "id": "SALMITE",
    "name": "Salmite",
    "types": [
      "Poison"
    ],
    "category": "Venom Newt Pokémon",
    "description": "Salmite secrete toxic fluid from glands in their neck. Even at a young age, faint draconic energy can be detected within their bodies."
  },
  {
    "dex": "034",
    "id": "SLUDGEMANDER",
    "name": "Sludgemander",
    "types": [
      "Poison",
      "Dragon"
    ],
    "category": "Sludge Lizard Pokémon",
    "description": "Sludgemander mutates rapidly in polluted environments. Its draconic power awakens as toxic sludge courses through its body."
  },
  {
    "dex": "035",
    "id": "TOXZILLA",
    "name": "Toxzilla",
    "types": [
      "Poison",
      "Dragon"
    ],
    "category": "Toxic Kaiju Pokémon",
    "description": "Toxzilla are born from extreme pollution and mutation. Their draconic rage and toxic bodies devastate entire ecosystems without control."
  },
  {
    "dex": "036",
    "id": "TIMETOCKO",
    "name": "Timetocko",
    "types": [
      "Normal",
      "Psychic"
    ],
    "category": "Alarm Pokémon",
    "description": "Its body resembles a pendulum clock. The arrows on its sides spin rapidly when it senses danger, distorting its opponent's perception of time."
  },
  {
    "dex": "037",
    "id": "CHIPILE",
    "name": "Chipile",
    "types": [
      "Rock",
      "Fairy"
    ],
    "category": "Fries Pokémon",
    "description": "A small Pokémon resembling seasoned potato bites. It rolls around leaving faint sparkling crumbs behind."
  },
  {
    "dex": "038",
    "id": "FRIEDAROCK",
    "name": "Friedarock",
    "types": [
      "Rock",
      "Fairy"
    ],
    "category": "Deep Fry Pokémon",
    "description": "Evolved from Chipile through strong friendship. Its rocky shell is “fried” into a crisp magical crust that enhances its strength."
  },
  {
    "dex": "039",
    "id": "CAMPIRE",
    "name": "Campire",
    "types": [
      "Grass"
    ],
    "category": "Category not yet assigned",
    "description": "A small wooden Pokémon that stores heat within its core. It slowly grows warmer as it battles."
  },
  {
    "dex": "040",
    "id": "INFLAMABURN",
    "name": "Inflamaburn",
    "types": [
      "Grass",
      "Fire"
    ],
    "category": "Category not yet assigned",
    "description": "Its wooden body ignites into a controlled flame. It feeds on sunlight and fuel, growing stronger with each battle."
  },
  {
    "dex": "041",
    "id": "CALFIRSIP",
    "name": "Calfirsip",
    "types": [
      "Ghost",
      "Electric"
    ],
    "category": "Sipping Pokémon",
    "description": "Calfirsip drift silently through dark caves, drawing in electrical energy like a drink their faint glow flickers in the shadows."
  },
  {
    "dex": "042",
    "id": "SIPPAGAIST",
    "name": "Sippagaist",
    "types": [
      "Ghost",
      "Electric"
    ],
    "category": "Sipping Pokémon",
    "description": "Having grown powerful from consumed energy, Sippagaist now hunt their prey. Their bodies crackle with stolen electricity, and few escape their pursuit."
  },
  {
    "dex": "043",
    "id": "DASHIPILLA",
    "name": "Dashipilla",
    "types": [
      "Bug"
    ],
    "category": "Category not yet assigned",
    "description": "Dashipilla love to play with others and are extremely affectionate. They are known to chase their own tail even in battle, sometimes turning it into an unpredictable attack."
  },
  {
    "dex": "044",
    "id": "PUPHRYSALIS",
    "name": "Pupahrysalis",
    "types": [
      "Bug",
      "Fairy"
    ],
    "category": "Category not yet assigned",
    "description": "Pupahrysalis spins itself into soft silk cocoons. The silk is so soft it is often collected to make comfort bedding for trainers."
  },
  {
    "dex": "045",
    "id": "BARKUFFLY",
    "name": "Barkuffly",
    "types": [
      "Bug",
      "Fairy"
    ],
    "category": "Category not yet assigned",
    "description": "Barkuffly has three expressive faces, two located on its wings. The scent from its wings attracts allies and calms even hostile Pokémon."
  },
  {
    "dex": "046",
    "id": "NEZUORI",
    "name": "Nezuori",
    "types": [
      "Electric",
      "Ice"
    ],
    "category": "Frost Mouse Pokémon",
    "description": "Nezuori stores cold electricity in its fur. When excited, icy sparks crackle around its body, freezing the ground beneath its tiny feet."
  },
  {
    "dex": "047",
    "id": "WURREL",
    "name": "Wurrel",
    "types": [
      "Normal"
    ],
    "category": "Burrow Pokémon",
    "description": "Wurrel are constantly on alert for danger. They dig complex burrow systems to hide, store food, and raise their young, disappearing underground."
  },
  {
    "dex": "048",
    "id": "FOOTBY",
    "name": "Footby",
    "types": [
      "Normal",
      "Fighting"
    ],
    "category": "Bigfoot Pokémon",
    "description": "Footby live alone deep in the wilderness. Fiercely territorial, they attack anything that enters their domain. They sustain themselves on berries."
  },
  {
    "dex": "049",
    "id": "KROXHLING",
    "name": "Kroxhling",
    "types": [
      "Bug"
    ],
    "category": "Skitter Pup Pokémon",
    "description": "Kroxhling dart through grass at high speed, using their hardened shells to deflect weak attacks. They avoid direct combat, relying on evasion."
  },
  {
    "dex": "050",
    "id": "ROKKACHER",
    "name": "Rokkacher",
    "types": [
      "Bug",
      "Rock"
    ],
    "category": "Fortified Scarab Pokémon",
    "description": "Rokkacher lurk among rocks, blending perfectly with their surroundings. When disturbed, they fix their gaze on foes, distorting their vision and their aim."
  },
  {
    "dex": "051",
    "id": "SHARKSTURF",
    "name": "Sharksturf",
    "types": [
      "Water",
      "Fairy"
    ],
    "category": "Surfboard Pokémon",
    "description": "Sharksturf ride crashing waves with incredible speed. Their fins act like surfboards, leaving sparkling foam trails behind them."
  },
  {
    "dex": "052",
    "id": "HUMMLY",
    "name": "Hummly",
    "types": [
      "Fairy",
      "Flying"
    ],
    "category": "Melody Bird Pokémon",
    "description": "These cheerful Pokémon flutter through flower fields humming soft melodies. Their sweet songs are said to calm anyone who hears them."
  },
  {
    "dex": "053",
    "id": "HUMMZLY",
    "name": "Hummzly",
    "types": [
      "Fairy",
      "Flying"
    ],
    "category": "Harmony Bird Pokémon",
    "description": "Hummzly soar gracefully across the skies of the Inflamous Region. Their enchanting songs can brighten moods and guide lost travelers home."
  },
  {
    "dex": "054",
    "id": "REXIORN",
    "name": "Rexiorn",
    "types": [
      "Dragon",
      "Steel"
    ],
    "category": "Iron Drake Pokémon",
    "description": "Rexiorn tears through opponents with razor-sharp steel claws and overwhelming speed. Legends say its metallic body was forged deep beneath the Inflamous Region long ago."
  },
  {
    "dex": "055",
    "id": "SMOSEED",
    "name": "Smoseed",
    "types": [
      "Grass"
    ],
    "category": "Sprout Pokémon",
    "description": "Smoseed spends most of its day buried in rich soil. The leaves on its head absorb sunlight and store nutrients for growth."
  },
  {
    "dex": "056",
    "id": "CALIFORN",
    "name": "Californ",
    "types": [
      "Grass",
      "Poison"
    ],
    "category": "Bud Pokémon",
    "description": "Californ stores toxic pollen within its flower bud. It attracts Bug Pokémon with a sweet scent that helps spread its spores."
  },
  {
    "dex": "057",
    "id": "FLOWESIGHT",
    "name": "Flowesight",
    "types": [
      "Grass",
      "Poison"
    ],
    "category": "Blossom Pokémon",
    "description": "The flower atop Flowesight's head allows it to sense changes in weather and nearby life. Areas where it lives bloom year-round."
  },
  {
    "dex": "058",
    "id": "PUNYRAX",
    "name": "Punyrax",
    "types": [
      "Normal",
      "Rock"
    ],
    "category": "Rock Hyrax Pokémon",
    "description": "Punyrax darts between rocky crevices at incredible speed. The soft stone pattern forming across its back gradually hardens as it grows."
  },
  {
    "dex": "059",
    "id": "SPIKERAX",
    "name": "Spikerax",
    "types": [
      "Normal",
      "Rock"
    ],
    "category": "Stoneback Pokémon",
    "description": "The layered formation on Spikerax's back resembles stone shaped by centuries of erosion. It charges opponents before they can react and withstands impacts with its hardened body."
  },
  {
    "dex": "060",
    "id": "CALCALATER",
    "name": "Calcalater",
    "types": [
      "Electric",
      "Normal"
    ],
    "category": "Computer Pokémon",
    "description": "Calcalater was created as a simple calculation program. Its helpful nature and outdated security leave its code vulnerable to outside interference."
  },
  {
    "dex": "061",
    "id": "WIRESTRIKE",
    "name": "Wirestrike",
    "types": [
      "Electric",
      "Dark"
    ],
    "category": "Hardware Pokémon",
    "description": "After receiving an Upgrade, Wirestrike forms a body from cables and computer hardware. Corrupted data causes its behavior to become increasingly unpredictable."
  },
  {
    "dex": "062",
    "id": "HACKAONITRON",
    "name": "Hackaonitron",
    "types": [
      "Electric",
      "Dark"
    ],
    "category": "Hacked Pokémon",
    "description": "Hackaonitron's corrupted code has completely taken control. It invades nearby electronics and spreads malicious signals through every connected device."
  },
  {
    "dex": "063",
    "id": "QILIBRA",
    "name": "Qilibra",
    "types": [
      "Dragon",
      "Fairy"
    ],
    "category": "Celestial Qilin Pokémon",
    "description": "By being able to look into the hearts of people and Pokemon, it can see the essence of their being. In doing so, it can pass its judgement wisely."
  }
];

// Turn an internal Pokémon ID into an image-friendly file name.
// Example: CALFIRSIP becomes calfirsip.
function imageName(mon) {
  return mon.id.toLowerCase();
}

function createTypeBadges(types) {
  return types
    .map(type => `<span class="type-badge type-${type.toLowerCase()}">${type}</span>`)
    .join("");
}

// These image paths are ready for you to use later.
// Put files into images/pokemon/ using names such as:
// rattiss-front.png
// rattiss-back.png
// rattiss-icon.png
// rattiss-overworld.png
// rattiss-footprint.png
function createSpriteImage(mon, suffix, label) {
  const file = `images/pokemon/${imageName(mon)}-${suffix}.png`;

  return `
    <div class="sprite-box">
      <img
        src="${file}"
        alt="${mon.name} ${label}"
        loading="lazy"
        onerror="
          this.style.display='none';
          this.nextElementSibling.style.display='block';
        "
      >
      <span class="sprite-placeholder">${label}</span>
    </div>
  `;
}

function createPokemonCard(mon) {
  const card = document.createElement("article");
  card.className = "dex-card";

  card.innerHTML = `
    <div class="dex-card-header">
      <span class="dex-number">#${mon.dex}</span>
      <h3>${mon.name}</h3>
    </div>

    <div class="type-list">
      ${createTypeBadges(mon.types)}
    </div>

    <p class="dex-category">${mon.category}</p>

    <p class="dex-description">
      ${mon.description}
    </p>

    <div class="sprite-gallery">
      ${createSpriteImage(mon, "front", "Front Sprite")}
      ${createSpriteImage(mon, "back", "Back Sprite")}
      ${createSpriteImage(mon, "icon", "Icon")}
      ${createSpriteImage(mon, "overworld", "Overworld Sprite")}
      ${createSpriteImage(mon, "footprint", "Footprint")}
    </div>
  `;

  return card;
}

function renderPokemonList(list) {
  const grid = document.getElementById("pokedexGrid");

  if (!grid) {
    console.error('Could not find an element with id="pokedexGrid".');
    return;
  }

  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `
      <p class="no-results">
        No Pokémon matched your search.
      </p>
    `;
    return;
  }

  list.forEach(mon => {
    grid.appendChild(createPokemonCard(mon));
  });
}

function setupSearch() {
  const searchBox = document.getElementById("dexSearch");

  if (!searchBox) {
    console.error('Could not find an element with id="dexSearch".');
    return;
  }

  searchBox.addEventListener("input", () => {
    const searchValue = searchBox.value.trim().toLowerCase();

    const filteredPokemon = pokemonData.filter(mon => {
      const searchableText = [
        mon.dex,
        mon.id,
        mon.name,
        ...mon.types,
        mon.category,
        mon.description
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchValue);
    });

    renderPokemonList(filteredPokemon);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPokemonList(pokemonData);
  setupSearch();
});
