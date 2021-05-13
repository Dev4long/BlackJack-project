import React from "react";
import { Image, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom'



export default class Opening extends React.Component {
    render(){
        return (
            <div>
                <Segment color = "red" centered>
                 <Link to= "/table50">
                    <button>50 Stake Table</button>
                 </Link>
                 <Link to= "/table100">
                     <button>100 Stake Table</button>
                 </Link>
                 <Link to= "/table250">
                     <button>250 Stake Table</button>
                 </Link>
                 <Image fluid src= "https://wallpapercave.com/wp/wp2180131.jpg" />
                 
                </Segment>
            </div>
        )
    }
}