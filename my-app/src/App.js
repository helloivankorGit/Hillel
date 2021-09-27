import React, { useState, useMemo } from "react";

import AddNewSong from "./components/AddSong";
import SongList from "./components/SongList";
import Button from './components/UI/button/Button';
import Modal from './components/UI/modal/Modal';
import Counter from './components/Counter';
import SongSearch from "./components/SongSearch";
import SongSort from "./components/SongSort";

import { initialSongs } from './songs';

import "./style/App.css";

export const SongContext = React.createContext();

function App() {
  const [songs, setSongs] = useState(initialSongs);
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const generateId = () => {
    if (!songs.length) {
      return 1;
    }
    return songs[songs.length - 1].id + 1
  };

  const addSong = (song) => {
    setSongs([...songs, song]);
    setModal(false);
  }

  const deleteSong = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  }

  const likeSong = (id) => {
    setSongs(songs.map(song => song.id === id ? (song.isLiked ? { ...song, isLiked: false } : { ...song, isLiked: true }) : song));
  }

  const modifedArray = useMemo(() => {
    return songs.filter(song => song.title.toLowerCase().startsWith(searchQuery.toLowerCase())).sort((a, b) => b[orderBy] - a[orderBy])
  }, [searchQuery, orderBy, songs])

  return (
    <div className="App">
      <Button onClick={() => setModal(true)} customClassName='AddSongButton'>Add song</Button>
      <Modal visible={modal} setVisible={setModal}>
      <AddNewSong addSong={addSong} generateId={generateId}/>
      </Modal>
      <SongSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SongSort sortQuery={orderBy} setOrderBy={setOrderBy} />
      <SongContext.Provider value={{ deleteSong, likeSong }}>
        <SongList songs={modifedArray} />
      </SongContext.Provider>
      <Counter songs={songs} />
    </div>
  );
}

export default App;