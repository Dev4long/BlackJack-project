import React from 'react'
import { Grid } from 'semantic-ui-react'
import PCard1 from './PCard1'
import PCard2 from './PCard2'


export default class Player extends React.Component {
    
    
    render() {
        return (

            <div>
                <h2>Your Hand</h2>
                <h2></h2>
                <Grid container relaxed columns={2}>
                    
                        <PCard1 card1 = {this.props.pCard1} gameOn = {this.props.gameOn} />
                        <PCard2 card2 = {this.props.pCard2} gameOn = {this.props.gameOn}/>
                    
                </Grid>
                <button>Hit</button>
            </div>
        )
    }
}