import React, { useState, useEffect } from 'react';
import axios from 'axios';

type League = {
  id: number,
  name: string
}

function App() {
  const [leagues, setLeagues] = useState<League[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/leagues')
      .then(response => {
        setLeagues(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the leagues: ', error);
      })
  }, []) // Don't forget the dependency array!

  console.log(typeof leagues )

  return (
    <div>
      <h1>League List</h1>
      <ul>
        {leagues.map(league => (
          <li key={league.id}>{league.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;