import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useLeagueStore from "../src/services/leagueService"

type League = {
    id: number,
    name: string
}

interface LeagueState {
    leagues: League[],
    getLeagues: () => void;
}

function App() {
  const { leagues, getLeagues } = useLeagueStore();

  useEffect(() => {
    getLeagues()
  }, [getLeagues])

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