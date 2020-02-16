import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        //TODO add proper photo && add proper links
                        <img
                            //src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-9/67065455_10158762321624056_4647491236628791296_o.jpg?_nc_cat=100&_nc_ohc=lUZcSuenEEsAX-jNQCi&_nc_ht=scontent.fsvg1-1.fna&oh=ee49bf8a15b05536cd9768f2b9bd1304&oe=5EC2F598"
                            src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-1/p240x240/67065455_10158762321624056_4647491236628791296_o.jpg?_nc_cat=100&amp;_nc_ohc=lUZcSuenEEsAX-jNQCi&amp;_nc_ht=scontent.fsvg1-1.fna&amp;_nc_tp=6&amp;oh=b7c1b9532546f34c12a0150efb5095d1&amp;oe=5EFE7EAC"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Student</h1>

                            <hr/>
                            <p>Java | MySQL/Oracle | Git | HTML/CSS</p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="http://www.google.no" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>
                                {/* Github */}
                                <a href="http://www.google.no" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>
                                {/* Instagram */}
                                <a href="http://www.google.no" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram"  aria-hidden="true"/>
                                </a>
                            </div>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;