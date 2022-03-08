import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Scoreboard.css';
import Logo from '../Logo/Logo';
import { Typography } from '@mui/material';

function Scoreboard({ gameScore }) {

  return (
    <div className={styles.cardGameScore}>
      <Card id={`game-${gameScore.gameId}`} style={{
        textAlign: 'center',
        minWidth: '500px'
      }}>
        <CardContent className={styles.cardContent}>
          <div className={styles.teamNameContainer}>
            <Typography className={styles.teamName}>{gameScore.vTeam.triCode}</Typography>
          </div>
          <div className={styles.containerTeam}>
            <Logo teamCode={gameScore.vTeam.triCode.toLowerCase()} />
          </div>
          <div className={styles.containerResult}>
            <Typography>Location</Typography>
            <Typography className={styles.location}>{gameScore.arena.name}</Typography>
            <div className={styles.containerScore}>
              <Typography className={styles.awayScore}>{gameScore.vTeam.score}</Typography>
              <Typography className={styles.homeScore}>{gameScore.hTeam.score}</Typography>
            </div>
            <div className={styles.clear}></div>
            <Typography>{gameScore.startTimeUTC}</Typography>
          </div>
          <div className={styles.containerTeam}>
            <Logo teamCode={gameScore.hTeam.triCode.toLowerCase()} />
          </div>
          <div className={styles.teamNameContainer}>
            <Typography className={styles.teamName}>{gameScore.hTeam.triCode}</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Scoreboard;
