import { useState } from 'react';
import Button from './UI/button/Button';
import Input from './UI/input/Input';

function AddNewSong({ addSong, generateId }) {
    const [song, setSong] = useState({
        author: '',
        title: '',
        album: '',
        year: ''
    });

    const addNewSong = (event) => {
        event.preventDefault();
        
        if (song.author && song.title && song.album && song.year) {
            const addNewSong = {
                ...song,
                id: generateId(),
            };

            addSong(addNewSong);
        } else {
            alert('Please fill all required fields')
        }
    }

    return (
        <form className='create__song'>
            <Input type="text"
                    value={song.author}
                    name="author"
                    placeholder="Author"
                    onChange={(event) => setSong({ ...song, author: event.target.value })}
                    />
            <Input type="text"
                value={song.title}
                name="title"
                placeholder="Title"
                onChange={(event) => setSong({ ...song, title: event.target.value })}
                />
            <Input type="text"
                value={song.album}
                name="album"
                placeholder="Album"
                onChange={(event) => setSong({ ...song, album: event.target.value })}
                />
            <Input type="text"
                value={song.year}
                name="year"
                placeholder="Year"
                onChange={(event) => setSong({ ...song, year: event.target.value })}
                />
            <Button type="submit" onClick={addNewSong} customClassName='AddSongButton'>Add Song</Button>
        </form>
    )
}

export default AddNewSong;