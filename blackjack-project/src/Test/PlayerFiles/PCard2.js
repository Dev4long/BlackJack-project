import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class PCard2 extends React.Component{

    render(){
        return (
            <div>   
                <Card>
                     <Image size = "mini" src= {this.props.gameOn === false ? "http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg": 
                    this.props.card2.image} wrapped ui={false} />      
                </Card>
            </div>
        )
    }
}