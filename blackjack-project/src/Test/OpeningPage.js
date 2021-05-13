import React from "react";
import { Image, Button, Segment } from 'semantic-ui-react'



export default class Opening extends React.Component {
    render(){
        return (
            <div>
                <Segment color = "red" centered>
                <Button onClick = {() => this.props.mainTable()} circular color = "red" size = "large" >$50</Button>
                <Button onClick = {() => this.props.} circular color = "red" size = "large" >$100</Button>
                <Button circular color = "red" size = "large" >$250</Button>
                 <Image onClick = {() => this.props.toTables()} fluid src= "https://wallpapercave.com/wp/wp2180131.jpg" />
                </Segment>
            </div>
        )
    }
}