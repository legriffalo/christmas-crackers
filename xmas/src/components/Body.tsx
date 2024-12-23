import React from 'react';
import SearchBox from '../components/SearchBox.tsx';


interface BodyProps {
  children?: React.ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {

    const handleSearch = (query: string) => {
        // Handle the search logic here
        console.log('Searching for:', query);
        // Add your search implementation
      };
    


  return (
    <div style={styles.bodyContainer}>
      {children}
      <SearchBox 
        onSearch={handleSearch}
        placeholder="Search crackers..."
      />
    </div>
  );
};

const styles = {
    bodyContainer: {
      height: '65vh',
      width:'100%',
      margin: '0 auto',
      position:'relative' as const,
      boxShadow: '0 -2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'row' as const,
      gap: '1vh',
      padding: '1rem',
      backgroundColor: '#ffffff',
      boxSizing: 'border-box' as const, // This is crucial!
    },
};

export default Body;
