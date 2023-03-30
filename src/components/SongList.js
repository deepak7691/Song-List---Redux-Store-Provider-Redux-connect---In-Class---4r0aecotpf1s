import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

function SongList(props) {
  const { songs, selectSong } = props;

  const handleSongSelect = (song) => {
    selectSong(song);
  };

  return (
    <div>
      {songs.map((song) => (
        <div key={song.title} className="song" onClick={() => handleSongSelect(song)}>
          {song.title}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectSong })(SongList);
