import React from 'react';
import './App.css';
import OpeningPage from './Test/OpeningPage';
import TestTable from './Test/TestTable';
import Table100 from './Test/Table100';
import Table250 from './Test/Table250';
import {Button, Header} from 'semantic-ui-react';
import { Route, Switch, Link } from 'react-router-dom'

export default class App extends React.Component {
  
  state = {
    userBalance: 2500
  }

 stake50 = (wl) => {
   if(wl == true){
     this.setState({
       userBalance: this.state.userBalance += 50
     })
   }
   if(wl == false){
    this.setState({
      userBalance: this.state.userBalance -= 50
    })
   }

 }

 stake100 = (wl) => {
  if(wl == true){
    this.setState({
      userBalance: this.state.userBalance += 100
    })
  }
  if(wl == false){
   this.setState({
     userBalance: this.state.userBalance -= 100
   })
  }
}

stake250 = (wl) => {
  if(wl == true){
    this.setState({
      userBalance: this.state.userBalance += 250
    })
  }
  if(wl == false){
   this.setState({
     userBalance: this.state.userBalance -= 250
   })
  }
}
  
  render() {
  return (
    <div className="App"> 
      <Header color = "red" as = 'h1' textAlign = "center">Your Balance: {this.state.userBalance}</Header>
      <Switch>
        <Route path = "/table50" >
          <TestTable bet= {this.stake50}/>
        </Route>
        <Route path = "/table100">
          <Table100 bet= {this.stake100}/> 
        </Route>
        <Route path = "/table250">
          <Table250 bet= {this.stake250}/> 
        </Route>
        <Route path ="/" component={OpeningPage}/>
      </Switch>
      
         
    </div>
  );
}
}
