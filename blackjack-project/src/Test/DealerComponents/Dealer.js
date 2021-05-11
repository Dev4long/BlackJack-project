import React from 'react'
import DCard1 from './DCard1'
import DCard2 from './DCard2'
import { Grid } from 'semantic-ui-react'


export default class Dealer extends React.Component {
    

    render() {
    
        let dValue = this.props.dCard1.value + this.props.dCard2.value
        console.log(dValue)
        
        return (

            <div>
                <h2>Dealer</h2>
                <Grid relaxed columns={2}>
                    
                        <DCard1 card1 = {this.props.dealerHand[0]} gameOn = {this.props.gameOn}/>
                        <DCard2 card2 = {this.props.dealerHand[1]} gameOn = {this.props.gameOn}/>
                    
                </Grid>
            </div>
        )
    }
}