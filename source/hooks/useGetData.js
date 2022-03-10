import { useEffect, useReducer } from "react"
import api from "../api"

function reducer(state, action) {
  switch (action.type) {
    case "SET_STANDINGS":
      return {...state, standings: action.payload}
    case "SET_GAMESCORES":
      return {...state, gameScores: action.payload}
    case "SET_TEAMS":
      return {...state, teams: action.payload}
    case "TOGGLE_LOADER":
      return {...state, loading: !state.loading}
  
    default:
      return state
  }
}

function useGetData() {
  const [state, dispatch] = useReducer(reducer, {
    gameScores: [],
    standings: [],
    teams: {},
    loading: true
  })

  useEffect(() => {
    let isCancelled = false;

    getData().then(({ gameScores, standings, teams }) => {
      if (!isCancelled) {
        dispatch({ type: 'SET_GAMESCORES', payload: gameScores })
        dispatch({ type: 'SET_STANDINGS', payload: standings })
        dispatch({ type: 'SET_TEAMS', payload: teams })
        dispatch({ type: 'TOGGLE_LOADER' })
      }
    })

    return () => {
      isCancelled = true;
    };
  }, []);

  const getData = async () => {
    const todayDate = new Date()
    const yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 1))
    let gameScores = []
    let standings = []

    let teams = await api.teams.getList()
    let teamsObj = {}
    teams.forEach(team => teamsObj[team.tricode.toLowerCase()] = team)
    let yesterdayGameScores = await api.scoreboards.getList(yesterdayDate)
    let todayGameScores = await api.scoreboards.getList()
    const standingsResp = await api.conferenceStandings.getList()

    yesterdayGameScores = yesterdayGameScores ?? []
    todayGameScores = todayGameScores ?? []
    gameScores = [...todayGameScores, ...yesterdayGameScores]
    standings = standingsResp ?? []
      
    return {
      gameScores,
      standings,
      teams: teamsObj
    }
  }

  return state
}

export default useGetData
