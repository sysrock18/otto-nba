import { Typography } from '@mui/material'
import React from 'react'
import styles from './LiveIndicator.css'

function LiveIndicator() {
  return (
    <div className={styles.liveIndicator}>
      <div className={styles.dotLive}></div>
      <Typography className={styles.liveText} sx={{ ml: .5 }}>Live</Typography>
    </div>
  )
}

export default LiveIndicator