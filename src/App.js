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
                    <Header className="header-color"   title={<Link className="title" to="/">Trym Staurheim</Link>} scroll>
                        <Navigation className="navigator">
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer className="header-drawer" toggle title="Index" ripple>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content className="content">
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
