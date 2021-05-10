import React, { Component } from "react";

class CardTile extends Component {

render(){
    
    return(
        <div>
           <img src= {this.props.cards.image}/>
        </div>
    )
}
} 

export default CardTile