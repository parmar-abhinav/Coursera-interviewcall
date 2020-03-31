import React, { Component } from 'react'
import Interhome from './Interhome'
import {Row, Col,Form, FormGroup, Label, Input, FormText , Alert, Button} from 'reactstrap'

class Schedule extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            id: 'userid',
            date: '',
            time: '',
            price: ''
        }
        this.handledate = this.handledate.bind(this)
        this.handleprice = this.handleprice.bind(this)
        this.handletime = this.handletime.bind(this)
        this.handleadd  = this.handleadd.bind(this)
        this.handlereset = this.handlereset.bind(this)
    }

    handledate(e)
    {
        this.setState({
            date: e.target.value
        })
    }

    handleprice(e)
    {
        this.setState({
            price: e.target.value
        })
    }

    handletime(e)
    {
        this.setState({
            time: e.target.value
        })
    }

    handleadd()
    {
        alert('add')
    }

    handlereset()
    {
        this.setState({
            id: 'userid',
            date: '',
            time: '',
            price: ''
        })
    }
    render()
    {
        return(
            <div>
                <Interhome />
                <br />
                <Form onSubmit={this.handleadd}>
                <div className="container">
                        <Label>Add Schedule</Label>
                        <FormGroup row>
                            <Label for="id" sm={2}>User Id</Label>
                            <Col sm={5}>
                                <Input type="text"  id="id" value={this.state.id} disabled/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="date" sm={2}>Date</Label>
                            <Col sm={5}>
                                <Input type='date' id="date" value={this.state.date} onChange={this.handledate}/>
                            </Col>
                        </FormGroup>


                        <FormGroup row>
                            <Label for="time" sm={2}>Time</Label>
                            <Col sm={5}>
                                <Input type='time' id="time" value={this.state.time} onChange={this.handletime}/>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label for="price" sm={2}>Price</Label>
                            <Col sm={5}>
                                <Input type='number' id="price" value={this.state.price} onChange={this.handleprice}/>
                            </Col>
                        </FormGroup>
                        <Button type="submit" color="success" onClick={this.handleadd}>Add</Button>{' '}
                        <Button color="secondary" onClick={this.handlereset}>Reset</Button>
                </div>
                </Form>
            </div>
        );
    }
}

export default Schedule