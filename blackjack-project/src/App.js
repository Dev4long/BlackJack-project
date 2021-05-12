import React from 'react';
import './App.css';
import OpeningPage from './Test/OpeningPage';
import TestTable from './Test/TestTable';
import {Button} from 'semantic-ui-react'

export default class App extends React.Component {
  
  state = {
    display: true
  }

 toTables = () => {
   this.setState({display: !this.state.display})
 }

 newGame = () => {
  this.setState({
      display: !this.state.display 
  })
}
  
  
  render() {
  return (
    <div className="App"> 
      {this.state.display === true ? <OpeningPage toTables = {this.toTables}/> : <TestTable newGame = {this.newGame}/>}    
    </div>
  );
}
}
