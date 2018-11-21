import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './contact-page.scss';

class ContactPage extends Component {
   
    static propTypes = {
        
    }

    static defaultProps = {
        title: 'Contact page'
    }

    componentDidMount() {
       
    }

    componentWillMount() {
        document.title = this.props.title; 
    }

    render() {
       
        return (
            <>
            </>
        )
    }
    
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
    
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactPage));