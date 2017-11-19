const utils = {
  getFormatDate(date = new Date()) {
    return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`;
  }
}

export default utils;
