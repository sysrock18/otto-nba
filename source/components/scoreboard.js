import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './scoreboard.css';

function Scoreboard({ gameScore }) {

  return (
    <div className={styles.cardGameScore}>
      <Card id={`game-${gameScore.gameId}`} style={{
        textAlign: 'center',
        minWidth: '500px'
      }}>
        <CardContent>
          <div className={styles.containerTeam}>
            <div><img src={`https://otto-nba-sfs.now.sh/images/${gameScore.vTeam.triCode.toLowerCase()}.png`} /></div>
            <div className={styles.awayTeam}>
              <div className={styles.teamName}>{gameScore.vTeam.triCode}</div>
            </div>
          </div>
          <div className={styles.containerResult}>
            <div>Location</div>
            <div className={styles.location}>{gameScore.arena.name}</div>
            <div className={styles.containerScore}>
              <div className={styles.awayScore}>{gameScore.vTeam.score}</div>
              <div className={styles.homeScore}>{gameScore.hTeam.score}</div>
            </div>
            <div className={styles.clear}></div>
            <div>{gameScore.startTimeUTC}</div>
            {/* <div>{gameScore.game.time}</div> */}
          </div>
          <div className={styles.containerTeam}>
            <img src={`https://otto-nba-sfs.now.sh/images/${gameScore.hTeam.triCode.toLowerCase()}.png`} />
            <div className={styles.homeTeam}>
              <div className={styles.teamName}>{gameScore.hTeam.triCode}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Scoreboard;
