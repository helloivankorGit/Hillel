import SongItem from "./SongItem";
import SongsArray from "./SongsArray";

function SongList() {
    return (
        <div className="songs-wrapper">
            <ul className="songs">
                {
                    SongsArray.map(songItem => <SongItem song={songItem} key={songItem.id} />)
                }
            </ul>
        </div>
    );
};

export default SongList;