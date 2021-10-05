import React, { useState } from "react";
import AddButton from "./UI/button/Button";
import SongInput from "./UI/input/Input";

const Playlist = ({ addNewSong, generateId }) => {
  const [songName, setSongName] = useState({
    author: "",
    year: "",
    title: "",
    isLiked: false,
  });

  const handleAddSong = (event) => {
    event.preventDefault();

    const newSong = {
      ...songName,
      id: generateId,
    };

    addNewSong(newSong);
  };
  return (
    <div className="song_item">
      <form>
        <SongInput
          name="title"
          className="input-box"
          type="text"
          value={songName.title}
          onChange={(e) => setSongName({ ...songName, title: e.target.value })}
          placeholder="Song name..."
        ></SongInput>
        <SongInput
          name="author"
          className="input-box"
          type="text"
          value={songName.author}
          onChange={(e) => setSongName({ ...songName, author: e.target.value })}
          placeholder="Song author..."
        ></SongInput>
         <SongInput
          name="album"
          className="input-box"
          type="text"
          value={songName.album}
          onChange={(e) => setSongName({ ...songName, album: e.target.value })}
          placeholder="Song album..."
        ></SongInput>
        <SongInput
          name="year"
          className="input-box"
          type="text"
          value={songName.year}
          onChange={(e) =>
            setSongName({ ...songName, year: e.target.value })
          }
          placeholder="Song release year..."
        ></SongInput>
        <AddButton
          type="submit"
          onClick={handleAddSong}
          customClassName="AddButton"
        >
          Create song
        </AddButton>
      </form>
    </div>
  );
};
export default Playlist;
