import React from 'react'
import App from '../App'
import Dealer from './DealerComponents/Dealer'
import Player from './PlayerFiles/Player'
import { Grid, Button, Header } from 'semantic-ui-react'




export default class TestTable extends React.Component{

   
   
    state = {
        cards: [],
        gameOn: false, 
        playerHand: [], 
        dealerHand: [],
        hitCard1: {},
        playerScore: null,
        dealerTurn: false,
        dealerScore: null
      }
  
      componentDidMount(){
          fetch('http://localhost:3000/cards')
          .then(res => res.json())
          .then(cards => this.setState(
              {cards: cards,
               mainDeck: cards 
            }))
      }

      hit= () => {

        let deck = this.state.mainDeck
        let randomIndex = Math.floor(Math.random() * 51)
        let hitOne = deck[randomIndex]
          this.setState({  
              playerHand: [...this.state.playerHand, hitOne]
          })
        this.calcPlayerScore()
      }

      dealerTurn = () => {
          this.setState ({
              dealerTurn: !this.state.dealerTurn
          })
      }

     gameOn = () => {
         this.setState({
             gameOn: !this.state.gameOn,
             playersCards: []
         })
         
     } 

     calcPlayerScore = () => {

         this.playerHand.forEach(card => {
             this.setState({
                 playerScore: this.state.playerScore + card.value
             })
         });
     }

     

    
    render(){

        let randomIndex1 = Math.floor(Math.random() * 13)
        let randomIndex2 = Math.floor(Math.random() * 13)
        let randomIndex3 = Math.floor(Math.random() * 13)
        let randomIndex4 = Math.floor(Math.random() * 13)
        return (
            <div className = "table">
                <Header textAlign = "center" color = "red" as='h1'>BlackJack</Header>
                <button onClick = {() => this.gameOn()}>Deal</button>
                <Dealer gameOn = {this.state.gameOn} dealerHand = {this.state.dealerHand}/> 
                <span>player score:{this.state.playerScore}</span>
                <Player gameOn = {this.state.gameOn} playerHand = {this.state.playerHand} 
                hitFunc = {this.hit} hitState = {this.state.hit1}/>
            </div>
        )
    }
}