import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import CardTile from './CardTile'
import YourHand from './YourHand'
import DealersHand from './DealersHand'




class Table extends React.Component{
    
    state = {
      cards: [],
      yourHand: [],
      dealersHand: [],
      gameInSession: false,
      playersTurn: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/cards')
        .then(res => res.json())
        .then(cards => this.setState({cards: cards}))
    }
    
    //This function will begin the game by dealing the cards
    startGame = () => {
      this.setState({
        gameInSession: true, 
        playersTurn: true, 
        yourHand: [...this.state.yourHand, this.dealCard()], 
        dealersHand: [...this.state.dealersHand, this.dealCard()]
      })
      
    }
    //This function will grab and return random card from the deck
    dealCard = () => {
      let randomIndex = Math.floor(Math.random() * 13)
      return <CardTile card={this.state.cards[randomIndex]}/>
    }
    //this function will add a random card to your hand
     hitACard = () => {
       this.setState({yourHand: [...this.state.yourHand, this.dealCard]})
     }

     stand = () => {
       this.setState({playersTurn: false})

     }
    
    render() {
        
        return(
        <div>
            <div className='your-hand'><Grid relaxed columns={2}>
            <Grid.Column>
              
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            </Grid>
            </div>
            <div className='dealers-hand'><Grid relaxed columns={2}>
            <Grid.Column>
              
            </Grid.Column>
            <Grid.Column>
              <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
            </Grid.Column>
            </Grid></div>
            <div className='buttons'>
              <button id="hit-button"onClick={this.hitACard}>Hit</button>
              <button id="stand-button"onClick={this.stand}>Stand</button>
              <button id="deal-button"onClick={this.startGame}>Deal</button>
            </div>
            <div>
                <table>
                    <tr>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Draws</th>
                    </tr>

                    <tr>
                        <td><span id="wins">0</span></td>
                        <td><span id="losses">0</span></td>
                        <td><span id="draws">0</span></td>
                    </tr>
                </table>
            </div>
          
        </div>
        )
    }
}
export default Table