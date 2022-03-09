import React from 'react';
import Avatar from '@mui/material/Avatar';
import styles from './Standings.css';
import Logo from '../Logo/Logo';

function Standings({ name, conference }) {

  const getGamesPlayed = (win, loss) => parseInt(win) + parseInt(loss)

  return (
    <div className={styles.conferenceStandings}>
      <div className={styles.conferenceName}>
        <Logo teamCode={name} />
        <span>{name}</span>
      </div>
      <table className={styles.tableStandings}>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>G</th>
            <th>W</th>
            <th>L</th>
          </tr>
        </thead>
        <tbody>
        {conference.map((item) => { return (
          <tr key={item.teamSitesOnly.teamCode}>
            <td><b>{item.confRank}</b></td>
            <td>
              <Avatar src={`/assets/${item.teamSitesOnly.teamTricode.toLowerCase()}.png`} />
            </td>
            <td>{`${item.teamSitesOnly.teamName} ${item.teamSitesOnly.teamNickname}`}</td>
            <td>{getGamesPlayed(item.win, item.loss)}</td>
            <td>{item.win}</td>
            <td>{item.loss}</td>
          </tr>
        )})}
        </tbody>
      </table>
    </div>
  );

}

export default Standings;
