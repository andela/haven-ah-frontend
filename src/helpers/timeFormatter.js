import moment from 'moment';

/**
 *
 * @param {number} readtime
 * @returns readtime
 */
const timeFormatter = (readtime) => {
  const minutes = Math.ceil(readtime / 60);
  return `${minutes} mins read`;
};

export const formatTime = (time) => {
  return moment(time).format('lll');
};

export default timeFormatter;
