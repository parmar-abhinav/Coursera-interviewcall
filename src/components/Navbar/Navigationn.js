import React, {Component} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, ButtonToggle} from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText , Alert, FormFeedback} from 'reactstrap'
import {Media ,Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink,Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';


class Navigationn extends Component
{

    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            modal: false,
            username: '',
            password: '',
            message: '',
            alert: false
        }
        this.toggle = this.toggle.bind(this)
        this.modaltoggle = this.modaltoggle.bind(this)
        this.handleSignin = this.handleSignin.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleUserName(e){
        this.setState({
            username: e.target.value
        })
    }

    handlePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    handleSignin(e){
        if(this.state.username === '' || this.state.password === '')
        {
            this.setState({
                alert: true,
                message: 'Complete all the fields'
            })
        }
        else
        {
            axios.post('http://localhost:3001/signin', this.state)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        }
    }

    modaltoggle(e){
        this.setState({
            modal: !(this.state.modal)
        })
    }
     
    toggle(e){
        this.setState({
            isOpen: !(this.state.isOpen)
        })
    }

    render(){
        
        if(this.state.alert)
        {
            setTimeout(() => {
                this.setState({
                    alert: false,
                    alert: false
                })
            }, 2000);
        }
        return(
        <div>
            <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" style={{fontSize: '30px'}}>Interview Call</NavbarBrand>
                    <NavbarToggler onClick = {this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <div className="ml-sm-auto navbar-nav">
                        <NavItem>
                                <Button  color="danger" onClick = {this.modaltoggle}>SIGN-IN / REGISTER</Button>
                        </NavItem>
                        </div>
                    </Collapse>
            </Navbar>
            <Modal isOpen={this.state.modal}  fade={false} toggle = {this.modaltoggle}>
                <ModalHeader toggle={this.modaltoggle}>Login</ModalHeader>
                <ModalBody>
                    <Form>
                        <Alert color="warning" isOpen={this.state.alert}>
                            {this.state.message}
                        </Alert>
                        <FormGroup>
                            <Label for="Username">Username</Label>
                            <Input  type="text" id="Username"  placeholder="Username" name="username" value={this.state.username} onChange={this.handleUserName} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input  type="password" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handlePassword} />
                        </FormGroup>
                        <Button color="success" onClick={this.handleSignin}>Sign in</Button>{' '}
                        <Button color="secondary" onClick={this.modaltoggle}>Cancel</Button><br /><br />
                        Don't have an account <Link to="/register">Sign up now</Link>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
        );
    }
}

export default Navigationn