import React from 'react'
import Dealer from './DealerComponents/Dealer'
import Player from './PlayerFiles/Player'



export default class TestTable extends React.Component{

   
   
    state = {
        cards: [],
        yourHand: [],
        dealersHand: [],
        gameOn: false,
        playersTurn: false
      }
  
      componentDidMount(){
          fetch('http://localhost:3000/cards')
          .then(res => res.json())
          .then(cards => this.setState({cards: cards}))
      }

     gameOn = () => {
         this.setState({
             gameOn: !this.state.gameOn
         })
     } 

    
    render(){

        let randomIndex1 = Math.floor(Math.random() * 13)
        let randomIndex2 = Math.floor(Math.random() * 13)
        let randomIndex3 = Math.floor(Math.random() * 13)
        let randomIndex4 = Math.floor(Math.random() * 13)
        return (
            <div>
                <Dealer dCard = {this.state.cards[randomIndex1]} gameOn = {this.state.gameOn} dCard2 = {this.state.cards[randomIndex2]}/>
                <Player pCard = {this.state.cards[randomIndex3]} gameOn = {this.state.gameOn} pCard2 = {this.state.cards[randomIndex4]}/>
                <button onClick = {() => this.gameOn()}>Deal</button>
            </div>
        )
    }
}