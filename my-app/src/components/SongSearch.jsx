import SongInput from "./UI/input/Input";

function SongSearch({ searchQuery, setSearchQuery }) {
  return (
    <SongInput
      value={searchQuery}
      placeholder="Search song by title..."
      onChange={(event) => setSearchQuery(event.target.value)}
    />
  );
}

export default SongSearch;