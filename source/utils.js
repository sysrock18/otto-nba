const utils = {
  getFormatDate(date = new Date()) {
    let day = date.getDate()
    let month = date.getMonth() + 1
    if (day < 10) {
      day = '0' + day
    }
    if (month < 10) {
      month = '0' + month
    }
    return `${date.getFullYear()}${month}${day}`;
  },

  getGameTime(date) {
    return new Intl.DateTimeFormat('en-US', {hour: 'numeric', minute: 'numeric' }).format(date)
  },

  getGameDate(date) {
    return date.toLocaleDateString('en-US', {month: 'short', day: 'numeric' });
  },

  imageExists(imageUrl){

    var http = new XMLHttpRequest();

    http.open('HEAD', imageUrl, false);
    http.send();

    return http.status != 404;
  }
}

export default utils;
