import React, { Component } from 'react';
import Home from './components/Home';
import Register from './components/Register/Register';
import Candhome from './components/candidate/Candhome';
import Interhome from './components/Interviewer/Interhome';
import Schedule from './components/Interviewer/Schedule';
import Page from './components/PNF/Page';
import Bookinterview from './components/candidate/Bookinterview';
import Leaderboard from "./components/candidate/Leaderboard";
import Wishlist from "./components/candidate/Wishlist";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import Leaderboards from './components/Interviewer/Leaderboard';
import SCHEDULES from './components/Interviewer/Schedule';

class App extends Component{
  constructor(props)
  {
    super(props)
    this.state={
      username: '',
      type: 'interviewer'
    }
    axios.get('http://localhost:3001/getinfo')
    .then(res => {
      console.log(res.data);
      this.setState({
        username: res.data.username,
        type: res.data.type
      })
    })
    .catch(err => {
      console.log(err);
    })
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(type) {

  }
  render(){
    if(this.state.type === 'None')
    {
      return(
        <div>
        <BrowserRouter>
        <Switch >
              <Route path="/" component = {() => <Home handletype = { this.handleLogin}/>} exact />
              <Route path="/register" component = {Register}  />
              <Redirect to="/" />
        </Switch>
        </BrowserRouter>
        </div>
      );
    }
    else if(this.state.type === 'interviewer')
    {
        return(
          <div>
              <BrowserRouter>
                <Switch>
                  <Route path="/" component={Interhome} exact />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/leaderboard" component={Leaderboards} />
                  <Route path="/schedule" component={SCHEDULES} />
                  <Route path="/error" component={Page} />
                  <Redirect to="/error" />
                </Switch>
              </BrowserRouter>
          </div>
        );
    }
    else if(this.state.type === 'student')
    {
      return(
          <div>
            <BrowserRouter>
              <Switch>
              <Route path="/" component={Candhome} exact />
              <Route path="/book-interview" component={Bookinterview} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/wishlist" component={Wishlist} />
              <Route path="/error" component={Page} />
              <Redirect to="/error" />
              </Switch>
              </BrowserRouter>
          </div>
      );
    }
  }
}

export default App;
