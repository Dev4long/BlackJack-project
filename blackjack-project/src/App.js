import React from 'react';
import './App.css';
import OpeningPage from './Test/OpeningPage';
import TestTable from './Test/TestTable';
import {Button} from 'semantic-ui-react'
import TestTable100 from './Test/TestTable100'
import TestTable250 from './Test/TestTable250';

export default class App extends React.Component {
  
  state = {
    display: "open"
  }

 mainTable = () => {
   this.setState({display: "fifty"})
 }

 oneTable = () => {
   this.setState({display: "one"})
 }

 twoTable = () => {
   this.setState({display: "two"})
 }

 

  
  
  render() {
  return (
    <div className="App"> 
      {this.state.display === "open" ? <OpeningPage mainTable = {this.mainTable} oneTable = {this.oneTable} twoTable = {this.twoTable}/>: 
      this.state.display === "fifty" ? <TestTable/> : 
      this.state.display === "one" ? <TestTable100/>: this.state.display === "two" ? <TestTable250/>: null}
   
    </div>
  );
}
}
