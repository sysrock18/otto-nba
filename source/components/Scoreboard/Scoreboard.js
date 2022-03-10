import React, { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Scoreboard.css';
import Logo from '../Logo/Logo';
import { Typography, useMediaQuery } from '@mui/material';
import utils from '../../utils';
import LiveIndicator from '../LiveIndicator/LiveIndicator';

function Scoreboard({ gameScore, teams }) {

  const startTime = useMemo(() => utils.getGameTime(new Date(gameScore.startTimeUTC)), [gameScore.startTimeUTC])
  const gameDate = useMemo(() => utils.getGameDate(new Date(gameScore.startTimeUTC)), [gameScore.startTimeUTC])
  const hTeamCode = gameScore.hTeam.triCode.toLowerCase()
  const vTeamCode = gameScore.vTeam.triCode.toLowerCase()
  const match540px = useMediaQuery('(max-width: 540px)')
  const teamNameSize = match540px ? 12 : 16

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
            <Logo teamCode={vTeamCode} />
            <Typography sx={{ fontSize: 12 }}>{teams[vTeamCode]?.city}</Typography>
            <Typography sx={{ fontSize: teamNameSize, fontWeight: 600 }}>{teams[vTeamCode]?.nickname}</Typography>
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
            <Logo teamCode={hTeamCode} />
            <Typography sx={{ fontSize: 12 }}>{teams[hTeamCode]?.city}</Typography>
            <Typography sx={{ fontSize: teamNameSize, fontWeight: 600 }}>{teams[hTeamCode]?.nickname}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Scoreboard;
