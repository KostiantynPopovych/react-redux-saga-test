import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFormValues } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { saveComment } from '../../store/comments/actionCreators';

import './contact-page.scss';

import CommentForm from '../../components/comment-form';

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

    saveComment = () => {
        this.props.saveComment(this.props.values);
    }

    render() {
       
        return (
            <CommentForm handleSubmit={this.saveComment}/>
        )
    }
    
}

const mapStateToProps = (state) => ({
    values: getFormValues('commentFrom')(state)
});

const mapDispatchToProps = {
    saveComment
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactPage));