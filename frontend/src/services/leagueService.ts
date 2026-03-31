import { create } from "zustand";
import axios from "axios"

type League = {
    id: number,
    name: string
}

interface LeagueState {
    leagues: League[],
    getLeagues: () => void;
}

const useLeagueStore = create<LeagueState>((set) => ({
    leagues: [],
    getLeagues: async () => {
        const response = await axios.get('http://localhost:3000/api/leagues');
        set({ leagues: response.data})
    }
}))

export default useLeagueStore;