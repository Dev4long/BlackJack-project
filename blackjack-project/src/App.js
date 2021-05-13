import React from 'react';
import './App.css';
import OpeningPage from './Test/OpeningPage';
import TestTable from './Test/TestTable';
import Table100 from './Test/Table100';
import Table250 from './Test/Table250';
import {Button} from 'semantic-ui-react';
import { Route, Switch, Link } from 'react-router-dom'

export default class App extends React.Component {
  
  

 

  
  
  render() {
  return (
    <div className="App"> 
      <Switch>
        <Route path = "/table50" >
          <TestTable />
        </Route>
        <Route path = "/table100">
          <Table100 /> 
        </Route>
        <Route path = "/table250">
          <Table250 /> 
        </Route>
        <Route path ="/" component={OpeningPage}/>
      </Switch>
      
         
    </div>
  );
}
}
