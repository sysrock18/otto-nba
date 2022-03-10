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
    case "SET_LOADER":
      return {...state, loading: action.payload}
    default:
      return state
  }
}

function useGetData() {
  const [data, dispatch] = useReducer(reducer, {
    gameScores: [],
    standings: [],
    teams: {},
    loading: true
  })

  useEffect(() => {
    let isCancelled = false;

    fetchData().then(data => dispatchResults(data, isCancelled))

    return () => {
      isCancelled = true;
    };
  }, []);

  const getData = () => {
    dispatch({ type: 'SET_LOADER', payload: true })
    fetchData().then(data => dispatchResults(data, false))
  }

  const fetchData = async () => {
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

  const dispatchResults = ({ gameScores, standings, teams }, isCancelled) => {
    if (!isCancelled) {
      dispatch({ type: 'SET_GAMESCORES', payload: gameScores })
      dispatch({ type: 'SET_STANDINGS', payload: standings })
      dispatch({ type: 'SET_TEAMS', payload: teams })
      dispatch({ type: 'SET_LOADER', payload: false })
    }
  }

  return { data, getData }
}

export default useGetData
