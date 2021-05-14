import React from "react";
import { Image, Button, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'



export default class Opening extends React.Component {
    render(){
        return (
            <div>

               <Grid textAlign = "center">  
                 <Image fluid src= "https://wallpapercave.com/wp/wp2180131.jpg" />
                 <Link to= "/table50">
                    <Button size = "huge" color = "blue">50 Stake Table</Button>
                 </Link>
                 <Link to= "/table100">
                     <Button size = "huge" color = "orange">100 Stake Table</Button>
                 </Link>
                 <Link to= "/table250">
                     <Button size = "huge" color = "green">250 Stake Table</Button>
                 </Link> 
                 </Grid>
                
            </div>
        )
    }
}