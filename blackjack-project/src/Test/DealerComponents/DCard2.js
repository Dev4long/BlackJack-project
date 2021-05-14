import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class DCard2 extends React.Component{

    render(){
        return (
            <div>   
                
                     <Image rounded size = "small" src= {this.props.gameOn === false ? "http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg": 
                    this.props.card2.image} />      
                
            </div>
        )
    }
}