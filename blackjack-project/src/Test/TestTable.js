import React from 'react'
import Dealer from './DealerComponents/Dealer'
import Player from './PlayerFiles/Player'



export default class TestTable extends React.Component{

   
   
    state = {
        cards: [],
        mainDeck: [],
        gameOn: false, 
        hit1: false, 
        hit2: false, 
        hit3: false, 
        playerHand: [], 
        dealerHand: [],
        hitCard1: {},
        playerScore: null

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

          this.setState({
              hit1: true, 
              hitCard1: deck[randomIndex] 
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
         })
     } 

    
    render(){
        console.log(this.state.playingCards)

        return (
            <div>
                <button onClick = {() => this.gameOn()}>Deal</button>
                <Dealer gameOn = {this.state.gameOn} dealerHand = {this.state.dealerHand}/> 
                <Player gameOn = {this.state.gameOn} playerHand = {this.state.playerHand} 
                hitFunc = {this.hit} hitCard1 = {this.state.hitCard1} hitState = {this.state.hit1}/>
            </div>
        )
    }
} 