import React, { useState } from 'react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ 
  onSearch, 
  placeholder = "Search..." 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder={placeholder}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Search
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex' as const,
    gap: '0.5rem',
    width: '100%',
    maxWidth: '500px',
    margin: '1rem auto',
    boxSizing: 'border-box' as const, // This is crucial!

  },
  input: {
    flex: 1,
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    border: '2px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    boxSizing: 'border-box' as const,
    '&:focus': {
      borderColor: '#333',
    },
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    
    '&:hover': {
      backgroundColor: '#555',
    },
  },
};

export default SearchBox;
