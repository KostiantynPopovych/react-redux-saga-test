import React, { Component } from 'react';
import { fetchPosts } from '../../store/posts/actionCreators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './posts-page.scss';

import ListItem from '../../components/list-item';

class PostsPage extends Component {
   
    static defaultProps = {
        title: 'Posts page'
    }

    static propTypes = {
        postsList: PropTypes.arrayOf(PropTypes.object),
    }

    componentDidMount() {
        this.fetchPosts();
    }

    componentWillMount() {
        document.title = this.props.title; 
    }

    fetchPosts = () => this.props.fetchPosts();

    render() {
        const { postsList } = this.props;
        const items = <ul className='posts-container'>{
            postsList.map(item => {
                return <ListItem 
                            id={item.id} 
                            type='link'
                            key={item.id} />
                })
        }</ul>;
        return (
            <>
                { items }
            </>
        )
    }
    
}

const mapStateToProps = ({posts}) => ({
    postsList: posts.postsList,
});

const mapDispatchToProps = {
    fetchPosts
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsPage));