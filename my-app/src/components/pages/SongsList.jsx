import React, { useState } from "react";
import songsArr from "../../songs";
import Playlist from "../Playlist";
import NewSongModal from "../UI/modal/Modal";
import AddButton from "../UI/button/Button";
import Counter from "../Counter";
import SongList from "../SongList";
import SongSearch from "../SongSearch";
import SongSort from "../SongSort";
import { generateId } from "../services/generateId";
import { SongContext } from "../../context";
import { useSongs } from "../hooks/useSongs";

function SongsList() {
  const [songs, setSong] = useState(songsArr);
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const modifedArray = useSongs(songs, searchQuery, orderBy);

  const addNewSong = (songName) => {
    setSong([...songs, songName]);
  };
  console.log(songs);

  const deleteSong = (songId) => {
    const filteredSongs = songs.filter((song) => song.id !== songId);
    setSong(filteredSongs);
  };

  const likeSong = (songId) => {
    const mappedSongs = songs.map((song) =>
      song.id === songId
        ? song.isLiked
          ? { ...song, isLiked: false }
          : { ...song, isLiked: true }
        : song
    );
    setSong(mappedSongs);
  };

  return (
    <div className="App">
      <div className="header">
        <AddButton
          type="submit"
          onClick={() => setModal(true)}
        >
          Create new song
        </AddButton>
        <SongSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SongSort sortQuery={orderBy} setOrderBy={setOrderBy} />
      </div>
      <Counter songs={songs} customClassName="counter" />
      <NewSongModal visible={modal} setVisible={setModal}>
        <Playlist addNewSong={addNewSong} generateId={generateId(songs)} />
      </NewSongModal>
      <SongContext.Provider value={{ deleteSong, likeSong }}>
        <div className="songlist-wraper">
          <SongList songs={modifedArray} />
        </div>
      </SongContext.Provider>
    </div>
  );
}

export default SongsList;
