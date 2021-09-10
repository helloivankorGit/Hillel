import Button from './UI/button/Button';
import LikeButton from './UI/button/LikeButton';
import logo from '../images/like.svg';
import classes from "../style/SongItem.module.css";

function SongItem ({ song, deleteSong }) {
    return(
        <li className={classes.SongItem}>
            <img src={logo} alt="" className={classes.LikeIcon} />
            <div className={classes.SongInfo}>
                {song.author} - {song.title} ({song.album})
                <div className={classes.SongDate}>{song.year}</div>
            </div>
            <LikeButton />
            <Button onClick={() => deleteSong(song.id)} customClassName='DeleteSongButton'>Delete</Button>
        </li>
    );
}

export default SongItem;