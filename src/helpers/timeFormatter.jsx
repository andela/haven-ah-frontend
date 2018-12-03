/**
 *
 * @param {number} readtime
 * @returns readtime
 */

const timeFormatter = (readtime) => {
  const minutes = Math.floor(readtime / 60);
  return `${minutes} mins read`;
};

export default timeFormatter;
