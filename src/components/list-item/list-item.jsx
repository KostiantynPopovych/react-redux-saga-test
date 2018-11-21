import React from 'react';
import { Link } from 'react-router-dom';

import './list-item.scss';

export default ({type, id, name, body, email, navRef}) => {
    const clazz = `list-item list-item-${type}`;
    switch (type) {
        case 'link':
            return <li id={id} className={clazz}> <Link to={`/posts/${id}`}> Post #{id}</Link> </li>

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
                return <li className={clazz}> <Link to={navRef}>{name}</Link> </li>

        default: 
            return <li></li> 
    }
};