import React from 'react';
import Songs from './Songs';
import Song from './Song';
import Play from './Playlist';

class SongCombine extends React.Component {
    render() {
        return <Songs songs={<Song />} playlist={<Play />} />;
    }
}

export default SongCombine;
