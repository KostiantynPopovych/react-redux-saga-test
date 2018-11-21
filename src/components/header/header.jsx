import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/img/logo.png';

import ListItem from '../../components/list-item';

export default ({type}) => {
    const items = [
        {
            name: 'contact',
            navRef: '/contact'
        },
        {
            name: 'about',
            navRef: '/about'
        }
    ];
    
    const clazz = `navigation-container navigation-container--${type}`;
    const links = <ul className="navigation-container-navs">{
        items.map(item => {
            return <ListItem 
                        type='nav'
                        navRef={item.navRef}
                        name={item.name}
                        key={item.navRef} />
            })
        }</ul>;
    const img = <Link to='/posts'> 
                    <img src={logo} alt="Logo" className="navigation-container-logo" /> 
                </Link>;
    return (
        <div className={clazz}>
                { img }
                { links }
        </div>
    );
};