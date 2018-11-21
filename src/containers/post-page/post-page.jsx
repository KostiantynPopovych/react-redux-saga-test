import React, { Component } from 'react';
import { fetchPost } from '../../store/posts/actionCreators';
import { fetchComments } from '../../store/comments/actionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './post-page.scss';

import ListItem from '../../components/list-item';

class PostPage extends Component {
   
    static defaultProps = {
        title: 'Post page'
    }

    static propTypes = {
        post: PropTypes.object,
        comments: PropTypes.arrayOf(PropTypes.object)
    }

    componentDidMount() {
        const id = Number(this.props.match.params.id);

        this.fetchPost(id);
        this.fetchComments(id);
    }

    componentWillMount() {
        document.title = this.props.title; 
    }

    fetchPost = id => this.props.fetchPost(id);

    fetchComments = id => this.props.fetchComments(id);

    render() {
        const { post, comments } = this.props;
        const { userId, body, title } = post;
        const commentsList = <ul className='comments-container'>{
            comments.map(comment => {
                return <ListItem 
                            id={comment.id} 
                            type='comment'
                            name={comment.name}
                            body={comment.body}
                            email={comment.email}
                            key={comment.id} />
                })
        }</ul>;
        return (
            <div className='post-container'>
                <div className='post-container-about'>
                    <h4 className='post-container-creator'>Creator id: {userId}</h4>
                    <h1 className='post-container-title'>{title}</h1>
                    <h2 className='post-container-body'>{body}</h2>
                </div>
                { commentsList }
            </div>
        )
    }
    
}

const mapStateToProps = ({posts, comments}) => ({
    post: posts.post,
    comments: comments.comments
});

const mapDispatchToProps = {
    fetchPost,
    fetchComments
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostPage));