export const generateId = (songs) => (songs.length ? songs[songs.length - 1].id + 1 : 1)
  // const generateId = () => (songs.length ? songs[songs.length - 1].id + 1 : 1);
