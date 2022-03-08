import fetch from 'isomorphic-fetch';
import utils from './utils';
import _ from 'lodash'

const baseUrl = 'https://data.nba.net/data/10s/prod/v1/';

const api = {
  scoreboards: {
    async getList(date = new Date()) {
      date = utils.getFormatDate(date);
      const response = await fetch(`${baseUrl}/${date}/scoreboard.json`)
        .then(response => response.json())
        .then(data => _.orderBy(data.games, 'isGameActivated', 'desc'))
        .catch(err => err);
      return response;
    }
  },
  conferenceStandings: {
    async getList() {
      
    }
  },
  teams: {
    async getList() {
      const year = new Date().getFullYear() - 1
      const teams = {}
      const response = await fetch(`${baseUrl}/${year}/teams.json`)
        .then(response => response.json())
        .then(data => data.league.standard)
        .catch(err => err);
      return response;
    }
  }
};

export default api;
