import React from 'react'
import { Grid, Button } from 'semantic-ui-react'
import PCard1 from './PCard1'
import PCard2 from './PCard2'
import Hit1 from './Hit1'
import Hit2 from './Hit2'


export default class Player extends React.Component {
    
    //{this.props.hitState === true ?
    render() {
        return (

            <div>
                <br></br>
                <br></br>
                <h2>Your Hand</h2>
                <h2></h2>
                <Grid padded = "horizontally" inverted columns={2}>
                    
                        <PCard1 card1 = {this.props.playerHand[0]} gameOn = {this.props.gameOn} />
                        <PCard2 card2 = {this.props.playerHand[1]} gameOn = {this.props.gameOn}/>
                        {this.props.playerHand.length < 3 ? null: <Hit1 hitCard1 = {this.props.playerHand[2]}/>}
                        {this.props.playerHand.length < 4 ? null: <Hit2 hitCard1 = {this.props.playerHand[3]}/>}
                        {this.props.playerHand.length < 5 ? null: <Hit2 hitCard1 = {this.props.playerHand[4]}/>}
                </Grid>
                <br></br>
                <br></br>
                <Button color = "blue" size = "large" round onClick = {() => this.props.hitFunc()}>Hit</Button>
                <Button color = "green" size = "large" round> Stay </Button>
            </div>
        )
    }
}