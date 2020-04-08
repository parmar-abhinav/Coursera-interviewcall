import React, { Component } from 'react';
import axios from 'axios';
import {
    Label,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Dropdown,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import '../../Style.css'


class interhome extends Component
{

    constructor(props)
    {
        super(props)
        this.state={
            isOpen: false,
            dropdownopen: false,
            name: ''
        }

        axios.get("http://localhost:3001/getinfo")
        .then(res => {
            this.setState({
                name: res.data.name
            })
        })
        .catch(err => {
            console.log(err);
        })


        this.handletoggle = this.handletoggle.bind(this)
        this.dropdowntoggle = this.dropdowntoggle.bind(this)
    }

    dropdowntoggle(e)
    {
        this.setState({
            dropdownopen: !(this.state.dropdownopen)
        })
    }

    handletoggle(e)
    {
        this.setState({
            isOpen: !(this.state.isOpen)
        })
    }

    render()
    {
        return(
            <div>
                <Navbar color="info" dark expand="md">
                    <NavbarBrand href="/LeaderHome">Interview Call</NavbarBrand>
                    <NavbarToggler onClick={this.handletoggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/leaderboard">Leader board</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/schedule">Schedule</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Alerts">Alerts</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Transaction">Transaction</NavLink>
                                </NavItem>
                            </Nav>
                            <div className="ml-sm-auto navbar-nav">
                                    <Dropdown nav inNavbar isOpen={this.state.dropdownopen} toggle={this.dropdowntoggle}>
                                        <DropdownToggle nav caret>
                                            Profile
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <NavLink href="/myprofile"><DropdownItem>My Profile</DropdownItem></NavLink>
                                            <NavLink href="/edit"><DropdownItem>Edit Profile</DropdownItem></NavLink>
                                            <NavLink href="/logout"><DropdownItem className="logout">Logout</DropdownItem></NavLink>
                                        </DropdownMenu>
                                    </Dropdown>
                            </div>
                        </Collapse>
                </Navbar>
                <p>Welcome : {this.state.name}</p>
            </div>
        );
    }
}

export default interhome;