import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import store from '../../reducers/combined.js';

export default class ContactMethodChooser extends Component {

	constructor(props) {
		super(props);
		this.state = {
			currentMethod: "email"
		}
	}

	handleClick(event) {
		let clickedElement = event.currentTarget;
		store.dispatch({ type: clickedElement.getAttribute('data-contact-method') });
		console.log(store.getState());
	}

	render() {
		return (
			<div className="contact-method-chooser">
				<a data-contact-method="EMAIL" onClick={ this.handleClick.bind(this) } className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">email</i></a>
				<a data-contact-method="MESSAGE" onClick={ this.handleClick.bind(this) } className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">message</i></a>
				<a data-contact-method="INFO" onClick={ this.handleClick.bind(this) } className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">assignment_ind</i></a>
			</div>
		)
	}

}