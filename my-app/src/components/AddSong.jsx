function AddNewSong() {
    return (
        <div>
            <h2>Playlist</h2>
            <input className="input-box" type="text" placeholder="Song..." />
            <input className="button add" type="button" value="Add new song" />
        </div>
    )
}

export default AddNewSong