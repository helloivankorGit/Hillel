import SortSelect from "./SortSelect";

function SortSongs({ orderBy, setOrderBy }) {
  return <SortSelect orderBy={orderBy} setOrderBy={setOrderBy} />;
}

export default SortSongs;