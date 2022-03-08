import React, { useEffect, useReducer } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import api from '../../api';
import Scoreboard from '../../components/Scoreboard/Scoreboard';
import Teams from '../../components/Teams/teams';
import TabPanel from '../../components/TabPanel/TabPanel';
import { Container, Typography } from '@mui/material';

const loaderStyle = {
  textAlign: 'center',
  padding: '10px'
}
  
const errorStyle =  {
  marginTop: '40px',
  textAlign: 'center'
}

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

function Home({ tab }) {
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
    // const currentSeason = await api.season.getCurrent(yesterdayDate)
    let gameScores = []
    let standings = []

    // if (currentSeason) {
    // const seasonName = currentSeason.slug
    let teams = await api.teams.getList()
    let teamsObj = {}
    teams.forEach(team => teamsObj[team.tricode.toLowerCase()] = team)
    let yesterdayGameScores = await api.scoreboards.getList(yesterdayDate)
    let todayGameScores = await api.scoreboards.getList()
    // const standingsResp = await api.conferenceStandings.getList(seasonName)
    yesterdayGameScores = yesterdayGameScores ?? []
    todayGameScores = todayGameScores ?? []
    gameScores = [...todayGameScores, ...yesterdayGameScores]
    // standings = standingsResp ? standingsResp : []
    // }
      
    return {
      gameScores,
      standings,
      teams: teamsObj
    }
  }

  const renderLoader = () => (
    <div style={loaderStyle}>
      <CircularProgress />
    </div>
  )

  const renderScores = () => {
    const { loading, gameScores, teams } = state

    if (loading) {
      return renderLoader()
    } else if (gameScores.length > 0) {
      return gameScores.map(gameScore => 
        <Scoreboard key={gameScore.gameId} gameScore={gameScore} teams={teams} />
      )
    } else {
      return (
        <Typography variant="h5" style={errorStyle}>We can't load the scores</Typography>
      )
    }
  }

  const renderStandings = () => {
    const { loading, standings } = state

    if (loading) {
      return renderLoader()
    } else if (standings.length > 0) {
      return (
        <Teams standings={standings} />
      )
    } else {
      return (
        <Typography variant="h5" style={errorStyle}>We can't load the standings</Typography>
      )
    }
  }

  return (
    <Container sx={{ mt: 12, px: 0 }}>
      <TabPanel value={tab} index={0}>
        {renderScores()}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        {renderStandings()}
      </TabPanel>
    </Container>
  );
}

export default Home;
