import { useEffect } from 'react';
import useLeagueStore from "../src/services/leagueService"


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