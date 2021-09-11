import classes from './LikeButton.module.css';

function LikeButton() {
    function toggleLike(event) {
        let clickedElement = event.target;

        clickedElement.parentElement.classList.toggle('liked');
        clickedElement.classList.toggle('active');

        if(clickedElement.classList.contains('active')) {
            clickedElement.innerHTML = 'Unlike'
        } else {
            clickedElement.innerHTML = 'Like'
        }
    };

    return (
        <button className={classes.LikeSongButton} onClick={(e) => toggleLike(e)}>Like</button>
    );
};

export default LikeButton;