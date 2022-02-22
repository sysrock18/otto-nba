import React, { Component, PropTypes, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import api from '../api';
import Scoreboard from '../components/scoreboard';
import Teams from './teams';
import TabPanel from '../components/TabPanel';
import { AppBar } from '@mui/material';

const loaderStyle = {
  textAlign: 'center',
  padding: '10px'
}
  
const errorStyle =  {
  marginTop: '40px',
  textAlign: 'center'
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function Home() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [data, setData] = useState({
    gameScores: [],
    standings: [],
    loading: true
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const todayDate = new Date();
    const yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 1));
    const currentSeason = await api.season.getCurrent(yesterdayDate);
    let gameScores = [];
    let standings = [];

    if (currentSeason) {
      const seasonName = currentSeason.slug;
      const gameScoresResp = await api.scoreboards.getList(yesterdayDate, seasonName);
      const standingsResp = await api.conferenceStandings.getList(seasonName);
      gameScores = gameScoresResp ? gameScoresResp : [];
      standings = standingsResp ? standingsResp : [];
    }

    setData({
      gameScores,
      standings,
      loading: false
    });
  }

  const handleChange = (_e, newValue) => {
    setValue(newValue);
  };

  return (
    <section name="Home">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab label="Scoreboards" {...a11yProps(0)} />
        <Tab label="Standings" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <section>
          {data.loading && (
            <div style={loaderStyle}>
              <CircularProgress />
            </div>
          )}

          {data.gameScores.length > 0 &&
            data.gameScores.map(gameScore => <Scoreboard key={gameScore.game.ID} {...gameScore} />)}

          {!data.gameScores.length && !data.loading &&
            (<h2 style={errorStyle}>We can't load the teams</h2>)}
        </section>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        {data.loading && (
          <div style={loaderStyle}>
            <CircularProgress />
          </div>
        )}
        
        {data.standings.length > 0 &&
          (<Teams standings={data.standings} />)}

        {!data.standings.length && !data.loading &&
          (<h2 style={errorStyle}>We can't load the standings</h2>)}
      </TabPanel>
    </section>
  );
}

export default Home;
