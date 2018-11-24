import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router ,Route, Switch, Redirect } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import store from '../../helpers/configure-store';

import PostsPage from '../posts-page';
import PostPage from '../post-page';
import Navigation from '../../components/header';
import AboutPage from '../../containers/about-page';
import ContactPage from '../../containers/contact-page';

library.add(fas);

export default () => (
    <Provider store={store}>
        <Router>
            <>
                <Navigation type='header'/>
                    <Switch>
                        <Route exact path="/posts" component={PostsPage} />
                        <Route exact path="/posts/:id" component={PostPage} />
                        <Route exact path="/about" component={AboutPage} />
                        <Route exact path="/contact" component={ContactPage} />
                        <Redirect exact from="/" to="/posts"/>
                    </Switch>
                <Navigation type='footer'/>
            </>
        </Router>
    </Provider>
);