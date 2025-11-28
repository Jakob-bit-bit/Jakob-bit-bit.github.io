'use client';

import { useState } from 'react';
import PokemonCard from '../../components/PokemonCard';

// This page is our own extension on top of the PedroTech tutorial.
// Here the user can build a small deck by adding and removing Pokemon.
const SAMPLE_POKEMON = [
    { id: 1, name: 'pikachu' },
    { id: 2, name: 'bulbasaur' },
    { id: 3, name: 'charmander' },
];

export default function DeckPage() {
    // deck holds the list of Pokemon currently in the user's deck.
    const [deck, setDeck] = useState([]);

    // This function adds a Pokemon to the deck with two simple rules:
    // 1) The deck can have at most 6 Pokemon.
    // 2) The same Pokemon (by id) cannot be added twice.
    const handleAddToDeck = (pokemon) => {
        if (deck.length >= 6) {
        alert('Deck is full! Maximum 6 Pokemon allowed.');
        return;
    }

    if (deck.find((p) => p.id === pokemon.id)) {
        alert('This Pokemon is already in your deck!');
        return;
    }

        setDeck([...deck, pokemon]);
    };

  // This function removes one Pokemon from the deck by its id.
    const handleRemoveFromDeck = (id) => {
        setDeck(deck.filter((p) => p.id !== id));
    };

  // This function clears the whole deck at once.
    const clearDeck = () => {
        setDeck([]);
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <h1>My Deck</h1>

        {/* This section shows sample Pokemon that the user can add to the deck */}
        <section style={{ marginBottom: '40px' }}>
            <h2>Available Pokemon</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {SAMPLE_POKEMON.map((pokemon) => (
                <div key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
                {/* Add this Pokemon to the deck when the button is clicked */}
                <button onClick={() => handleAddToDeck(pokemon)} style={{ marginTop: '10px' }}>
                    Add to Deck
                </button>
                </div>
            ))}
            </div>
        </section>

        {/* This section shows the current deck and lets the user remove cards */}
        <section>
            <h2>Current Deck</h2>
            {deck.length === 0 && <p>No Pokemon in the deck yet.</p>}

            <button onClick={clearDeck} style={{ marginBottom: '20px' }}>
            Clear Deck
            </button>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {deck.map((pokemon) => (
                <div key={pokemon.id}>
                <PokemonCard pokemon={pokemon} />
                {/* Remove this Pokemon from the deck */}
                <button onClick={() => handleRemoveFromDeck(pokemon.id)} style={{ marginTop: '10px' }}>
                    Remove
                </button>
                </div>
            ))}
            </div>
        </section>
        </div>
    );
}
