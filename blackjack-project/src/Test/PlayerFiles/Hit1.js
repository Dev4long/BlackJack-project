import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class Hit1 extends React.Component{

    render(){
        return (
            <div>   
                
                     <Image size = 'small' src = {this.props.hitCard1.image} />      
                
            </div>
        )
    }
}