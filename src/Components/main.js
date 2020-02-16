import React from 'react';
import LandingPage from './landingpage'
import {Switch, Route} from "react-router-dom";
import Aboutme from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './resume'

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={Aboutme} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
    </Switch>
)
export default Main;