import { useMemo } from "react";

export const useSongs = (songs, searchQuery, orderBy) => {
  return useMemo(() => {
    return songs
      .filter((song) =>
        song.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
      .sort((a, b) => b[orderBy] - a[orderBy]);
  }, [searchQuery, orderBy, songs]);
};
