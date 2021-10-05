import React from "react";
import { useParams } from "react-router-dom";
import songs from "../../songs";

function SongInfo() {
  const params = useParams();
  const song = songs.filter((song) => song.id === +params.id)[0];

  return (
    <>
      <h1>Song №{params.id}</h1>
      <p>{song.title}</p>
      <p>{song.author}</p>
    </>
  );
}

export default SongInfo;
