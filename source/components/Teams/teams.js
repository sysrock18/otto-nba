import React from 'react';
import Standings from '../Standings/Standings';
import styles from './Teams.css';

function Teams({ standings }) {

  return (
    <section name="Teams">
      <div className={styles.container}>
        <Standings name="east" conference={standings.east} />
        <Standings name="west" conference={standings.west} />
      </div>
    </section>
  );

}

export default Teams;
