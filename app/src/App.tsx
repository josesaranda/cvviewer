import React, { Component} from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './App.css';
import { Cv } from './pages/Cv';

type AppProps = {};

type AppState = {};

class App extends Component<AppProps, AppState> {

  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/cv/:id" component={Cv} />
            <Route path="*"><Redirect to="/cv/1"></Redirect></Route>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
