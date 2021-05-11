import React from 'react'
import { Grid } from 'semantic-ui-react'
import PCard1 from './PCard1'
import PCard2 from './PCard2'


export default class Player extends React.Component {
    
    state = {
        card1: "",
        card2: ""
    }

    shuffleOn = () => {
        this.setState({
            card1: this.props.card,
            card2: this.props.card2
        })
    }
    
    render() {
        return (

            <div>
                <h2>Your Hand</h2>
                <Grid relaxed columns={2}>
                    <Grid.Column>
                        <PCard1 card2 = {this.state.card2} gameOn = {this.props.gameOn}/>
                    </Grid.Column>
                  
                    <Grid.Column>
                        <PCard2 card2 = {this.state.card2} gameOn = {this.props.gameOn}/>
                    </Grid.Column>
                </Grid>
                <button onClick = {() => this.shuffleOn()}>shuffle</button>
            </div>
        )
    }
}