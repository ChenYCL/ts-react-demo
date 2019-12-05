import React from 'react';
import './index.scss';
import Icon, { IconType } from '../Icon';
class Footer extends React.Component<Props, {}> {
    public footIconList: IconType[] = [
        {
            url: require('../../resource/image/facebook.svg'),
            key: 0,
        },
        {
            url: require('../../resource/image/twitter.svg'),
            key: 1,
        },
        {
            url: require('../../resource/image/instagram.svg'),
            key: 2,
        },
        {
            url: require('../../resource/image/youtube.svg'),
            key: 3,
        },
    ];

    render() {
        return (
            <footer>
                <section className="footer-info">
                    <div className="left-section">
                        <h3>Need Help Finding the Right Song?</h3>
                        <div className="desc">We will find the perfect song for your project For Free</div>
                        <div className="work-time">Monday-Friday, 9-5 CST</div>
                        <section className="icon-wrapper">
                            <div>
                                <i className="icon-phone"></i>
                                <span className="icon-title">1-800-380-8154</span>
                            </div>
                            <div>
                                <i className="icon-chat"></i>
                                <span className="icon-title">Start Chat</span>
                            </div>
                            <div>
                                <i className="icon-email"></i>
                                <span className="icon-title">Email Us</span>
                            </div>
                            <div>
                                <i className="icon-FAQ"></i>
                                <span className="icon-title">FAQ</span>
                            </div>
                        </section>
                    </div>
                    <div className="right-section">
                        <section>
                            <h3>ABOUT US</h3>
                            <div>
                                <a>Our Story</a>
                                <a>Musicbed Blog</a>
                                <a>Careers</a>
                            </div>
                        </section>
                        <section>
                            <h3>PRODUCTS</h3>
                            <div>
                                <a>Music</a>
                                <a>Subscription</a>
                                <a>Custom Music</a>
                                <a>Footage</a>
                            </div>
                        </section>
                        <section>
                            <h3>PLAYLISTS</h3>
                            <div>
                                <a>What‘s New</a>
                                <a>Cinematic</a>
                                <a>Indie Pop</a>
                                <a>Chill Bearts</a>
                                <a>View All</a>
                            </div>
                        </section>
                    </div>
                </section>
                <section className="support-company">
                    <div className="media-icon">
                        {this.footIconList.map((icon) => (
                            <Icon
                                size={20}
                                url={icon.url}
                                key={icon.key}
                                posi="inline-block"
                                style={{ marginLeft: '40px' }}
                            />
                        ))}
                        {/*<img width={25} height={25} src={require('../../resource/image/facebook.svg')}/>*/}
                    </div>
                    <div className="license">
                        <div>Licence Terms</div>
                        <div>Privacy Policy</div>
                        <div>Terms of Use</div>
                        <div>Contact Us</div>
                    </div>
                </section>
            </footer>
        );
    }
}

export default Footer;
