import React, { Component } from 'react';

import { Link } from 'react-router';

import MainNavigation from './components/MainNavigation.jsx';
import MainFooter from './components/MainFooter.jsx';
import Helmet from 'react-helmet';

// App component - represents the whole app
export default class Homepage extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }
 
  render() {
    let tagline = "A Toronto Based Web Developer";
    return (
      <div className="page" id="homepage">
        <Helmet
            htmlAttributes={{"lang": "en", "amp": undefined}}
            titleTemplate="Leroy Wan | %s"
            defaultTitle="Leroy Wan | Toronto Freelance Web Developer and Designer"
            meta={[
                {"name": "description", "content": "I build websites for people"},
                {"http-equiv": "Accept-CH", "content": "DPR, Width, Viewport-Width"}
            ]}
            link={[
                {"rel": "shortcut icon", "href": "images/favicon-new.png"},
            ]}
          />
        <MainNavigation></MainNavigation>
        <div className="page-content animated fadeIn">
          <div className="front-page">
            <h1 className="tagline">{ tagline }</h1>
            <p className="description">Blazing Fast Websites Optimized for Your Business</p>
          </div>
          <section className="main-content-container">
            <div className="main-content">
              <h4 className="heading">Nice To Meet You!</h4>
              <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
              <Link to="/about" className="learn-more">Learn More</Link>
            </div>
          </section>
          <section className="main-content-container">
            <div className="main-content">
              <h4 className="heading">What Do I Do?</h4>
              <p className="description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
              <div className="row container">
                <div className="row col s6 m3">
                  <img src="/icons/module/Icon-58.svg" className="col s12"/>
                  <h5>Communicates</h5>
                </div>
                <div className="row col s6 m3">
                  <img src="/icons/module/Icon-51.svg" className="col s12"/>
                  <h5>Fast and Optimized</h5>
                </div>
                <div className="row col s6 m3">
                  <img src="/icons/module/Icon-66.svg" className="col s12"/>
                  <h5>Converts</h5>
                </div>
                <div className="row col s6 m3">
                  <img src="/icons/module/Icon-81.svg" className="col s12"/>
                  <h5>Search Engine</h5>
                </div>
              </div>
              <Link to="/services" className="learn-more">Learn More</Link>
            </div>
          </section>
        </div>
        <MainFooter/>
      </div>
    )
  }
}