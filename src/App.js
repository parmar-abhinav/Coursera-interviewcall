import React, { Component } from 'react';
import Home from './components/Home';
import Register from './components/Register/Register';
import Candhome from './components/candidate/Candhome';
import Interhome from './components/Interviewer/Interhome';
import Schedule from './components/Interviewer/Schedule';
import Page from './components/PNF/Page';
import {Switch, Route, Redirect, Router, BrowserRouter} from 'react-router-dom';


class App extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      isLoggedIn : 'None'
    }
  }
  render(){
    if(this.state.isLoggedIn === 'None')
    {
      return(
        <div>
        <BrowserRouter>
        <Switch >
              <Route path="/" component = {Home} exact />
              <Route path="/register" component = {Register}  />
              <Redirect to="/" />
        </Switch>
        </BrowserRouter>
        </div>
      );
    }
    else if(this.state.isLoggedIn === 'Interviewer')
    {
        return(
          <div>
              <BrowserRouter>
                <Switch>
                  <Route path="/home" component={Interhome} exact />
                  <Route path="/add-schedule" component={Schedule} />
                  <Route path="/error" component={Page} />
                  <Redirect to="/error" />
                </Switch>
              </BrowserRouter>
          </div>
        );
    }
    else if(this.state.isLoggedIn === 'Candidate')
    {
      return(
          <div>
              <Route path="/home" component={Candhome} exact />
              <Route path="/error" component={Page} />
              <Redirect to="/error" />
          </div>
      );
    }
  }
}

export default App;
