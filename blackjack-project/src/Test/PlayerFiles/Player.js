import React from 'react'
import { Grid, Button, Header, Container} from 'semantic-ui-react'
import PCard1 from './PCard1'
import PCard2 from './PCard2'
import Hit1 from './Hit1'
import Hit2 from './Hit2'


export default class Player extends React.Component {

    render() {
        return (

            <div> 
                <br></br>
                {this.props.dealerTurn === false? <Header textAlign = "center" color = "teal" as = 'h1'>Your Hand: {this.props.score}</Header> 
                : <Header textAlign = "center" color = "red" as = 'h1'></Header>}

            <Grid>
            <Grid.Column textAlign="center">
            {this.props.dealerTurn === false && this.props.gameOver === false ? <Button color = "blue" size = "large" round onClick = {() => this.props.hitFunc()}>Hit</Button> : null}
            {this.props.dealerTurn === false && this.props.gameOver === false? <Button onClick = {() => {this.props.stayFunction()}} color = "green" size = "large" round> Stay </Button> : null}
            
            
            
            </Grid.Column>
            </Grid>

                
                <Header textAlign = "center" color = "yellow" as = "h1">{this.props.message}</Header>
                
                <Container textAlign='center'>
                <Grid padded = "horizontally" inverted columns={2}>
                    
                        <PCard1 card1 = {this.props.playerHand[0]} gameOn = {this.props.gameOn} />
                        <PCard2 card2 = {this.props.playerHand[1]} gameOn = {this.props.gameOn}/>
                        {this.props.playerHand.length < 3 ? null: <Hit1 hitCard1 = {this.props.playerHand[2]}/>}
                        {this.props.playerHand.length < 4 ? null: <Hit2 hitCard1 = {this.props.playerHand[3]}/>}
                        {this.props.playerHand.length < 5 ? null: <Hit2 hitCard1 = {this.props.playerHand[4]}/>}
                        
                </Grid>
                </Container>
                <br></br>
                <br></br>
               
            </div>
        )
    }
}