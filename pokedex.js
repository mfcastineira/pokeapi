const pokedex = document.getElementById("pokedex");

const getPokemonsUrl= async () => {
  let pokemonsUrl;
  let arrayPokemons=[]
  
  for (let index = 1; index <= 150; index++) {
    pokemonsUrl = (`https://pokeapi.co/api/v2/pokemon/${index}`);
 
  //console.log(pokemonsUrl);

 const res = await fetch(pokemonsUrl);
 const data = await res.json();
 const pokemonData = data;

    arrayPokemons.push(pokemonData);
  }

    const pokemons = arrayPokemons.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
    }))
      console.log(pokemons)
      const paintPokemons = pokemons.map((eachPokemon) =>
            `<li class="card">
                <img class="card-image" src="${eachPokemon.image}"/>
                <h2 class="card-title">${eachPokemon.id} - ${eachPokemon.name}</h2>
                <p class="card-subtitle">Tipo: ${eachPokemon.type}</p>
            </li>`
        ).join("");
      pokedex.innerHTML = paintPokemons ;


 };
getPokemonsUrl();

