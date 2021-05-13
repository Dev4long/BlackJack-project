import React from 'react';
import { Image, Button, Segment } from 'semantic-ui-react'

class MainLobby extends React.Component{
    render(){
        return(
            <div>
            <Segment color = "red" centered>
                <Button color = "red" size = "large">$250 Table</Button>
                <Button color = "red" size = "large">$100 Table</Button>
                <Button color = "red" size = "large">$50 Table</Button>
            </Segment>
            <Image  src='https://brainiumstudios.com/site/assets/images/blackjack-header-l.jpg' fluid />
         </div>
        )
    }
    conditionalRender = () => {
        
    }

}

export default MainLobby