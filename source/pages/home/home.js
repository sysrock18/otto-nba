import React, { useEffect, useRef } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Scoreboard from '../../components/Scoreboard/Scoreboard';
import Teams from '../../components/Teams/teams';
import TabPanel from '../../components/TabPanel/TabPanel';
import { Container, Fab, Typography } from '@mui/material';
import styles from './Home.css'
import useGetData from '../../hooks/useGetData';
import RefreshIcon from '@mui/icons-material/Refresh';
import useEventListener from '../../hooks/useEventListener';

function Home({ tab }) {
  const { data, getData } = useGetData()
  const refreshButtonRef = useRef(null)
  useEventListener(refreshButtonRef, 'mousedown', () => {
    if (!data.loading) {
      getData()
    }
  });

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
        <Typography variant="h5" style={styles.error}>We can't load the standings</Typography>
      )
    }
  }

  return (
    <Container sx={{ mt: 13, px: 0 }}>
      <TabPanel value={tab} index={0}>
        {renderScores()}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        {renderStandings()}
      </TabPanel>
      <Fab
        ref={refreshButtonRef}
        disabled={data.loading}
        aria-label="refresh"
        color="secondary"
        sx={{ bottom: 24, right: 24, position: 'fixed' }}
      >
        <RefreshIcon />
      </Fab>
    </Container>
  );
}

export default Home;
