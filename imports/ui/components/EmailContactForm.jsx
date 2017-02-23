import React, { Component } from 'react';
import store from '../../reducers/combined.js';
import { render } from 'react-dom';

export default class EmailContactForm extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			contactMethod: "EMAIL"
		}
	}

	handleClick(event) {
		let clickedElement = event.currentTarget;
		this.setState({
			contactMethod: clickedElement.getAttribute('data-contact-method')
		})
	}

	render() {
		let chooseContactMethodButtons = (
			<div className="contact-method-chooser">
				<a data-contact-method="EMAIL" onClick={ this.handleClick.bind(this) } className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">email</i></a>
				<a data-contact-method="MESSAGE" onClick={ this.handleClick.bind(this) } className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">message</i></a>
				<a data-contact-method="INFO" onClick={ this.handleClick.bind(this) } className="btn-floating btn-large waves-effect waves-light"><i className="material-icons">assignment_ind</i></a>
			</div>
		)
		let contactForm;		
		switch (this.state.contactMethod) {
			case "EMAIL":
				contactForm = (
					<div>
					{ chooseContactMethodButtons }
						<div className="row form-container">
							<form className="col s12">
							  <div className="row">
							    <div className="input-field col s6">
							      <input id="first_name" type="text" className="validate"/>
							      <label htmlFor="first_name">First Name</label>
							    </div>
							    <div className="input-field col s6">
							      <input id="email" type="email" className="validate"/>
							      <label htmlFor="email">Email</label>
							    </div>
							    <div className="input-field col s12">
							      <input id="subject_line" type="text" className="validate"/>
							      <label htmlFor="subject_line">Subject Line</label>
							    </div>
							    <div className="input-field col s12">
							      <textarea id="textarea1" type="text" className="materialize-textarea"></textarea>
							      <label htmlFor="textarea1">Textarea</label>
							    </div>
							    <button className="col s12 submit-contact-form">Send Email</button>
							  </div>
							</form>
						</div>
					</div>
				)
				return contactForm;
			case "MESSAGE":
				contactForm = (
					<div>
					{ chooseContactMethodButtons }
						<div className="row form-container">
							<form className="col s12">
							  <div className="row">
							    <div className="input-field col s6">
							      <input id="first_name" type="text" className="validate"/>
							      <label htmlFor="first_name">First Name</label>
							    </div>
							    <div className="input-field col s6">
							      <input id="tel" type="tel" className="validate"/>
							      <label htmlFor="tel">Your Phone Number</label>
							    </div>
							    <div className="input-field col s12">
							      <input id="subject_line" type="text" className="validate"/>
							      <label htmlFor="subject_line">Subject Line</label>
							    </div>
							    <div className="input-field col s12">
							      <textarea id="textarea1" type="text" className="materialize-textarea"></textarea>
							      <label htmlFor="textarea1">Textarea</label>
							    </div>
							    <button className="col s12 submit-contact-form">Send SMS</button>
							  </div>
							</form>
						</div>
					</div>
				)
				return contactForm;
			case "INFO":
				contactForm = (
					<div>
						{ chooseContactMethodButtons }
						<div className="row form-container">
							<div className="contact-info">
								<h5 className="heading">Contact Info</h5>
								<p className="info"><span className="key">Email:</span> leroywan@gmail.com</p>
								<p className="info"><span className="key">Phone Number:</span> 6479689897</p>
							</div>
						</div>
					</div>
				)
				return contactForm;
			default:
				return contactForm;
		}

	}

}
