import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

function SongItem ({ song }) {
    return(
        <li className="song__item">
            <div className="song__info">
                {song.author} - {song.name} ({song.albumName})
                <div className="song__date">{song.releaseDate}</div>
            </div>
            <LikeButton />
            <DeleteButton />
        </li>
    );
}

export default SongItem;