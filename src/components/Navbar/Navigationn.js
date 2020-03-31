import React, {Component} from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, ButtonToggle} from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText , Alert, FormFeedback} from 'reactstrap'
import {Media ,Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink,Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap'


class Navigationn extends Component
{

    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            modal: false,
            username: '',
            password: '',
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
        alert("Handle sign in")
        
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
        return(
        <div>
            <Navbar color="light" light expand="md">
                    <NavbarBrand href="/" style={{fontSize: '30px'}}>Interview Call</NavbarBrand>
                    <NavbarToggler onClick = {this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            
                        </Nav>
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
                        <FormGroup>
                            <Label for="Username">Username</Label>
                            <Input  type="text" id="Username" placeholder="Username" value={this.state.username} onChange={this.handleUserName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input  type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlePassword}/>
                        </FormGroup>
                        <Label>Don't have an account <Button color="link">Sign up now</Button></Label>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={this.handleSignin}>Sign in</Button>
                    <Button color="secondary" onClick={this.modaltoggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        );
    }
}

export default Navigationn