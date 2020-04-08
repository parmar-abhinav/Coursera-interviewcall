import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Candhome from "./Candhome";

class Wishlist extends Component
{
    constructor(props){
        super(props)

        this.state={
            interviewers: []
        }
        axios.get("http://localhost:3001/wishlist")
        .then(res => {
            this.setState({
                interviewers: res.data[0]
            }, console.log(this.state.interviewers))
        })
        .catch(err => {
            console.log(err);
        });
    }
    render(){
            const interviewers = this.state.interviewers.map((interviewer) => {
                return(
                        <ListGroup horizontal>
                        <ListGroupItem  style={{width: '100px'}}>{interviewer.id}</ListGroupItem>
                        <ListGroupItem  style={{width: '500px'}}>{interviewer.name}</ListGroupItem>
                        <ListGroupItem  style={{width: '200px'}}>{interviewer.specialization}</ListGroupItem>
                        <ListGroupItem  style={{width: '100px'}}>{interviewer.ranking}</ListGroupItem>
                        <ListGroupItem  style={{width: '100px', cursor: 'pointer'}}>View</ListGroupItem>
                        </ListGroup>
                )
            })
            return(
                <div>
                    <Candhome />
                    <div className="container">
                        <h3 
                        style={{color: 'green', textAlign: 'center', marginTop: '15px', marginBottom: '15px'}}
                        ><em>Interviewers</em></h3>
                        <ListGroup style={{marginBottom: '15px'}}>
                        <ListGroup horizontal style={{color: 'white'}} >
                        <ListGroupItem style={{width: '100px', backgroundColor: 'blue'}}>UserId</ListGroupItem>
                        <ListGroupItem style={{width: '500px', backgroundColor: 'blue'}}>Name</ListGroupItem>
                        <ListGroupItem style={{width: '200px', backgroundColor: 'blue'}}>Specialization</ListGroupItem>
                        <ListGroupItem style={{width: '100px', backgroundColor: 'blue'}}>Ranking</ListGroupItem>
                        <ListGroupItem style={{width: '100px', backgroundColor: 'blue'}}>View Profile</ListGroupItem>
                        </ListGroup>
                        {interviewers}
                        </ListGroup>
                        <span style={{color: 'red', marginLeft: '5px'}}>Total : {this.state.interviewers.length}</span>
                    </div>
                </div>
            );
    }
}

export default Wishlist;