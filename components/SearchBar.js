// components/SearchBar.js
// This component is a reusable text input used for searching Pokemon by name.

export default function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search by name..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{ padding: '10px', width: '100%', maxWidth: '400px' }}
        />
    );
}
