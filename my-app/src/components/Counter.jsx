import classes from "../style/Counter.module.css";

function Counter({songs}) {
    return (
        <div>
            <p className={classes.count__title}>Count of songs: <span className={classes.count}>{songs.length}</span></p>
        </div>
    );
};

export default Counter