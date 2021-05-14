import React from 'react'
import DCard1 from './DCard1'
import DCard2 from './DCard2'
import { Grid, Header, Container } from 'semantic-ui-react'
import Dhit1 from './Dhit1'
import Dhit2 from './Dhit.2'


export default class Dealer extends React.Component {

    

    render() {
    
       
        return (

            <div >
                <Header color = 'yellow' as = 'h1' textAlign = "center">Dealer: {this.props.dealerScore}</Header>
                
                <Container textAlign='center'>
                <Grid padded = "horizontally" columns={2} >
                    
                        <DCard1 card1 = {this.props.dealerHand[0]} gameOn = {this.props.gameOn}/>
                        <DCard2 card2 = {this.props.dealerHand[1]} gameOn = {this.props.gameOn}/>
                        {this.props.dealerHand.length < 3 ? null: <Dhit1 hit1 = {this.props.dealerHand[2]}/>}
                        {this.props.dealerHand.length < 4 ? null: <Dhit2 hit2 = {this.props.dealerHand[3]}/>}
                </Grid>
                </Container>
                
                
            </div>
        )
    }
}
{/* <Dhit1 hit1 = {this.props.dealerHand[2]}/> */}