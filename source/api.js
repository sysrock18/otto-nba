import fetch from 'isomorphic-fetch';
import utils from './utils';

const baseUrl = 'https://data.nba.net/data/10s/prod/v1/';

const api = {
  scoreboards: {
    async getList(date = new Date()) {
      date = utils.getFormatDate(date);
      const response = await fetch(`${baseUrl}/${date}/scoreboard.json`)
        .then(response => response.json())
        .then(data => data.games)
        .catch(err => err);
      return response;
    }
  },
  conferenceStandings: {
    async getList(seasonName) {
      const response = await fetch(`${baseUrl}/${seasonName}/conference_team_standings.json?teamstats=W,L`, {
        headers: {
          'Authorization': 'Basic '+btoa('sysrock18:19027920')
        },
      })
      .then(response => response.json())
      .then(data => data.conferenceteamstandings.conference)
      .catch(err => false);
      return response;
    }
  }
};

export default api;
