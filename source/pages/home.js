import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';
import { Tabs, Tab } from 'material-ui/Tabs';

import api from '../api';
import Scoreboard from '../components/scoreboard';
import Teams from './teams';
import styles from './home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gameScores: [],
      loading: true
    };
  }

  async componentDidMount() {
    let todayDate = new Date();
    let yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 1));
    const currentSeason = await api.season.getCurrent(yesterdayDate);
    const seasonName = currentSeason.slug;
    const gameScores = await api.scoreboards.getList(yesterdayDate, seasonName);

    this.setState({
      gameScores,
      loading: false
    });
  }

  render() {
    return (
      <section name="Home">
        <Tabs>
          <Tab label="Scoreboards" >
            <section>
              {this.state.loading && (
                <div className={styles.loader}>
                  <CircularProgress />
                </div>
              )}

              {this.state.gameScores
                .map(gameScore => <Scoreboard key={gameScore.game.ID} {...gameScore} />)}
            </section>
          </Tab>
          <Tab label="Standings" >
            <Teams />
          </Tab>
        </Tabs>
      </section>
    );
  }
}

export default Home;
