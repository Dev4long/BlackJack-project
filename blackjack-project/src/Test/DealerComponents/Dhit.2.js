import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class Dhit2 extends React.Component{

    render(){
        return (
            <div>   
                
                     <Image size = 'small' src = {this.props.hit2.image} />      
                
            </div>
        )
    }
}