import React, {Component} from 'react';
import {Cell, Grid} from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* TODO add proper photo && add proper links  */}
                        <img
                            src="https://scontent.fsvg1-1.fna.fbcdn.net/v/t1.0-9/p960x960/67065455_10158762321624056_4647491236628791296_o.jpg?_nc_cat=100&_nc_ohc=lUZcSuenEEsAX-jNQCi&_nc_ht=scontent.fsvg1-1.fna&_nc_tp=6&oh=67271c75c6f15ddd4175dcabd11d4b20&oe=5EBAA061"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Student</h1>

                           <hr/>
			    <p> Halla </p>
                            <p>Java | React | MySQL/PlSQL | Git | HTML | CSS</p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="http://www.google.no" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* Github */}
                                <a href="http://www.Github.com/Nosp1/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                                {/* Instagram */}
                                <a href="http://www.Instagram.com/trymstaur" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
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
