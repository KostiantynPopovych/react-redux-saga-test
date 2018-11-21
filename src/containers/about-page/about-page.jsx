import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './about-page.scss';

class AboutPage extends Component {
   
    static propTypes = {
        
    }

    static defaultProps = {
        title: 'About page'
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AboutPage));