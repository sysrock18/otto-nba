import fetch from 'isomorphic-fetch';
import utils from './utils';

import current_season from './mock/current_season.json';
import scoreboard from './mock/scoreboard.json';
import conference_team_standings from './mock/conference_team_standings.json';

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
      .then(data => data.currentseason.season[0].details);
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
      .then(data => data.scoreboard.gameScore);
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
      .then(data => data.conferenceteamstandings.conference);
      return response;
    }
  }
};

export default api;
