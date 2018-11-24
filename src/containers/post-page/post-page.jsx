import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getFormValues } from 'redux-form';

import { fetchPost } from '../../store/posts/actionCreators';
import { fetchPostComments } from '../../store/comments/actionCreators';
import { saveComment } from '../../store/comments/actionCreators';

import './post-page.scss';

import ListItem from '../../components/list-item';
import CommentForm from '../../components/comment-form';

class PostPage extends Component {
   
    id = Number(this.props.match.params.id);

    static defaultProps = {
        title: 'Post page'
    }

    static propTypes = {
        post: PropTypes.object,
        postComments: PropTypes.arrayOf(PropTypes.object)
    }

    componentDidMount() {
        this.fetchPost(this.id);
        this.fetchPostComments(this.id);
    }

    componentWillMount() {
        document.title = this.props.title; 
    }

    saveComment = () => this.props.saveComment(this.props.values);

    fetchPost = id => this.props.fetchPost(id);

    fetchPostComments = id => this.props.fetchPostComments(id);

    render() {
        const { post, postComments } = this.props;
        const { body, title } = post;
        const commentsList = 
            <ul className='comments-container'>
                { postComments.map(comment => (
                        <ListItem 
                                    type='comment'
                                    name={comment.name}
                                    body={comment.body}
                                    email={comment.email}
                                    key={comment.id} />
                        )) }
            </ul>;
        
        return (
            <div className='post-container'>
                <div className='post-container-about'>
                    <img src={require(`../../assets/img/list-items/${this.id}.jpg`)} alt="post"/>
                    <div className="post-container-texts">
                        <p className='post-container-texts-title'>{title}</p>
                        <p className='post-container-texts-body'>{body}</p>
                    </div>
                </div>
                { commentsList }
                <div className="form-container">
                    <CommentForm handleSubmit={this.saveComment}/>
                </div>
            </div>
        )
    }
    
}

const mapStateToProps = ({posts, comments, ...rest}) => ({
    post: posts.post,
    postComments: comments.postComments,
    values: getFormValues('commentForm')({posts, comments, ...rest})
});

const mapDispatchToProps = {
    fetchPost,
    fetchPostComments,
    saveComment
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));