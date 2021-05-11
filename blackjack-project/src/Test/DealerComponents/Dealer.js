import React from 'react'
import DCard1 from './DCard1'
import DCard2 from './DCard2'
import { Grid } from 'semantic-ui-react'


export default class Dealer extends React.Component {
    
    
    render() {
        return (

            <div>
                <h2>Dealer</h2>
                <Grid container relaxed columns={2}>
                    
                        <DCard1 card1 = {this.props.dCard1} gameOn = {this.props.gameOn}/>
                        <DCard2 card2 = {this.props.dCard2} gameOn = {this.props.gameOn}/>
                    
                </Grid>
            </div>
        )
    }
}