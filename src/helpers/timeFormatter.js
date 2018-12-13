/**
 *
 * @param {number} readtime
 * @returns readtime
 */
const timeFormatter = (readtime) => {
  const minutes = Math.ceil(readtime / 60);
  return `${minutes} mins read`;
};

export default timeFormatter;
