import React from 'react';
import './index.scss';
interface AllProps {
    playlist: React.ReactNode;
    songs: React.ReactNode;
}
const Songs: React.FC<AllProps> = (props: AllProps) => {
    const { playlist, songs } = props;
    return (
        <div className="wrapper-songs">
            <div className="rightBlock">
                <div className="playlist">{playlist}</div>
                <div className="songs">{songs}</div>
            </div>
        </div>
    );
};

export default Songs;
