import React from 'react'
import { Grid } from 'semantic-ui-react'
import PCard1 from './PCard1'
import PCard2 from './PCard2'


export default class Player extends React.Component {
    
    state = {
        card1: "",
        card2: ""
    }

    shuffleOn2 = () => {
        this.setState({
            card1: this.props.pCard,
            card2: this.props.pCard2
        })
    }
    
    render() {
        return (

            <div>
                <h2>Your Hand</h2>
                <Grid relaxed columns={2}>
                    <Grid.Column>
                        <PCard1 card1 = {this.state.card1} gameOn = {this.props.gameOn}/>
                    </Grid.Column>
                  
                    <Grid.Column>
                        <PCard2 card2 = {this.state.card2} gameOn = {this.props.gameOn}/>
                    </Grid.Column>
                </Grid>
                <button onClick = {() => this.shuffleOn2()}>shuffle</button>
            </div>
        )
    }
}