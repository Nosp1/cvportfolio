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
                    <div className="project-cards">
                        <Card className="project-card" shadow={5}>
                            <CardTitle className="card-title" id="dnd" style={{
                                color: 'white',
                                height: '176px',
                            }}>DnD: Character Generator</CardTitle>
                            <CardText>
                                StoryTeller is a open-source minimalistic character-creator right in your terminal for
                                your favorite
                                roleplaying game. The process of creating a character can be tedious and time consuming.
                                Storyteller allows you to have a playable character within minutes. Save your character
                                to JSON.
                            </CardText>
                            <CardActions style={{textAlign: 'center'}}>
                                <Button colored href="https://github.com/Nosp1/Dnd" target="_blank">Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                        {/* Project 2*/}
                        <Card className="project-card" shadow={5}>
                            <CardTitle className="card-title" style={{
                                color: 'white',
                                height: '176px',
                                background: 'url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80) center / cover',
                            }}> Roombooking System</CardTitle>
                            <CardText>
                                A complete system that allows a user to book an available room in the system.
                                The system allows users to easily book, rebook and keep track over their bookings.
                                Features an admin-hub for easy management of the system and emailing-services to inform
                                your clients.
                            </CardText>
                            <CardActions style={{textAlign: 'center'}}>
                                <Button colored href="https://github.com/Nosp1/Gruppe10">Github</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is React</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is MySQL</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs id="tabs" activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Java</Tab>
                    <Tab>React</Tab>
                    <Tab>MySQL</Tab>
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