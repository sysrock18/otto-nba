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
      standings: [],
      loading: true
    };
  }

  async componentDidMount() {
    let todayDate = new Date();
    let yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 1));
    const currentSeason = await api.season.getCurrent(yesterdayDate);
    let gameScores = [];
    let standings = [];
    if (currentSeason) {
      const seasonName = currentSeason.slug;
      gameScores = await api.scoreboards.getList(yesterdayDate, seasonName);
      standings = await api.conferenceStandings.getList(seasonName);
    }

    this.setState({
      gameScores,
      standings,
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

              {this.state.gameScores.length > 0 &&
                this.state.gameScores
                  .map(gameScore => <Scoreboard key={gameScore.game.ID} {...gameScore} />)}

              {!this.state.gameScores.length && !this.state.loading &&
                (<h2 className={styles.error}>We can't load the teams :(</h2>)}
            </section>
          </Tab>
          <Tab label="Standings" >
            {this.state.loading && (
              <div className={styles.loader}>
                <CircularProgress />
              </div>
            )}
            
            {this.state.standings.length > 0 &&
              (<Teams standings={this.state.standings} />)}

            {!this.state.standings.length && !this.state.loading &&
              (<h2 className={styles.error}>We can't load the standings :(</h2>)}
          </Tab>
        </Tabs>
      </section>
    );
  }
}

export default Home;
