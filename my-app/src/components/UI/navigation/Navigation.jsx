import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="navigation">
            <Link to="/songs">Playlist</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;