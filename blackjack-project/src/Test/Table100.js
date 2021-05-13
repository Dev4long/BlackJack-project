import React from 'react'
import App from '../App'
import Dealer from './DealerComponents/Dealer'
import Player from './PlayerFiles/Player'
import { Grid, Button, Segment, Header } from 'semantic-ui-react'


export default class Table100 extends React.Component{
   
    state = {
        cards: [],
        gameOn: false, 
        playerHand: [], 
        dealerHand: [],
        hitCard1: {},
        playerScore: 0,
        dealerScore: 0,
        dealerTurn: false,
        message: null,
        playerStays: false,
        winLoss: null,
        mainDeck: [],
        gameOver: false
    }
  
    componentDidMount(){
          fetch('http://localhost:3000/cards')
          .then(res => res.json())
          .then(cards => this.setState(
              {cards: cards,
               mainDeck: cards 
            }))    
    }
    newGame = () => {
        this.setState({
            
            gameOn: false, 
            playerHand: [], 
            dealerHand: [],
            hitCard1: {},
            playerScore: 0,
            dealerScore: 0,
            dealerTurn: false,
            message: null,
            playerStays: false,
            winLoss: null
        })
    }

    hit= () => {

        let deck = this.state.mainDeck
        let randomIndex = Math.floor(Math.random() * 51)
        let hitOne = deck[randomIndex]
          this.setState({  
              playerHand: [...this.state.playerHand, hitOne]
              
        }, () => this.updateScores())
    }

    hitDealer = () => {
        let deck = this.state.cards
        let randomIndex = Math.floor(Math.random() * 51)
        let hitOne = deck[randomIndex]
        
        this.setState({  
            dealerHand: [...this.state.dealerHand, hitOne]
            
      }, () => this.updateScores())
    }
    
    dealerStays = () => {
        if (this.state.dealerScore < 16){
            
            this.dealerStaysHit()
        }
        else {
            this.checkDealerBust()
        }
    }
    dealerStaysHit = () => {
        let deck = this.state.mainDeck
        let randomIndex = Math.floor(Math.random() * 51)
        let hitOne = deck[randomIndex]
        
        this.setState({  
            dealerHand: [...this.state.dealerHand, hitOne]
            
      }, () => this.dealerStaysUpdatedScore()
        )
    }

    dealerStaysUpdatedScore = () => {
        let dealScore = 0 
       this.state.dealerHand.forEach(card => {
           dealScore += card.value
       });
       this.setState({
           dealerScore: dealScore
       }, () => this.dealerStays()
       )
    }
    stay = () => {
          this.setState ({
              dealerTurn: !this.state.dealerTurn, 
              message: `Player stays at ${this.state.playerScore}`
        }, () => this.dealerStays()
        )
    }

    gameOn = () => {
        
        let playingCards = this.state.mainDeck
        let randomIndex = Math.floor(Math.random() * 51)
        let randomIndex1 = Math.floor(Math.random() * 51)
        let randomIndex3 = Math.floor(Math.random() * 51)
        let randomIndex4 = Math.floor(Math.random() * 51)
        let randomIndex5 = Math.floor(Math.random() * 51)
        let randomIndex6 = Math.floor(Math.random() * 51)
        
        let playerCards1 = playingCards[randomIndex]
        let playerCards2 = playingCards[randomIndex1]
        let dealerCard1 = playingCards[randomIndex3]
        let dealerCard2 = playingCards[randomIndex4]


         this.setState({
             gameOn: !this.state.gameOn, 
             playerHand: [playerCards1, playerCards2],
             dealerHand: [dealerCard1, dealerCard2]
             //mainDeck: playingCards
         }, () => this.updateScores())
         
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

     calcDealerScore = () => {
        let dealScore = 0 
       this.state.dealerHand.forEach(card => {
           dealScore += card.value
       });
       this.setState({
           dealerScore: dealScore
       }, () => this.checkDealerBust())
     }
     
     updateScores = () => {
        
        this.calcPlayerScore()
        this.calcDealerScore()
        
     }
     checkDealerBust = () => {
         if(this.state.dealerScore > 16 && this.state.dealerScore <22){
            if(this.state.playerScore > this.state.dealerScore){
                this.setState({
                    winLoss: "you won",
                    gameOver: true
                })
            }
            else if(this.state.playerScore <this.state.dealerScore){
                this.setState({
                    winLoss: "Dealer Wins",
                    gameOver: true
                })
            }
            else if(this.state.playerScore === this.state.dealerScore){ 
                this.setState({
                    winLoss: "draw",
                    gameOver: true
                })
            }
         }
         else {
             if(this.state.playerScore < 22){
                this.setState({
                    winLoss: "you won",
                    gameOver: true
                })
            
             }
             else{
                this.setState({
                    winLoss: "You Lose",
                    gameOver: true
                })
             }
         }
         

     }
     
     
     youBusted = () => {
        if (this.state.playerScore > 21){
        this.setState({
            message: `You busted! Game over! ${this.state.playerScore} `,
            gameOver: true,
            winLoss: "You Lose"
        }
        )
    }

    //  dealerBusted = () => {
    //     if (this.state.dealerScore < 18)
    //  }
    }
     

   
     

    
    render(){
        

        let randomIndex1 = Math.floor(Math.random() * 13)
        let randomIndex2 = Math.floor(Math.random() * 13)
        let randomIndex3 = Math.floor(Math.random() * 13)
        let randomIndex4 = Math.floor(Math.random() * 13)
        return (
            <div className = "table">
                <Segment textAlign = "center" color = "red" as='h1'>
                    <Header color = "red" as = 'h1' textAlign = "center">BLACKJACK! Table 100</Header>
                    {this.state.gameOver ? <Header textAlign = "center" color = "blue" as = 'h1'>{this.state.winLoss}</Header> : null}
                    <Button size = "large" color ="green" onClick = {() => this.gameOn()}>Deal</Button>
                    <Button size = "large" color ="orange" 
                    onClick = {() => this.newGame()} >New Game</Button>
                </Segment>
                
                <Dealer gameOn = {this.state.gameOn} dealerHand = {this.state.dealerHand} 
                dealerTurn = {this.state.dealerTurn} hitFunc = {this.hit} playerScore = {this.state.dealerScore}
                dealerScore = {this.state.dealerScore} playerScore = {this.state.playerScore}/> 

                <Player gameOn = {this.state.gameOn} playerHand = {this.state.playerHand} 
                hitFunc = {this.hit} hitState = {this.state.hit1} dealerTurn = {this.state.dealerTurn}
                stayFunction = {this.stay} message = {this.state.message} score = {this.state.playerScore}/>
            </div>
        )
    }
} 