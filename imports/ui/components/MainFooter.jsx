import React, { Component } from 'react';
import { Router, Route, browserHistory} from 'react-router';
import { Link } from 'react-router';
import SocialMedia from './SocialMedia.jsx';
 
// App component - represents the whole app
export default class MainFooter extends Component {
	constructor(props) {
	    super();
	 }

	 render() {
	 	return (
	 		<div id="main-footer">
	 			<SocialMedia/>
	 			<span className="contact-me hide-on-med-and-down"><Link to="/contact">Contact Me</Link></span>
	 		</div>
	 	)
	 }
}