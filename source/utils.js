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
  }
}

export default utils;
