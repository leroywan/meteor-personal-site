import React, { Component } from 'react';
import MainNavigation from './components/MainNavigation.jsx';
import MainFooter from './components/MainFooter.jsx';

import EmailContactForm from './components/EmailContactForm.jsx';
// import ContactMethodChooser from './components/ContactMethodChooser.jsx';
// App component - represents the whole app
export default class Contact extends Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }
 
  render() {
    return (
      <div className="page" id="contact">
      	<MainNavigation></MainNavigation>
        <div className="page-content animated fadeIn">
          <section className="front-page">
            <div className="content">
              <h1>Contact</h1>
              <p>Lorem Ipsum Dolor Something Do Stuff Gonna Go Sleep Soon</p>
            </div>
          </section>
        	<section className="main-content-container">
            <div className="main-content">
              <h1 className="heading">I Would Love To Hear From You!</h1>
           		<p className="description"></p>
         		  <EmailContactForm/>
            </div>
          </section>
        </div>
        <MainFooter/>
      </div>
    );
  }
}