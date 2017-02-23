import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import prerenderio from 'prerender-node';
import ReactHelmet from 'react-helmet';

import store from '../imports/reducers/combined.js';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
 
import Homepage from '../imports/ui/Homepage.jsx';
import About from '../imports/ui/About.jsx';
import Services from '../imports/ui/Services.jsx';
import Contact from '../imports/ui/Contact.jsx';
import Blog from '../imports/ui/Blog.jsx';

 
const appRoutes = (
	<Router path="/" onUpdate={() => window.scrollTo(0, 0)} >
	  <IndexRoute component={ Homepage }/>
	  <Route path="/about" component={ About }></Route>
	  <Route path="/services" component={ Services }></Route>
	  <Route path="/contact" component={ Contact }></Route>
	  <Route path="/blog" component={ Blog }></Route>
	</Router>
)


Meteor.startup( () => {
	let s = skrollr.init();
 	ReactRouterSSR.Run(appRoutes);
	// const settings = Meteor.settings.PrerenderIO;
	// if (settings && settings.token && settings.protocol) {
	//     prerenderio.set('prerenderToken', settings.token);
	//     prerenderio.set('protocol', settings.protocol);
	//     prerenderio.set('forwardHeaders', true);
	//     prerenderio.set('afterRender', function afterRender(error) {
	//         if (error) {
	//             console.log('prerenderio error', error); // eslint-disable-line no-console
	//             return;
	//         }
	//     });
	//     WebApp.rawConnectHandlers.use(prerenderio);
	// }
  // render( 
  // 	{ appRoutes }, 
  //   document.getElementById( 'render-target' ) 
  // );
});