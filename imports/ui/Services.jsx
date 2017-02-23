import React, {Component} from 'react';
 
import MainNavigation from './components/MainNavigation.jsx';
import MainFooter from './components/MainFooter.jsx';
// App component - represents the whole app
export default class Services extends Component {

  componentWillMount() {
    window.scrollTo(0, 0);
  }
 
  render() {
    return (
      <div className="page" id="services">
      	<MainNavigation></MainNavigation>
        <div className="page-content animated fadeIn">
        	<section className="front-page main-content" data-anchor-target=".page" data-top-top="opacity: 1;" data-top-bottom="opacity: 0;">
            <div className="content">
              <h1>Services</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.</p>
            </div>
          </section>
          <section className="services-list main-content row">
            <div className="content row col m4 s12">
              <div className="visual col s12">
                <img src="/wordpress_blue.svg"/>
              </div>
              <div className="text col s12">
                <h2>Wordpress</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
              </div>
            </div>
            <div className="content row col m4 s12">
              <div className="visual col s12">
                <img src="/static_site.svg"/>
              </div>
              <div className="text col s12">
                <h2>Simple Static Site</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
              </div>
            </div>
            <div className="content row col m4 s12">
              <div className="visual col s12">
                <img src="/cart.svg"/>
              </div>
              <div className="text col s12">
                <h2>Ecommerce</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
              </div>
            </div>
          </section>
          <section className="main-content process">
            <div className="intro">
              <h3>How Does This Work?</h3>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
            </div>
            <div className="steps row">
              <div className="step row col s12 m6">
                <div className="heading col s12">
                  <h4><i className="small material-icons">group_work</i> 1. Consultation</h4>
                </div>
                <div className="content col s12">
                  <p>Lorem Ipsum Dolar something asdflkn the aoijdnf thie thing is os cool. And then we do this thing called bleh that will help you wit hthe stuff. Right on buddy!</p>
                </div>
              </div>
              <div className="step row col s12 m6">
                <div className="heading col s12">
                  <h4><i className="small material-icons">dashboard</i> 2. Design</h4>
                </div>
                <div className="content col s12">
                  <p>Lorem Ipsum Dolar something asdflkn the aoijdnf thie thing is os cool. And then we do this thing called bleh that will help you wit hthe stuff. Right on buddy!</p>
                </div>
              </div>
              <div className="step row col s12 m6">
                <div className="heading col s12">
                  <h4><i className="small material-icons">code</i> 3. Development</h4>
                </div>
                <div className="content col s12">
                  <p>Lorem Ipsum Dolar something asdflkn the aoijdnf thie thing is os cool. And then we do this thing called bleh that will help you wit hthe stuff. Right on buddy!</p>
                </div>
              </div>
              <div className="step row col s12 m6">
                <div className="heading col s12">
                  <h4><i className="small material-icons">loop</i> 4. Refinement</h4>
                </div>
                <div className="content col s12">
                  <p>Lorem Ipsum Dolar something asdflkn the aoijdnf thie thing is os cool. And then we do this thing called bleh that will help you wit hthe stuff. Right on buddy!</p>
                </div>
              </div>
            </div>
          </section>
          <section className="main-content clients">
            <div className="client">
              <div className="content">
                <p className="testimonial"><i className="fa fa-angle-double-left" aria-hidden="true"></i>Lorem Ipsum Dolar something asdflkn the aoijdnf thie thing is os cool. And then we do this thing called bleh that will help you wit hthe stuff. Right on buddy!<i className="fa fa-angle-double-right" aria-hidden="true"></i></p>
                <p className="author">Search3w | Elchanan Rotstain, CEO</p>
              </div>
            </div>
          </section>
        </div>
        <MainFooter/>
      </div>
    );
  }
}