/**
 * Get current time in milliseconds since epoch time
 * @returns number
 *
 * @type {function() => number}
 */
export function getCurrentTime() {
  return new Date().getTime();
}
/**
 *
 * @param {number} time1 time in milliseconds, counted from epoch time
 * @param {number} time2 time in milliseconds, counted from epoch time
 * @returns the difference between two timestamp
 *
 * @type {function(number, number) => number}
 */
export function getTimeDifference(time1, time2) {
  return Math.abs(time2 - time1);
}

export function convertUnixToTime(unix) {
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }

  const date = new Date(unix * 1000);
  const month = months[date.getMonth()];
  
  let dayOfMonth = date.getDate();
  dayOfMonth < 10 ? dayOfMonth = `0${dayOfMonth}` : dayOfMonth = dayOfMonth.toString();
  
  let timeOfDay = 'AM'
  let hour = date.getHours();
  if(hour > 12) {
    timeOfDay = 'PM';
    hour = (hour - 12).toString();
  } else {
    hour = `0${hour}`;
  }

  let minutes = date.getMinutes();
  if(minutes < 10) {
    minutes = `0${minutes}`
  } else {
    minutes = minutes.toString();
  }

  return `${month} ${dayOfMonth} at ${hour}:${minutes} ${timeOfDay}`;
}