import React from 'react';
import Avatar from '@mui/material/Avatar';
import styles from './Standings.css';
import Logo from '../Logo/Logo';
import _ from 'lodash'
import { Typography } from '@mui/material';

function Standings({ name, conference }) {

  const getGamesPlayed = (win, loss) => parseInt(win) + parseInt(loss)

  return (
    <div className={styles.conferenceStandings}>
      <div className={styles.conferenceName}>
        <Typography variant="h5">{_.capitalize(name)}</Typography>
        <Logo teamCode={name} />
      </div>
      <table className={styles.tableStandings}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th><Typography sx={{ fontWeight: 600 }}>G</Typography></th>
            <th><Typography sx={{ fontWeight: 600 }}>W</Typography></th>
            <th><Typography sx={{ fontWeight: 600 }}>L</Typography></th>
          </tr>
        </thead>
        <tbody>
        {conference.map((item) => (
          <tr key={item.teamSitesOnly.teamCode}>
            <td><Typography sx={{ fontWeight: 600 }}>{item.confRank}</Typography></td>
            <td>
              <Avatar src={`assets/${item.teamSitesOnly.teamTricode.toLowerCase()}.png`} />
            </td>
            <td>
              <Typography sx={{ fontSize: 14 }}>
                {`${item.teamSitesOnly.teamName} ${item.teamSitesOnly.teamNickname}`}
              </Typography>
            </td>
            <td><Typography>{getGamesPlayed(item.win, item.loss)}</Typography></td>
            <td><Typography>{item.win}</Typography></td>
            <td><Typography>{item.loss}</Typography></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );

}

export default Standings;
