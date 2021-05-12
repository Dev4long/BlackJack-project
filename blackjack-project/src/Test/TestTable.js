import React from 'react'
import App from '../App'
import Dealer from './DealerComponents/Dealer'
import Player from './PlayerFiles/Player'
import { Grid, Button, Header } from 'semantic-ui-react'




export default class TestTable extends React.Component{

   
   
    state = {
        cards: [],
        mainDeck: [],
        gameOn: false, 
        playerHand: [], 
        dealerHand: [],
        hitCard1: {},
        playerScore: 0,
        dealerScore: 0,
        dealerTurn: false,
        message: null
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
          }, () => this.calcPlayerScore())
        
      }

      dealerTurn = () => {
          this.setState ({
              dealerTurn: !this.state.dealerTurn
          })
      }

     gameOn = () => {
        
        let playingCards = this.state.mainDeck
        let randomIndex = Math.floor(Math.random() * 51)
        let randomIndex1 = Math.floor(Math.random() * 51)
        let randomIndex2 = Math.floor(Math.random() * 51)
        let randomIndex3 = Math.floor(Math.random() * 51)
        let randomIndex4 = Math.floor(Math.random() * 51)
        // let playerCards1 = playingCards.splice(randomIndex, 1)
        // let playerCards2 = playingCards.splice(randomIndex, 1)
        // let dealerCard = playingCards.splice(randomIndex, 1)
        
        let playerCards1 = playingCards[randomIndex]
        let playerCards2 = playingCards[randomIndex1]
        let dealerCard1 = playingCards[randomIndex3]
        let dealerCard2 = playingCards[randomIndex4]

         this.setState({
             gameOn: !this.state.gameOn, 
             playerHand: [playerCards1, playerCards2],
             dealerHand: [dealerCard1, dealerCard2]
             //mainDeck: playingCards
         }, () => this.calcPlayerScore())
         
     } 
    
     
     calcPlayerScore = () => {
         let newScore = 0 
        this.state.playerHand.forEach(card => {
            newScore += card.value
        });
        this.setState({
            playerScore: newScore
        }, () => this.youBusted())
     }
     
     
     youBusted = () => {
        if (this.state.playerScore > 21){
        this.setState({
            message: "You busted! Game over!",
            dealerTurn: true
        })
        }

    //  dealerBusted = () => {
    //     if (this.state.dealerScore < 18)
    //  }
    }
     

    
    render(){
        

        return (
            <div className = "table">
                <Header textAlign = "center" color = "red" as='h1'>BlackJack</Header>
                <button onClick = {() => this.gameOn()}>Deal</button>
                <Dealer gameOn = {this.state.gameOn} dealerHand = {this.state.dealerHand}/> 
                <Player gameOn = {this.state.gameOn} playerHand = {this.state.playerHand} 
                hitFunc = {this.hit} hitState = {this.state.hit1} playerScore={this.state.playerScore} message={this.state.message}/>
            </div>
        )
    }
} 
