import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class Hit3 extends React.Component{

    render(){
        return (
            <div>   
                <Card>
                     <Image size = 'small' src = {this.props.hitCard1.image} />      
                </Card>
            </div>
        )
    }
}