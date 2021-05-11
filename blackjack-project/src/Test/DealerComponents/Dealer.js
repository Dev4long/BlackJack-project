import React from 'react'
import DCard1 from './DCard1'
import DCard2 from './DCard2'
import { Grid } from 'semantic-ui-react'


export default class Dealer extends React.Component {
    
    state = {
        card1: "",
        card2: ""
    }

    shuffleOn = () => {
        this.setState({
            card1: this.props.dCard,
            card2: this.props.dCard2
        })
    }
    
    render() {
        return (

            <div>
                <h2>Dealer</h2>
                <Grid relaxed columns={2}>
                    <Grid.Column>
                        <DCard1 card1 = {this.state.card1} gameOn = {this.props.gameOn} />
                    </Grid.Column>
                  
                    <Grid.Column>
                        <DCard2 card2 = {this.state.card2} gameOn = {this.props.gameOn}/>
                    </Grid.Column>
                </Grid>
                <button onClick = {() => this.shuffleOn()}>shuffle</button>
            </div>
        )
    }
}