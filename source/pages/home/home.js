import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Scoreboard from '../../components/Scoreboard/Scoreboard';
import Teams from '../../components/Teams/teams';
import TabPanel from '../../components/TabPanel/TabPanel';
import { Container, Typography } from '@mui/material';
import styles from './Home.css'
import useGetData from '../../hooks/useGetData';

function Home({ tab }) {
  const data = useGetData()

  const renderLoader = () => (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  )

  const renderScores = () => {
    const { loading, gameScores, teams } = data

    if (loading) {
      return renderLoader()
    } else if (gameScores.length > 0) {
      return gameScores.map(gameScore => 
        <Scoreboard key={gameScore.gameId} gameScore={gameScore} teams={teams} />
      )
    } else {
      return (
        <Typography variant="h5" className={styles.error}>We can't load the scores</Typography>
      )
    }
  }

  const renderStandings = () => {
    const { loading, standings } = data

    if (loading) {
      return renderLoader()
    } else if (Object.keys(standings).length > 0) {
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
