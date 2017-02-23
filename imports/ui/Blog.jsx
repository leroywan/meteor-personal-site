import React, { Component } from 'react';
import MainNavigation from './components/MainNavigation.jsx';
import MainFooter from './components/MainFooter.jsx';
// App component - represents the whole app
export default class Blog extends Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }
 
  render() {
    return (
      <div className="page" id="blog">
      	<MainNavigation></MainNavigation>
        <div className="page-content">
        	<h1>Blog</h1>
        </div>
        <MainFooter/>
      </div>
    );
  }
}