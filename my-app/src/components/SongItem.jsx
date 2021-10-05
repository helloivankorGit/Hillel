import Button from './UI/button/Button';
import LikeButton from './UI/button/LikeButton';
import logo from '../images/like.svg';
import classes from "../style/SongItem.module.css";

import { useContext } from "react";
import { SongContext } from "../context";
import { useHistory } from "react-router-dom";

function SongItem ({ song }) {
  const { deleteSong, likeSong } = useContext(SongContext);
  const history = useHistory();

  return (
    <li className={classes.SongItem}>
      {song.isLiked ? (<img src={logo} alt='' className={classes.LikeIcon} />) : ''}

      <div className={classes.SongInfo}>
            {song.author} - {song.title} ({song.album})
            <div className={classes.SongDate}>{song.year}</div>
        </div>
        <LikeButton likeSong={likeSong} song={song}>
            {song.isLiked ? (
                'Unlike'
            ) : (
                'Like'
            )}
        </LikeButton>
        <Button onClick={() => deleteSong(song.id)} customClassName='DeleteSongButton'>Delete</Button>
        <Button type="submit" onClick={() => history.push(`/songs/${song.id}`)}>Info</Button>
    </li>
  );
}

export default SongItem;
