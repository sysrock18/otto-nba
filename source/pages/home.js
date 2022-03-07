import React, { useEffect, useState, useReducer } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import api from '../api';
import Scoreboard from '../components/scoreboard';
import Teams from './teams';
import TabPanel from '../components/TabPanel';
import { Typography } from '@mui/material';

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
      return {...state, gameScores: action.payload}
    case "SET_GAMESCORES":
      return {...state, count: action.payload}
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
    loading: true
  })

  useEffect(() => {
    let isCancelled = false;

    getData().then(({ gameScores, standings }) => {
      if (!isCancelled) {
        dispatch({ type: 'SET_GAMESCORES', payload: gameScores })
        dispatch({ type: 'SET_STANDINGS', payload: standings })
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
    const currentSeason = await api.season.getCurrent(yesterdayDate)
    let gameScores = []
    let standings = []

    if (currentSeason) {
      const seasonName = currentSeason.slug
      const gameScoresResp = await api.scoreboards.getList(yesterdayDate, seasonName)
      const standingsResp = await api.conferenceStandings.getList(seasonName)
      gameScores = gameScoresResp ? gameScoresResp : []
      standings = standingsResp ? standingsResp : []
    }
      
    return {
      gameScores,
      standings,
    }
  }

  const renderLoader = () => (
    <div style={loaderStyle}>
      <CircularProgress />
    </div>
  )

  const renderScores = () => {
    const { loading, gameScores } = state

    if (loading) {
      return renderLoader()
    } else if (gameScores.length > 0) {
      return gameScores.map(gameScore => 
        <Scoreboard key={gameScore.game.ID} {...gameScore} />
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
    <>
      <TabPanel value={tab} index={0}>
        {renderScores()}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        {renderStandings()}
      </TabPanel>
    </>
  );
}

export default Home;
