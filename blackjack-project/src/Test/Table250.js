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
        message: null,
        playerStays: false,
        winLossMessage: "",
        mainDeck: [],
        gameOver: false,
        dealerOver: false
    }
  
    componentDidMount(){

        let randomIndex = Math.floor(Math.random() * 51)

          fetch('http://localhost:3000/cards')
          .then(res => res.json())
          .then(cards => this.setState(
              {cards: cards,
               mainDeck: cards, 
               hitCard1: cards[randomIndex]
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
            winLossMessage: "",
            dealerOver: false,
            gameOver: false
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
            this.setState({
                dealerOver: true
            }, () => this.checkDealerBust())
            
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
        
        
        let playerCards1 = playingCards[randomIndex]
        let playerCards2 = playingCards[randomIndex1]
        let dealerCard1 = playingCards[randomIndex3]
        let dealerCard2 = playingCards[randomIndex4]


         this.setState({
             gameOn: !this.state.gameOn, 
             playerHand: [playerCards1, playerCards2],
             dealerHand: [dealerCard1, dealerCard2],
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
     setDealerWin = () => {
         this.setState({
            winLossMessage: `Dealer Wins. 😢 `
         })
     }

     setPlayerWin = () => {
        this.setState({
            winLossMessage: `You Win.  🥳`
         })
     }
     setDraw = () => {
        this.setState({
            winLossMessage: `Tie. No one wins. `
         })
     }


    checkDealerBust = () => {
        if(this.state.dealerOver == true){
            if(this.state.dealerScore <22){
                if(this.state.playerScore > this.state.dealerScore ){
                    this.props.bet(true)
                    this.setPlayerWin()
                }
                if(this.state.playerScore < this.state.dealerScore){
                    this.props.bet(false)
                    this.setDealerWin()
                }
                if(this.state.playerScore == this.state.dealerScore){ 
                    this.setDraw()
                }
            }
            if(this.state.dealerScore >21){
                this.props.bet(true)
                this.setPlayerWin()
            }
        }
       
    }
         
     
     newDealerScore = () =>{
        this.setState({dealerScore: this.state.dealerScore + this.state.hitCard1.value})
     }
     
     youBusted = () => {
        if (this.state.playerScore > 21){
            this.props.bet(false)
            this.setState({
                winLossMessage: `You busted! Game over!  `,
                gameOver: true,
                
            })
        }
     }
     

   
     

    
    render(){
        

        let randomIndex1 = Math.floor(Math.random() * 13)
        let randomIndex2 = Math.floor(Math.random() * 13)
        let randomIndex3 = Math.floor(Math.random() * 13)
        let randomIndex4 = Math.floor(Math.random() * 13)
        return (
            <div className = "table">
            <br></br>
            
                    
            <Grid>
            <Grid.Column textAlign="center" center>
                <Header color = "orange" as = 'h1' textAlign = "center">BLACKJACK! Table 250</Header>
                <Header color = "red" as = 'h3' textAlign = "center">{this.state.winLossMessage}</Header>
                <Button size = "medium" color ="green" onClick = {() => this.gameOn()}>Deal</Button>
                <Button size = "medium" color ="orange" 
                    onClick = {() => this.newGame()} >New Game</Button>

                <Dealer gameOn = {this.state.gameOn} dealerHand = {this.state.dealerHand} 
                dealerTurn = {this.state.dealerTurn} dealerScore = {this.state.dealerScore} 
                playerScore = {this.state.playerScore} hitCard1 = {this.state.hitCard1} 
                dealerHit = {this.dealerHit} renderHit1 = {this.state.renderHit1}/> 

                <Player gameOn = {this.state.gameOn} playerHand = {this.state.playerHand} 
                hitFunc = {this.hit} hitState = {this.state.hit1} dealerTurn = {this.state.dealerTurn}
                stayFunction = {this.stay} message = {this.state.message} score = {this.state.playerScore}
                gameOver = {this.state.gameOver}/>
            </Grid.Column>
            </Grid>
            
                
               
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
} 