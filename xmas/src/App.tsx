import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Icon from './images/cracker.png';
import Body from './components/Body.tsx';



import { useState, useEffect } from 'react';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

function App() {
  const [database, setDatabase] = useState<SQLiteDBConnection | null>(null);
  const [values, setValues] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const initializeDB = async () => {
      try {
        const sqlite = new SQLiteConnection(CapacitorSQLite);
        const db = await sqlite.createConnection(
          'jokes',
          false,
          'no-encryption',
          1,
          false
        );

        await db.open();

        // Create table
        const query = `
          CREATE TABLE IF NOT EXISTS jokes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            content TEXT NOT NULL,
            category TEXT
          );
        `;
        
        await db.execute(query);
        
        // Insert some test data
        const insertQuery = `
          INSERT OR IGNORE INTO jokes (content, category) 
          VALUES ('Why did the scarecrow win an award?', 'Dad Jokes');
        `;
        
        await db.execute(insertQuery);
        
        // Test query
        const result = await db.query('SELECT * FROM jokes;');
        console.log('Query result:', result);
        
        if (result.values) {
          setValues(result.values);
        }
        
        setDatabase(db);
      } catch (err) {
        console.error('Error initializing database:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };

    initializeDB();

    return () => {
      if (database) {
        database.close();
      }
    };
  }, []);

  return (
    <div>
      <Header 
        title="Christmas Crackers"
        subtitle="Cheap one-liners and jokes ad-nauseam"
        icon={Icon}
      />
      
      {error && <div style={{ color: 'red' }}>{error}</div>}
      
      <div>
        <h2>Jokes from Database:</h2>
        {values.length === 0 ? (
          <p>No jokes found</p>
        ) : (
          values.map((joke, index) => (
            <div key={index}>
              <p>{joke.content}</p>
              {joke.category && <small>Category: {joke.category}</small>}
            </div>
          ))
        )}
      </div>

      <Body />
      <Footer />
    </div>
  );
}

export default App;








