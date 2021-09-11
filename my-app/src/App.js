import { useState } from 'react';

import AddNewSong from "./components/AddSong";
import SongList from "./components/SongList";
import Button from './components/UI/button/Button';
import Modal from './components/UI/modal/Modal';
import Counter from './components/Counter';

import { initialSongs } from './songs';

import "./style/App.css";

function App() {
  const [songs, setSongs] = useState(initialSongs);
  const [modal, setModal] = useState(false);

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

  return (
    <div className="App">
      <Button onClick={() => setModal(true)} customClassName='AddSongButton'>Add song</Button>
      <Modal visible={modal} setVisible={setModal}>
      <AddNewSong addSong={addSong} generateId={generateId}/>
      </Modal>
      <SongList songs={songs} deleteSong={deleteSong} />
      <Counter songs={songs} />
    </div>
  );
}

export default App;