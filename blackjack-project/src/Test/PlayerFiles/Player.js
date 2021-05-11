import React from 'react'
import { Grid } from 'semantic-ui-react'
import PCard1 from './PCard1'
import PCard2 from './PCard2'
import Hit1 from './Hit1'


export default class Player extends React.Component {
    
    
    render() {
        return (

            <div>
                <h2>Your Hand</h2>
                <h2></h2>
                <Grid columns={2}>
                    
                        <PCard1 card1 = {this.props.playerHand[0]} gameOn = {this.props.gameOn} />
                        <PCard2 card2 = {this.props.playerHand[1]} gameOn = {this.props.gameOn}/>
                        {this.props.hitState === true ? <Hit1 hitCard1 = {this.props.hitCard1}/> : null}
                </Grid>
                <button onClick = {() => this.props.hitFunc()}>Hit</button>
            </div>
        )
    }
}