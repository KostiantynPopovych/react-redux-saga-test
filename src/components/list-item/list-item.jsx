import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './list-item.scss';

export default ({type, id, name, body, email, navRef, imgSrcId}) => {
    const clazz = `list-item list-item-${type}`;
    switch (type) {
        case 'post':
            return (
                <li id={id} className={clazz}>
                    <ReactCSSTransitionGroup
                        transitionName="posts"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                        transitionAppear={true}
                        transitionAppearTimeout={500}>
                        <Link to={`/posts/${id}`}>
                            <img src={require(`../../assets/img/list-items/${imgSrcId}.jpg`)} alt="post"/>
                            <FontAwesomeIcon icon="arrow-right"/>
                            <span className="list-item-post-info">
                                <span className="list-item-post-info-title">
                                    Pretty title to post #{id}
                                </span>
                                <span className="list-item-post-info-description">
                                    Pretty short decripton to post #{id}
                                </span>
                            </span>
                        </Link> 
                    </ReactCSSTransitionGroup>
                </li>
            )
           

        case 'comment':
            return (
                <li className={clazz}>
                    <div className='comment-container'>
                        <h2 className='comment-container-name'>{name}</h2>
                        <h3 className='comment-container-body'>{body}</h3>
                        <h2 className='comment-container-email'>{email}</h2>
                    </div>
                </li>
            )

        case 'nav': 
            return <li className={clazz}>
                        <Link to={navRef}>{name}</Link> 
                    </li>

        default: 
            return <li></li> 
    }
};