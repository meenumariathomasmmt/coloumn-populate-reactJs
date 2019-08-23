import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'




class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                <ul>
                    <li><NavLink exact to='/' activeClassName="selected">Screen 1</NavLink></li>
                    <li><NavLink to='/screen2' activeClassName="selected">Screen 2</NavLink></li>
                </ul>
                </nav>
            </header>
        )
    }
}

export default Header