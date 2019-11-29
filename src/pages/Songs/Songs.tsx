import React from 'react';

interface AllProps {
    leftSlider: JSX.Element;
    playlist: JSX.Element;
    songs: JSX.Element;
}

const Songs: React.FC<AllProps> = (props: AllProps) => {
    const { leftSlider, playlist, songs } = props;
    return (
        <div>
            <div className="leftSlider">{leftSlider}</div>
            <div>
                <div className="playlist">{playlist}</div>
                <div className="songs">{songs}</div>
            </div>
        </div>
    );
};

export { Songs };
