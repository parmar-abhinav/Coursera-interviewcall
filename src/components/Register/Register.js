import React, {Component} from 'react'
import {TabContent, TabPane, Form, FormGroup, Label, Input, FormText , Alert} from 'reactstrap'
import {Col, Row, Button, Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap'
import Navigationn from '../Navbar/Navigationn';

import classnames from 'classnames';

class Register extends Component
{
    constructor(props){
        super(props)
        this.state = {
            isOpen: false,
            username: '',
            password: '',
            name: '',
            email: '',
            dob: '',
            mobile: '',
            activetab: '1',
            type: '',
            specialization: 'DBMS'
        }
        this.toggle = this.toggle.bind(this)
        this.handlespecialization = this.handlespecialization.bind(this)
        this.handleusername = this.handleusername.bind(this)
        this.handlepassword = this.handlepassword.bind(this)
        this.handlename = this.handlename.bind(this)
        this.handleemail = this.handleemail.bind(this)
        this.handledob = this.handledob.bind(this)
        this.handletype = this.handletype.bind(this)
        this.handlemobile = this.handlemobile.bind(this)
    }
    
    toggletab(e){
        if(this.state.tab !== e)
        {
            this.setState({
                activetab: e,
                username: '',
                password: '',
                name: '',
                email: '',
                dob: '',
                mobile: ''
            })
        }
    }

    handlespecialization(e)
    {
        this.setState({
            specialization: e.target.value
        })
    }

    handleusername(e){
        this.setState({
            username: e.target.value
        })
    }

    handlepassword(e){
        this.setState({
            password: e.target.value
        })
    }

    handlename(e){
        this.setState({
            name: e.target.value
        })
    }

    handleemail(e){
        this.setState({
            email: e.target.value
        })
    }

    handledob(e){
        this.setState({
            dob: e.target.value
        })
    }

    handlemobile(e){
        this.setState({
            mobile: e.target.value
        })
    }

    toggle(e){
        this.setState({
            isOpen: !(this.state.isOpen)
        })
    }

    handletype(e)
    {
        this.setState({
            type: e
        })
    }

    handleregister(e)
    {
        alert("Register")
    }

    handlecancel(e)
    {
        alert("cancel")
    }

    render()
    {
        return(
            <div>
                <Navigationn />
                <hr />
                <legend style={{textAlign: 'center'}}>Register</legend><br />

        <div className="container">
        <Nav tabs row>
        <Col sm={6}>
          <NavItem>
            <NavLink
            className={classnames({ active: this.state.activetab === '1' })}
            onClick={() => { this.toggletab('1'); this.handletype('student')}}
          >
            Student
          </NavLink>
            </NavItem>
        </Col>
        <Col sm={6}>
          <NavItem>
          <NavLink
            className={classnames({ active: this.state.activetab === '2' })}
            onClick={() => { this.toggletab('2'); this.handletype('interviewer')}}
          >
            Interviewer
          </NavLink>
          </NavItem>
        </Col>
      </Nav>
      <TabContent activeTab={this.state.activetab}>
        <TabPane tabId="1">
                    <br />
                    <div className="container">
                    <FormGroup row>
                        <Label for="usertype" sm={2}>Usertype</Label>
                        <Col sm={5}>
                        <Input type="text" name="usertype" id="usertype" placeholder="Usertype" value='Student' disabled/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={5}>
                        <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleusername}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={5}>
                        <Input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlepassword}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={5}>
                        <Input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handlename}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>E-mail</Label>
                        <Col sm={5}>
                        <Input type="email" name="email" id="email" placeholder="E-mail" value={this.state.email} onChange={this.handleemail}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="dob" sm={2}>Date of Birth</Label>
                        <Col sm={5}>
                        <Input type="date" name="dob" id="dob" placeholder="Date of Birth" value={this.state.dob} onChange={this.handledob}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="mobile" sm={2}>Mobile</Label>
                        <Col sm={5}>
                        <Input type="number" name="mobile" id="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handlemobile} min="100000000" max="999999999"/>
                        </Col>
                    </FormGroup>
                    <div className="container">
                    <Button color="success" onClick={this.handleregister}>Register</Button>{'  '}
                    <Button color="danger" onClick = {this.handlecancel}>Cancel</Button>{'  '}
                    </div>
                    </div>
        </TabPane>
        <TabPane tabId="2">
          
        <br />
                    <div className="container">
                    <FormGroup row>
                        <Label for="usertype" sm={2}>Usertype</Label>
                        <Col sm={5}>
                        <Input type="text" name="usertype" id="usertype" placeholder="Usertype" value='Interviewer' disabled/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={5}>
                        <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleusername}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={5}>
                        <Input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlepassword}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={5}>
                        <Input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handlename}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="select" sm={2}>Specialization</Label>
                        <Col sm={5}>
                        <Input type="select" name="select" id="select" value={this.state.specialization} onChange={this.handlespecialization}>
                            <option value='DBMS'>DBMS</option>
                            <option value='Networking'>Networking</option>
                            <option value='Operating System'>Operating System</option>
                            <option value='Data Science'>Data Science</option>
                        </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>E-mail</Label>
                        <Col sm={5}>
                        <Input type="email" name="email" id="email" placeholder="E-mail" value={this.state.email} onChange={this.handleemail}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="dob" sm={2}>Date of Birth</Label>
                        <Col sm={5}>
                        <Input type="date" name="dob" id="dob" placeholder="Date of Birth" value={this.state.dob} onChange={this.handledob}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="mobile" sm={2}>Mobile</Label>
                        <Col sm={5}>
                        <Input type="number" name="mobile" id="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handlemobile} min="100000000" max="999999999"/>
                        </Col>
                    </FormGroup>
                    <div className="container">
                    <Button color="success">Register</Button>{'  '}
                    <Button color="danger">Cancel</Button>{'  '}
                    </div>
                    </div>

        </TabPane>
        <br />
      </TabContent>
      </div>
                {/* <div className="container" >
                    <FormGroup row>
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={5}>
                        <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleusername}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="password" sm={2}>Password</Label>
                        <Col sm={5}>
                        <Input type="password" name="password" id="password" placeholder="Password" value={this.state.password} onChange={this.handlepassword}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="name" sm={2}>Name</Label>
                        <Col sm={5}>
                        <Input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handlename}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" sm={2}>E-mail</Label>
                        <Col sm={5}>
                        <Input type="email" name="email" id="email" placeholder="E-mail" value={this.state.email} onChange={this.handleemail}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="dob" sm={2}>Date of Birth</Label>
                        <Col sm={5}>
                        <Input type="date" name="dob" id="dob" placeholder="Date of Birth" value={this.state.dob} onChange={this.handledob}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="mobile" sm={2}>Mobile</Label>
                        <Col sm={5}>
                        <Input type="number" name="mobile" id="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handlemobile} min="100000000" max="999999999"/>
                        </Col>
                    </FormGroup>
                    <div className="container">
                    <Button color="success">Register</Button>{'  '}
                    <Button color="danger">Cancel</Button>{'  '}
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Register