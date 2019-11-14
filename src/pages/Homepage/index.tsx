import React from 'react';
import { Props } from '../../types';
import './index.scss';
import Button from '../../components/Button';
// import TestPage from '../TestPage';

const Homepage = (props: Props) => {
    return (
        <section className="content-box">
            <div className="module-page-1">
                <div className="desc">Find the perfect song for your film</div>
                <div className="btn-div">
                    <Button
                        text={'CREATE AN ACCOUNT'}
                        size={{ height: 50, width: 300 }}
                        callback={() => alert('waiting')}
                        className={'create-btn'}
                    />
                </div>
                <div className="css-video">
                    <video
                        width="100%"
                        id="module-video-1"
                        autoPlay={true}
                        playsInline={true}
                        muted={true}
                        loop={true}
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
            <div className="module-page-2">
                <div className="css-video">
                    <video
                        id="my-video"
                        muted={true}
                        autoPlay={true}
                        loop={true}
                        poster="https://cdn.musicbed.com/image/upload/c_limit,dpr_2,f_auto,h_718,q_auto,w_784/static/welcome/general/Play-Button-Video_Poster.jpg">
                        <source
                            src="https://cdn.musicbed.com/video/upload/vc_h265/static/welcome/general/Play-Button-Video.mp4"
                            type="video/mp4; codecs=hevc"
                        />
                        <source
                            src="https://cdn.musicbed.com/video/upload/vc_vp9,f_webm/static/welcome/general/Play-Button-Video.webm"
                            type="video/webm"
                        />
                        <source
                            src="https://cdn.musicbed.com/video/upload/vc_auto/static/welcome/general/Play-Button-Video.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="cover cover-g">
                    <div className="cover-desc detail">
                        <div className="license-desc">License real music from real artists.</div>
                        <div className="feature-desc">
                            Discover a curated roster of world-class bands, composers, and artists, easily accessible
                            with innovative tools and features.
                        </div>
                        <Button
                            className="go-songs-btn"
                            size={{ height: 50, width: 300 }}
                            text="Start Browsing"
                            textColor="white"
                            color="rgb(9, 166, 167)"
                        />
                    </div>
                </div>
            </div>
            <div className="module-page-3"></div>
        </section>
    );
};

export default Homepage;
