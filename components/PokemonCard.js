// components/PokemonCard.js
// This component displays one Pokemon.
// In this assignment we keep the layout simple on purpose.

export default function PokemonCard({ pokemon }) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        <h3 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h3>
        </div>
    );
}
