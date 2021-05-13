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
    <div 
      style={{ 
      backgroundImage: `url("https://media.istockphoto.com/vectors/poker-table-background-in-green-color-vector-id1206505233?k=6&m=1206505233&s=612x612&w=0&h=3yK8zXZmrh3-tRVtw0wY-AiTTwnqFf_mmNlIGAjlr4E=")`}}
      className="App"> 
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
