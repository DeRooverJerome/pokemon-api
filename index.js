async function fetchPokemonType(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-form/${pokemonId}/`
  );
  const data = await response.json();
  return data.types[0].type.name;
}

async function fetchPokemonData(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
  const data = await response.json();
  return { name: data.name, sprite: data.sprites.front_default };
}

async function fetchPokemonType(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-form/${pokemonId}/`
  );
  const data = await response.json();
  return data.types[0].type.name;
}

async function fetchPokemonNumber(pokemonId) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon-form/${pokemonId}/`
  );
  const data = await response.json();
  return data.id;
}

async function displayPokemons() {
  const pkmContainer = document.querySelector(".pkm-container");

  pkmContainer.innerHTML = "";

  for (let i = 1; i <= 151; i++) {
    const { name, sprite } = await fetchPokemonData(i);
    const cardPokemon = document.createElement("div");
    cardPokemon.classList.add("card_pokemon");

    const frontDiv = document.createElement("div");
    frontDiv.classList.add("front");

    const image = document.createElement("img");
    image.src = sprite;
    frontDiv.appendChild(image);

    const pokemonName = document.createElement("p");
    pokemonName.textContent = name;
    frontDiv.appendChild(pokemonName);

    const backDiv = document.createElement("div");
    backDiv.classList.add("back");

    const backImg = document.createElement("img");
    backImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${i}.png`;
    backDiv.appendChild(backImg);

    const typeP = document.createElement("p");
    const type = await fetchPokemonType(i);
    typeP.textContent = type;
    backDiv.appendChild(typeP);

    const numberP = document.createElement('p')
    const number = await fetchPokemonNumber(i);
    numberP.textContent = number;
    frontDiv.appendChild(numberP)

    cardPokemon.appendChild(frontDiv);
    cardPokemon.appendChild(backDiv);

    pkmContainer.appendChild(cardPokemon);

    cardPokemon.addEventListener("mouseenter", () => {
      cardPokemon.classList.add("flipped");
    });

    cardPokemon.addEventListener("mouseleave", () => {
      cardPokemon.classList.remove("flipped");
    });
  }
}

displayPokemons();
