import React from 'react'
import App from '../App'
import Dealer from './DealerComponents/Dealer'
import Player from './PlayerFiles/Player'
import { Grid, Button, Segment, Header } from 'semantic-ui-react'


export default class TestTable extends React.Component{
   
    state = {
        cards: [],
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
        })
    }

    stay = () => {
          this.setState ({
              dealerTurn: !this.state.dealerTurn
        })
    }

    gameOn = () => {
        
        let playingCards = this.state.mainDeck
        let randomIndex = Math.floor(Math.random() * 51)
        let randomIndex1 = Math.floor(Math.random() * 51)
        let randomIndex3 = Math.floor(Math.random() * 51)
        let randomIndex4 = Math.floor(Math.random() * 51)
        
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
                <Segment textAlign = "center" color = "red" as='h1'>
                    <Header color = "red" as = 'h1' textAlign = "center">BLACKJACK!</Header>
                    <Button size = "large" color ="green" onClick = {() => this.gameOn()}>Deal</Button>
                    <Button size = "large" color ="orange" 
                    onClick = {() => this.props.newGame()} >New Game</Button>
                </Segment>
                
                <Dealer gameOn = {this.state.gameOn} dealerHand = {this.state.dealerHand}/> 
                <span>player score:{this.state.playerScore}</span>
                <Player gameOn = {this.state.gameOn} playerHand = {this.state.playerHand} 
                hitFunc = {this.hit} hitState = {this.state.hit1} dealerTurn = {this.state.dealerTurn}
                stayFunction = {this.stay}/>
            </div>
        )
    }
} 
