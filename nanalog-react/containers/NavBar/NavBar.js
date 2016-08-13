import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
// import $ from 'jquery';

class NavBar extends Component {

    render() {
        return (
            <div className="nav">
                <div className="logo_btn">
                    <Link to="/" href="#">
                        <img src={require('../../images/logo.svg')}/>
                    </Link>
                </div>
                <div className="setting_btn">
                    <Link to="/" href="#">
                        <img src={require('../../images/nav-item.png')}/>
                    </Link>
                </div>
            </div>

        )
    };

}

export default NavBar;
