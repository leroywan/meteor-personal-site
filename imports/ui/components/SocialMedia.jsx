import React, { Component } from 'react';
import { Router, Route, browserHistory} from 'react-router';
import { Link } from 'react-router';
 
// App component - represents the whole app
export default class SocialMedia extends Component {
	constructor(props) {
	    super();
	    this.state = {
	      hamburger: "inactive"
	    }
	 }

	 render() {
	 	return (
	 		<div className="social-media">
	 			<a href="#"><i className="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
	 			<a href="#"><i className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
	 			<a href="#"><i className="fa fa-google-plus fa-lg" aria-hidden="true"></i></a>
	 			<a href="#"><i className="fa fa-linkedin fa-lg" aria-hidden="true"></i></a>
	 		</div>
	 	)
	 }
}