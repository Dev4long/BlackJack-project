import React from 'react'
import Dealer from './DealerComponents/Dealer'
import Player from './PlayerFiles/Player'



export default class TestTable extends React.Component{

   
   
    state = {
        cards: [],
        gameOn: false, 
        playerCard1: [], 
        playerCard2: [], 
        dealerCard1: [], 
        dealerCard2: []
      }
  
      componentDidMount(){
          fetch('http://localhost:3000/cards')
          .then(res => res.json())
          .then(cards => this.setState(
              {cards: cards,
               playerCard1: cards, 
               playerCard2: cards, 
               dealerCard1: cards, 
               dealerCard2: cards
            }))
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
                <button onClick = {() => this.gameOn()}>Deal</button>
                <Dealer dCard1 = {this.state.dealerCard1[randomIndex1]} gameOn = {this.state.gameOn} dCard2 = {this.state.dealerCard2[randomIndex2]}/>
                <br></br>
                <br></br>
                <Player pCard1 = {this.state.playerCard1[randomIndex3]} gameOn = {this.state.gameOn} pCard2 = {this.state.playerCard2[randomIndex4]}/>
                
            </div>
        )
    }
}


