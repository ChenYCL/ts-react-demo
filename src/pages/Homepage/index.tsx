import React from 'react';
// import cx from 'classnames';
import { Props } from '../../types';
import './index.scss';
import Button from '../../components/Button';

const Homepage = (props: Props) => {
    return (
        <section className="content-box">
            <div className="module-page-1">
                <div className="desc">Find the perfect song for your film</div>
                <div className="btn-div">
                    <Button
                        text={'CREATE AN ACCOUNT'}
                        size={{ height: 50, width: 300 }}
                        callback={() => console.log(22)}
                        className={'create-btn'}
                    />
                </div>
                <div className="css-video">
                    <video
                        width="100%"
                        id="module-video-1"
                        autoPlay={true}
                        playsinline={true}
                        muted={true}
                        poster="../../resource/video/find-the-perfect-song-for-your-film-still.jpg">
                        <source
                            src="../../resource/video/find-the-perfect-song-for-your-film.mp4"
                            type="video/mp4; codecs=hevc"
                        />
                        <source src="../../resource/video/find-the-perfect-song-for-your-film.webm" type="video/webm" />
                        <source
                            src="https://cdn.musicbed.com/video/upload/vc_auto/static/home/find-the-perfect-song-for-your-film.mp4"
                            type="video/mp4"
                        />
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>
            </div>
            <div className="module-page-2">2</div>
            <div className="module-page-3">3</div>
        </section>
    );
};

export default Homepage;
