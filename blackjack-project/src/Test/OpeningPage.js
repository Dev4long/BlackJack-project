import React from "react";
import { Image, Button, Segment } from 'semantic-ui-react'



export default class Opening extends React.Component {
    render(){
        return (
            <div>
                <Segment color = "red" centered>
                 <Image onClick = {() => this.props.toTables()} fluid src= "https://wallpapercave.com/wp/wp2180131.jpg" />
                </Segment>
            </div>
        )
    }
}