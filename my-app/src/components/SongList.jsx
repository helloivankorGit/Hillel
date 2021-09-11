import SongItem from "./SongItem";
import classes from "../style/SongList.module.css";

function SongList({ songs, deleteSong }) {
    return (
        <div className={classes.songs__wrapper}>
        {
            songs.length
            ? <ol className={classes.songs}>
                {
                songs.map(songItem => <SongItem 
                song={songItem}
                deleteSong={deleteSong}
                key={songItem.id}
                />)
                }
            </ol>
            : <h1 style={ { textAlign: 'center' } }>Not Found Any Songs</h1>
        }
        </div>
    );
};

export default SongList;