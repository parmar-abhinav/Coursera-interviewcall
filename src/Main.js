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
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';
import Leaderboards from './components/Interviewer/Leaderboard';
import SCHEDULES from './components/Interviewer/Schedule';
import {connect} from 'react-redux';
import {UPDATE_APP} from './redux/ActionCreator';


const mapStateToProps = (state) => {
      return {
        username: state.username,
        type: state.type
      }
}

const mpaDispatchToProps = (dispatch) => ({

    UPDATE_APP: (username, type) => {
      dispatch(UPDATE_APP(username, type));
    }
});

function Main(props){

    if(props.type === 'None')
    {
      return(
        <Switch >
              <Route path="/" component = {() => <Home UPDATE_APP = {props.UPDATE_APP} />} exact />
              <Route path="/register" component = {Register}  />
              <Redirect to="/" />
        </Switch>
      );
    }
    else if(props.type === 'interviewer')
    {
        return(
                <Switch>
                  <Route path="/" component={() => <Interhome UPDATE_APP = {props.UPDATE_APP} username = {props.username}/>} exact />
                  <Route path="/schedule" component={Schedule} />
                  <Route path="/leaderboard" component={Leaderboards} />
                  <Route path="/schedule" component={SCHEDULES} />
                  <Route path="/error" component={Page} />
                  <Redirect to="/error" />
                </Switch>
        );
    }
    else if(props.type === 'student')
    {
      return(
              <Switch>
              <Route path="/" component={() => <Candhome UPDATE_APP = {props.UPDATE_APP} username = {props.username}/>} exact />
              <Route path="/book-interview" component={Bookinterview} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/wishlist" component={Wishlist} />
              <Route path="/error" component={Page} />
              <Redirect to="/error" />
              </Switch>
      );
    }
}

export default withRouter(connect(mapStateToProps, mpaDispatchToProps)(Main)) ;
