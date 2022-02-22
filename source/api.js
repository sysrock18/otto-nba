import fetch from 'isomorphic-fetch';
import utils from './utils';

const baseUrl = 'https://api.mysportsfeeds.com/v1.1/pull/nba';

const api = {
  season: {
    async getCurrent(date = new Date()) {
      date = utils.getFormatDate(date);
      const response = await fetch(`${baseUrl}/current_season.json?fordate=${date}`, {
        headers: {
          'Authorization': 'Basic '+btoa('sysrock18:19027920')
        },
      })
      .then(response => response.json())
      .then(data => data.currentseason.season[0].details)
      .catch(err => false);
      return response;
    }
  },
  scoreboards: {
    async getList(date = new Date(), seasonName) {
      date = utils.getFormatDate(date);
      const response = await fetch(`${baseUrl}/${seasonName}/scoreboard.json?fordate=${date}`, {
        headers: {
          'Authorization': 'Basic '+btoa('sysrock18:19027920')
        },
      })
      .then(response => response.json())
      .then(data => data.scoreboard.gameScore)
      .catch(err => false);
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
