import React, { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Scoreboard.css';
import Logo from '../Logo/Logo';
import { Typography } from '@mui/material';
import utils from '../../utils';
import LiveIndicator from '../LiveIndicator/LiveIndicator';

function Scoreboard({ gameScore }) {

  const startTime = useMemo(() => utils.getGameTime(new Date(gameScore.startTimeUTC)), [gameScore.startTimeUTC])
  const gameDate = useMemo(() => utils.getGameDate(new Date(gameScore.startTimeUTC)), [gameScore.startTimeUTC])

  const showLiveLabel = () => {
    if (gameScore.isGameActivated) {
      return <LiveIndicator />
    }
    return null
  }

  return (
    <div className={styles.cardGameScore}>
      <Card id={`game-${gameScore.gameId}`} sx={{ p: 0 }}>
        <CardContent className={styles.cardContent}>
          <div className={styles.containerTeam}>
            <Typography variant='h4'>{gameScore.vTeam.score}</Typography>
            <Logo teamCode={gameScore.vTeam.triCode.toLowerCase()} />
            <Typography className={styles.teamName}>{gameScore.vTeam.triCode}</Typography>
          </div>
          <div className={styles.containerResult}>
            <Typography sx={{ fontWeight: 600 }}>Location</Typography>
            <Typography sx={{ fontSize: 14 }}>{gameScore.arena.name}</Typography>
            <Typography sx={{ mt: 2, fontSize: 15 }}>{gameDate}</Typography>
            <Typography sx={{ fontSize: 15 }}>{startTime}</Typography>
            { showLiveLabel() }
          </div>
          <div className={styles.containerTeam}>
            <Typography variant='h4'>{gameScore.hTeam.score}</Typography>
            <Logo teamCode={gameScore.hTeam.triCode.toLowerCase()} />
            <Typography className={styles.teamName}>{gameScore.hTeam.triCode}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Scoreboard;
