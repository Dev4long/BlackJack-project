import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class PCard1 extends React.Component{

    render(){
        return (
            <div>   
                <Card>
                     <Image size = "small" src= {this.props.gameOn === false ? "http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg": 
                    this.props.card1.image} wrapped ui={false} />      
                </Card>
            </div>
        )
    }
}