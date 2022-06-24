/**
 * Get current time in milliseconds since epoch time
 * @returns number
 */
export function getCurrentTime() {
  return new Date().getTime();
}
/**
 *
 * @param {number} time1 time in milliseconds, counted from epoch time
 * @param {number} time2 time in milliseconds, counted from epoch time
 * @returns the difference between two timestamp
 */
export function getTimeDifference(time1, time2) {
  return Math.abs(time2 - time1);
}
