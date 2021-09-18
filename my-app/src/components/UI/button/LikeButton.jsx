import classes from './LikeButton.module.css';

function LikeButton({ likeSong, song, children }) {
    return (
      <button className={classes.likeButton} onClick={() => likeSong(song.id)}>
        {children}
      </button>
    );
  }

export default LikeButton;