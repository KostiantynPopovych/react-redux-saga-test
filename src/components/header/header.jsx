import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import windowDimensions from 'react-window-dimensions';

import './header.scss';

import logo from '../../assets/img/icon.svg';

import ListItem from '../../components/list-item';

class Header extends Component {

    state = {
        showMenu: false,
        items: [
            {
                name: 'contact',
                navRef: '/contact'
            },
            {
                name: 'about',
                navRef: '/about'
            }
        ],
    } 
    
    showMenu = () => {
        const show = !this.state.showMenu;
        this.setState({
            showMenu: show
        })
    }

    render () {
        const { type } = this.props;
        const { items } = this.state;
        const clazz = `navbar navbar--${type}`
        const visibility = (this.props.width < 721 && this.state.showMenu) ? { display: 'flex' } : {};
        const links = <ul style={visibility}>
        { items.map(item => (
                <ListItem 
                            type='nav'
                            navRef={item.navRef}
                            name={item.name}
                            key={item.navRef} />
                )) }
        </ul>;
        const img =
            <Link to='/posts'> 
                <img src={logo} alt="Logo" /> 
            </Link>

        return (
            <div className={clazz}>
                <div className="navbar-container">
                    <div className="navbar-container-iner">
                        <div className="navbar-container-iner-logo">
                            { img }
                            <a href="#" onClick={this.showMenu} className="navbar-container-iner-menu"><FontAwesomeIcon icon="bars" /></a>
                        </div>
                        <div className="navbar-container-inner-navs">
                            { links }
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
};

export default windowDimensions()(Header);