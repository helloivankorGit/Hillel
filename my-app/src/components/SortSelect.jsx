import React from "react";

const SortSelect = ({ setOrderBy }) => {
  return (
    <select
      onChange={(event) => setOrderBy(event.target.value)}
    >
      <option value="null">Without sort</option>
      <option value="isLiked">Like</option>
      <option value="year">Year</option>
    </select>
  );
};

export default SortSelect;