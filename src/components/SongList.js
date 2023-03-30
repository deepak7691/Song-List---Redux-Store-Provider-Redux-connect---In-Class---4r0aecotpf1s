import React from "react";
import { connect } from "react-redux";
function SongList(props) {
    const { songs } = props;
    return (
        <div>
            {songs.map((song) => (
                <div className="song">{song.title}</div>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
};

// Add code here
