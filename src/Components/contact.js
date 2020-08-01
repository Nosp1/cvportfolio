import React, {Component} from 'react'
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Trym Staurheim</h2>
                        <img
                            src="https://scontent-arn2-2.xx.fbcdn.net/v/t31.0-8/21552060_10156585631859056_4091879525130612121_o.jpg?_nc_cat=105&_nc_sid=13bebb&_nc_ohc=baV9BLGGZPMAX8UxJHZ&_nc_ht=scontent-arn2-2.xx&oh=49d1134b146a336da2674cd9f4ee1f60&oe=5E96AC6B"
                            alt="avatar"
                            style={{height: '200px', borderRadius: '100%'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                            Bacon ipsum dolor amet andouille pork sausage bresaola tongue, ham ham hock hamburger
                            brisket shankle cow fatback. Ham meatloaf beef ribs ribeye, ground round pork loin picanha
                            brisket bresaola chuck turkey sausage shank. Alcatra cupim buffalo, bresaola spare ribs
                            salami strip steak t-bone short ribs shoulder beef sirloin. Flank jerky pork loin, corned
                            beef tri-tip shankle capicola ground round pork. Jerky venison landjaeger frankfurter boudin
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (+47) 951 66 509
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        TrymErlend@hotmail.no
                                    </ListItemContent>
                                </ListItem> <ListItem>
                                    <ListItemContent style={{fontSize: '22px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-discord" aria-hidden="true"/>
                                        Nosp#4111
                                    </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;