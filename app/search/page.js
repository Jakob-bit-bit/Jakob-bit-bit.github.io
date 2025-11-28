'use client';

import { useEffect, useState } from 'react';
import PokemonCard from '../../components/PokemonCard';
import SearchBar from '../../components/SearchBar';

// This page is inspired by the PedroTech video
// "Building a Pokemon Web App - Pokemon API ReactJS".
// We fetch Pokemon data from a public API (https://pokeapi.co)
// and let the user search by name.
export default function SearchPage() {
    
    // pokemonList keeps the full list we get from the API.
    const [pokemonList, setPokemonList] = useState([]);
    // searchTerm is what the user types in the search box.
    const [searchTerm, setSearchTerm] = useState('');

    // When the page loads, we call the Pokemon API once.
    // The result is stored in pokemonList.
    useEffect(() => {
        // This follows the main idea from the PedroTech tutorial.
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then((response) => response.json())
        .then((data) => {
            // data.results is the array of Pokemon we receive.
            setPokemonList(data.results);
        });
    }, []);

    // filteredPokemons is calculated from pokemonList and searchTerm.
    const filteredPokemons = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1>Search Pokemon</h1>

        {/* SearchBar is a reusable input component for typing the search text */}
        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        {/* This section shows the search results based on the current searchTerm */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginTop: '30px' }}>
            {filteredPokemons.map((pokemon, index) => (
            
            // PokemonCard is a simple card for one Pokemon from the list.
            <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
        </div>
    );
}
