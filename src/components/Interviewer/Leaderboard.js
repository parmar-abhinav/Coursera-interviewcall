import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Interhome from './Interhome';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Leaderboard extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            interviewers: [],
            isOpen : false,
            name: '',
            id: '',
            specialization: '',
            ranking: '',
            schedule: []
        }
        axios.get("http://localhost:3001/leaderboard")
        .then(res => {
            console.log(res.data[0]);
            this.setState({
                interviewers: res.data[0]
            }, () => {
                console.log(this.state.interviewers);
            })
        })
        .catch(err => {
            console.log(err);
        });

        this.handletoggle = this.handletoggle.bind(this);
        this.handleview = this.handleview.bind(this);
    }
    handleview(interviewer)
    {
        this.setState({
            name: interviewer.name,
            id: interviewer.id,
            specialization: interviewer.specialization,
            ranking: interviewer.ranking,
            isOpen: true
        })

        axios.get(`http://localhost:3001/schedule/${interviewer.id}`)
        .then(res => {
            console.log(res.data[0]);
            this.setState({
                schedule: res.data[0]
            })
        })
        .catch(err => {
            console.log(err);
        });
    }
    handletoggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    handlebook(schedule){
        alert(schedule);
    }
    render(){
        const schedule = this.state.schedule.map((schedule) => {
            return(
                <ListGroup horizontal>
                <ListGroupItem  style={{width: '200px', fontSize: '13px'}}>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(schedule.date)))}</ListGroupItem>
                <ListGroupItem  style={{width: '200px'}}>{schedule.time}</ListGroupItem>
                <ListGroupItem  style={{width: '200px'}}>{schedule.price}</ListGroupItem>
                <ListGroupItem  style={{width: '200px', cursor: 'pointer', color: 'green'}}  onClick={() => this.handlebook(schedule)}>Book</ListGroupItem>
                </ListGroup>
            );
        })

        const interviewers = this.state.interviewers.map((interviewer) => {
            return(
                    <ListGroup horizontal>
                    <ListGroupItem  style={{width: '100px'}}>{interviewer.id}</ListGroupItem>
                    <ListGroupItem  style={{width: '500px'}}>{interviewer.name}</ListGroupItem>
                    <ListGroupItem  style={{width: '200px'}}>{interviewer.specialization}</ListGroupItem>
                    <ListGroupItem  style={{width: '100px'}}>{interviewer.ranking}</ListGroupItem>
                    <ListGroupItem  style={{width: '100px', cursor: 'pointer'}}  onClick={() => this.handleview(interviewer)}>View</ListGroupItem>
                    </ListGroup>
            )
        })
        return(
            <div>
                <Interhome />
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
                <Modal isOpen = {this.state.isOpen} toggle={this.handletoggle}>
                <ModalHeader toggle={this.handletoggle}>
                <p style={{color: 'gray'}}>{this.state.name}</p>
                <p style={{fontSize: '15px'}}>username: {this.state.id}</p>
                <p style={{fontSize: '15px'}}>specialization: {this.state.specialization}</p>
                <p style={{fontSize: '15px'}}>Ranking: {this.state.ranking}</p>
                </ModalHeader>
                        <ModalBody>
                        <div className="container">
                    <h3 
                    style={{color: 'green', textAlign: 'center', marginTop: '15px', marginBottom: '15px'}}
                    ><em>Schedule</em></h3>
                    <ListGroup style={{marginBottom: '15px'}}>
                    <ListGroup horizontal style={{color: 'white'}} >
                    <ListGroupItem style={{width: '200px', backgroundColor: 'blue'}}>Date</ListGroupItem>
                    <ListGroupItem style={{width: '200px', backgroundColor: 'blue'}}>Time</ListGroupItem>
                    <ListGroupItem style={{width: '200px', backgroundColor: 'blue'}}>Price</ListGroupItem>
                    <ListGroupItem style={{width: '200px', backgroundColor: 'blue'}}>Book</ListGroupItem>
                    </ListGroup>
                    {schedule}
                    </ListGroup>
                </div>
                        </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Leaderboard;