import React, { Component } from 'react';
import MainNavigation from './components/MainNavigation.jsx';
import MainFooter from './components/MainFooter.jsx';

import { Link } from 'react-router';
// App component - represents the whole app
export default class About extends Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }
 
  render() {
    return (
      <div className="page" id="about">
      	<MainNavigation></MainNavigation>
      	<div className="page-content animated fadeIn">
      		<div className="front-page">
      			<div className="content">
	        		<h1 className="heading">About</h1>
	        		<p className="tagline">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</p>
	        	</div>
        	</div>
        	<section className="main-about main-content row">
        		<div className="box left col l8 m12 s12">
              <div className="content"><h4>Who Am I?</h4><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p></div>
        		</div>
        		<div className="right col l4 m12 s12 row">
        			<div className="hvr-rectangle-out pointer box col l12 m6 s12">
                <Link to='/services' className="link">The Process</Link>
        			</div>
        			<div className="hvr-rectangle-out pointer box col l12 m6 s12">
                <Link to='/contact' className="link">Hit Me Up</Link>
        			</div>
        		</div>
        	</section>
        </div>
        <MainFooter/>
      </div>
    );
  }
}