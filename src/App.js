import React, { useState } from 'react';
import { data } from './bounty';
import PiratesList from './PiratesList';
import './index.css';

function App() {
  const [pirates, setPirates] = useState(data);

  return (
    <>
      <main>
        <div className='container'>
          <h3>{pirates.length} member from SHP</h3>
          <PiratesList pirates={pirates} />
          <button onClick={() => setPirates([])}>remove all</button>
        </div>
      </main>
    </>
  );
}

export default App;
