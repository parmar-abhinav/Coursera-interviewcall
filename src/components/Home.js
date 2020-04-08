import React, {Component} from 'react';
import { useState, useEffect} from 'react'


import {Media ,Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText} from 'reactstrap'
import '../Style.css';
import { UncontrolledCarousel, Jumbotron } from 'reactstrap';
import Navigationn from './Navbar/Navigationn'


class Home extends Component
{

    constructor(props)
    {
        super(props);
        this.changetype = this.changetype.bind(this);
    }

    changetype(type)
    {
        this.props.handletype(type);
    }

    render(){
        const items = [
            {
                src: 'assets/images/5.png',
                key: '1'
            },
            {
              src: 'assets/images/3.jpg',
              key: '4'
            },
          ];
  return (
            <div>
                <Navigationn  greet = {this.changetype} />
                <div className="col-12 mt-1">
                    <UncontrolledCarousel items={items} />
                </div>
                <Jumbotron>
                    <p style={{fontSize: '40px', marginLeft: '50px', textAlign: 'center'}}>About Interviewcall</p>
                    <p style={{fontSize: '15px', marginLeft: '75px', marginRight: '75px', textAlign: 'justify'}}>Interviews are crucial moments in one’s career. Theoretical knowledge of interview questions isn't enough when you actually face an interview. Too often fear takes over our performance in job interviews.

                        As the adage goes – practice makes perfect! Mock interviews by InterviewCall give you the platform to prepare, practice and experience firsthand how a real-life job interview feels. Familiarizing yourself with the interview environment beforehand in a relaxed and stress-free environment gives you an edge over your peers.</p>
                </Jumbotron>
                
            </div>
        );
    }
}
export default Home;
