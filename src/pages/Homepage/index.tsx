import React from 'react';
import { Props } from '../../types';
import './index.scss';
import Button from '../../components/Button';
// import TestPage from '../TestPage';

interface iconT {
    key: number;
    imgName: string;
}

/**
 * 生成固定板块
 *  如何 约束 obj 为  [{key:0,imgName:'google'},{key:1,imgName:'youtube'}]
 *
 */
const renderBlock = (obj: iconT) => {
    if (obj.imgName === '') {
        return emptyBlock(obj.key);
    }
    return (
        <div className="block" key={obj.key}>
            <div className="inner fadeOne">
                <div className="wrapper">
                    <img
                        src={`https://cdn.musicbed.com/image/upload/fl_sanitize/static/home/${obj.imgName}.svg`}
                        alt={`${obj.imgName}`}
                    />
                </div>
            </div>
        </div>
    );
};

const emptyBlock = (key: number) => {
    return (
        <div className="block" key={key}>
            <div className="inner  "></div>
        </div>
    );
};

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
            <div className="module-page-3">
                {/* <TestPage /> */}
                <div className="desc">
                    <div className="text">Trusted by the world’s top brands.</div>
                    <Button
                        className="desc-btn"
                        text="SATRT BROWSINGS"
                        size={{ height: 50, width: 300 }}
                        color="rgb(9, 166, 167)"
                        textColor="white"
                    />
                </div>
                <div className="company-wall">
                    <section className="company-wall-column">
                        <div className="block">
                            <div className="inner btn bln"></div>
                        </div>
                        <div className="block">
                            <div className="inner btn bln"></div>
                        </div>
                        <div className="block">
                            <div className="inner btn bln"></div>
                        </div>
                        <div className="block">
                            <div className="inner btn bln"></div>
                        </div>
                        <div className="block">
                            <div className="inner btn bln"></div>
                        </div>

                        {[
                            { key: 0, imgName: 'google' },
                            { key: 1, imgName: 'hulu' },
                        ].map((item) => renderBlock(item))}
                        <div className="block">
                            <div className="inner btn "></div>
                        </div>
                        {[{ key: 0, imgName: 'nike' }].map((item) => renderBlock(item))}
                    </section>
                    {/*  移动端 适配*/}
                    <section className="GridRowMobile  company-wall-column">
                        {[
                            { key: 0, imgName: 'progressive' },
                            { key: 1, imgName: 'abc' },
                            { key: 2, imgName: 'land-rover' },
                            { key: 3, imgName: 'nat-geo' },
                            { key: 4, imgName: 'mcclaren' },
                            { key: 5, imgName: 'chick-fil-a' },
                            { key: 6, imgName: 'southwest' },
                            { key: 7, imgName: 'verizon' },
                            { key: 8, imgName: 'nikon' },
                        ].map((item) => renderBlock(item))}
                    </section>
                    {/*-----*/}
                    <section className="company-wall-column">
                        <div className="left">
                            <div className="top">
                                <div className="block">
                                    <div className="inner btn bln"></div>
                                </div>
                                {[
                                    { key: 0, imgName: 'abc' },
                                    { key: 1, imgName: 'land-rover' },
                                    { key: 2, imgName: 'nat-geo' },
                                ].map((item) => renderBlock(item))}
                            </div>
                            <div className="bottom">
                                {[
                                    { key: 0, imgName: 'mcclaren' },
                                    { key: 1, imgName: 'chick-fil-a' },
                                    { key: 2, imgName: 'samsung' },
                                    { key: 3, imgName: 'lions-gate' },
                                ].map((item) => renderBlock(item))}
                            </div>
                        </div>
                        {/*视频剧中区域*/}
                        <div className="center">
                            <div className="box">
                                <div className="about-us-video-wrapper">
                                    <div className="video">
                                        <iframe
                                            src="https://player.vimeo.com/video/221028986?color=09a6a7&amp;portrait=0"
                                            width="500"
                                            height="375"
                                            frameBorder="0"></iframe>
                                    </div>
                                    {/*   点击播放 opcaity 0.1 display none*/}
                                    <div className="cover-image">
                                        <img
                                            src="https://cdn.musicbed.com/image/upload/c_limit,dpr_1,f_auto,h_246,q_auto,w_614/static/welcome/Reel_poster.jpg"
                                            alt="About Us"
                                        />
                                        <div className="cover-btn">
                                            <img
                                                src="https://cdn.musicbed.com/image/upload/fl_sanitize/static/home/Play-Button.svg"
                                                alt="Play Button"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*右侧*/}
                        <div className="right">
                            <div className="top">
                                {[{ key: 0, imgName: 'underarmour' }].map((item) => renderBlock(item))}
                            </div>
                            <div className="bottom">
                                {[{ key: 0, imgName: 'twentieth-century' }].map((item) => renderBlock(item))}
                            </div>
                        </div>
                    </section>
                    {/*  移动端 适配*/}
                    <section className="GridRowMobile   company-wall-column">
                        {[
                            { key: 0, imgName: 'budweiser' },
                            { key: 1, imgName: 'lexus' },
                            { key: 2, imgName: 'samsung' },
                            { key: 3, imgName: 'lions-gate' },
                            { key: 4, imgName: 'underarmour' },
                            { key: 5, imgName: 'twentieth-century' },
                            { key: 6, imgName: 'boeing' },
                            { key: 7, imgName: 'harley-davidson' },
                            { key: 8, imgName: 'mercedes-bens' },
                        ].map((item) => renderBlock(item))}
                    </section>
                    {/*--ends--*/}
                    <section className="company-wall-column">
                        {[
                            { key: 0, imgName: 'netflix' },
                            { key: 1, imgName: 'nasa' },
                            { key: 2, imgName: '' },
                            { key: 3, imgName: 'amazon' },
                            { key: 4, imgName: '' },
                            { key: 5, imgName: 'facebook' },
                            { key: 6, imgName: 'nbc' },
                            { key: 7, imgName: 'lamborghini' },
                            { key: 8, imgName: '' },
                        ].map((item) => renderBlock(item))}
                    </section>
                    <section className="company-wall-column">
                        {emptyBlock(0)}
                        {emptyBlock(1)}
                        {[{ key: 2, imgName: 'espn' }].map((item) => renderBlock(item))}
                        {emptyBlock(2)}
                        {emptyBlock(3)}
                        {emptyBlock(4)}
                        {[{ key: 6, imgName: 'microsoft' }].map((item) => renderBlock(item))}
                        {emptyBlock(5)}
                        {[{ key: 8, imgName: 'mcdonalds' }].map((item) => renderBlock(item))}
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Homepage;
