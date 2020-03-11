import React, {Component} from 'react';
import './App.css';
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import Main from './Components/main';
import {Link} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="header-color"  title="Trym Staurheim"  scroll>

                        <Navigation className="navigator">
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Index">
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content"/>
                        <Main>

                        </Main>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default App;
