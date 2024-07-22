const btn = document.getElementById("search");
const pokemonInfo = document.getElementById("pokemon-info");

const pokemonSearch = () => {
    const pokemonName = document.getElementById("pok-name").value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Pokemon not found');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data); // Log the data to see what you've fetched

            // Create a string with all the types
            const types = data.types.map(type => type.type.name).join(', ');

            // Create a string with all the stats
            const stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');

            // Update the UI with the fetched data
            pokemonInfo.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p><span style="font-weight: bold;">Height:</span> ${data.height}</p>
                <p><span style="font-weight: bold;">Weight:</span> ${data.weight}</p>
                <p><span style="font-weight: bold;">Types:</span> ${types}</p>
                <p><span style="font-weight: bold;">Stats:</span> ${stats}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching Pokemon:', error);
            pokemonInfo.innerHTML = `<p>${error.message}</p>`;
        });
};

btn.addEventListener("click", pokemonSearch);
