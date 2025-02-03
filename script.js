// Função para obter os dados dos 10 primeiros pokémons
async function getPokemons() {
    const pokemonsList = document.getElementById('pokemons-list');
    
    // Pega os 10 primeiros pokémons
    for (let i = 1; i <= 10; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const data = await response.json();

        // Cria o HTML para exibir as informações
        const pokemonElement = document.createElement('div');
        pokemonElement.classList.add('pokemon');
        
        pokemonElement.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>ID: ${data.id}</p>
            <p>Tipo(s): ${data.types.map(type => type.type.name).join(', ')}</p>
        `;
        
        // Adiciona o pokemon à lista na página
        pokemonsList.appendChild(pokemonElement);
    }
}

// Chama a função para exibir os pokémons ao carregar a página
getPokemons();
