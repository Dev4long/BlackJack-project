import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


export default class Dhit1 extends React.Component{

    render(){
        return (
            <div>   
                <Card>
                     <Image size = 'small' src = {this.props.hit1.image} />      
                </Card>
            </div>
        )
    }
}