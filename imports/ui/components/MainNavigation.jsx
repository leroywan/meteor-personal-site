import React, { Component } from 'react';
import { Router, Route, browserHistory} from 'react-router';
import { Link } from 'react-router';

import { createStore, combineReducers } from 'redux';
import store from '../../reducers/combined.js';
import MDSpinner from "react-md-spinner";

import SocialMedia from './SocialMedia.jsx';


// App component - represents the whole app
export default class MainNavigation extends Component {

  constructor(props) {
    super();
    this.state = {
      toggle: "inactive"
    }
  }

  handleHamburgerClick() {
    store.dispatch({ type: "TOGGLE" })
    this.setState({ toggle: store.getState().toggle });
  }

  render() {

    return (
    <div id="main-navigation">
      <Link to='/' className="link title">Leroy Wan</Link>
      <ul className="link-container hide-on-med-and-down">
        <li><Link to='/about' className="link" activeClassName="active-link about"><i className="fa fa-user-o" aria-hidden="true"></i>About</Link></li>
        <li><Link to='/services' className="link" activeClassName="active-link services"><i className="fa fa-code" aria-hidden="true"></i>Services</Link></li>
        <li><Link to='/contact' className="link" activeClassName="active-link contact"><i className="fa fa-envelope-o" aria-hidden="true"></i>Contact</Link></li>
        <li><Link to='/blog' className="link" activeClassName="active-link blog"><i className="fa fa-file-text-o" aria-hidden="true"></i>Blog</Link></li>
      </ul>
      <a onClick={ this.handleHamburgerClick.bind(this) } id="hamburger-menu" className="hide-on-large-only">
        <div className={"top " + this.state.toggle }></div>
        <div className={"med " + this.state.toggle }></div>
        <div className={"btm " + this.state.toggle }></div>
      </a>
      <div onClick={ this.handleHamburgerClick.bind(this) } className={"hide-on-large-only animated fadeIn hamburger-link-container-background "+ this.state.toggle}>
        <ul className={"hamburger-link-container animated fadeIn " + this.state.toggle }>
          <li><Link to='/about' className="link" activeClassName="active-link">About<div className="icon" ><i className="fa fa-user-o fa-lg" aria-hidden="true"></i></div></Link></li>
          <li><Link to='/services' className="link" activeClassName="active-link">Services<div className="icon" ><i className="fa fa-code fa-lg" aria-hidden="true"></i></div></Link></li>
          <li><Link to='/contact' className="link" activeClassName="active-link">Contact<div className="icon" ><i className="fa fa-envelope-o fa-lg" aria-hidden="true"></i></div></Link></li>
          <li><Link to='/blog' className="link" activeClassName="active-link">Blog<div className="icon" ><i className="fa fa-file-text-o fa-lg" aria-hidden="true"></i></div></Link></li>
        </ul>
        <SocialMedia></SocialMedia>
      </div>
    </div>
    );
  }
}