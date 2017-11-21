import fetch from 'isomorphic-fetch';
import utils from './utils';

const baseUrl = 'https://api.mysportsfeeds.com/v1.1/pull/nba/';

const api = {
  season: {
    async getCurrent(date = new Date()) {
      date = utils.getFormatDate(date);
      const response = await fetch(`${baseUrl}/current_season.json?fordate=${date}`, {
        headers: {
          'Authorization': 'Basic '+btoa('sysrock18:19027920')
        },
      });
      const data = await response.json();
      return data;
    }
  },
  scoreboards: {
    async getList(date = new Date(), seasonName) {
      date = utils.getFormatDate(date);
      const response = await fetch(`${baseUrl}/${seasonName}/scoreboard.json?fordate=${date}`, {
        headers: {
          'Authorization': 'Basic '+btoa('sysrock18:19027920')
        },
      });
      const data = await response.json();
      return data;
    }
  },
  conferenceStandings: {
    async getList(seasonName) {
      const response = await fetch(`${baseUrl}/${seasonName}/conference_team_standings.json?teamstats=W,L`, {
        headers: {
          'Authorization': 'Basic '+btoa('sysrock18:19027920')
        },
      });
      const data = await response.json();
      return data;
    }
  }
};

export default api;
