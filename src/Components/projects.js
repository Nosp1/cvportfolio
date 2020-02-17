import React, {Component} from 'react'
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0}
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '176px',
                            background: 'url(https://reactjs.org/logo-og.png) center / cover'
                        }}>Dnd: Character Creator</CardTitle>
                        <CardText>
                            Bacon ipsum dolor amet leberkas ground round biltong landjaeger, rump doner burgdoggen
                            bresaola
                            strip steak spare ribs sirloin cupim shoulder salami. Tail tenderloin andouille tongue
                            sausage
                            strip steak pork.
                        </CardText>
                        <CardActions>
                            <Button colored href="https://github.com/Nosp1/Dnd" target="_blank">Github</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff',
                        height: '176px',
                        background: 'url(https://reactjs.org/logo-og.png) center / cover'
                    }}>React Project 2</CardTitle>
                    <CardText>
                        Bacon ipsum dolor amet leberkas ground round biltong landjaeger, rump doner burgdoggen bresaola
                        strip steak spare ribs sirloin cupim shoulder salami. Tail tenderloin andouille tongue sausage
                        strip steak pork.
                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card> <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{
                        color: '#fff',
                        height: '176px',
                        background: 'url(https://reactjs.org/logo-og.png) center / cover'
                    }}>React Project 3</CardTitle>
                    <CardText>
                        Bacon ipsum dolor amet leberkas ground round biltong landjaeger, rump doner burgdoggen bresaola
                        strip steak spare ribs sirloin cupim shoulder salami. Tail tenderloin andouille tongue sausage
                        strip steak pork.
                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is Java</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is MySQL</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is DnD</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Java</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>DnD</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;