import fetch from 'isomorphic-fetch';
import utils from './utils';

const baseUrl = 'http://data.nba.net/10s/prod/v1/';

const api = {
  teams: {
    async getList(year = new Date().getFullYear()) {
      const response = await fetch(`${baseUrl}/${year}/teams.json`);
      const data = await response.json();
      return data;
    }
  },
  scoreboards: {
    async getList(date = new Date()) {
      date = utils.getFormatDate(date);
      const response = await fetch(`${baseUrl}/${date}/scoreboard.json`);
      const data = await response.json();
      return data;
    }
  },
  conferenceStandings: {
    async getList() {
      const response = await fetch(`${baseUrl}/current/standings_conference.json`);
      const data = await response.json();
      return data;
    }
  }
};

export default api;
