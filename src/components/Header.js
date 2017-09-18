import React from 'react';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='logo-img'>
                <img className='logo-s' alt='logo' src='http://aircraft721.space/css/burial.png' />
            </div>
            <div className='header-title'>{props.title}</div>
            <div className='search-bar'><i className="fa fa-search" aria-hidden="true"></i></div>
        </div>
    );
}

export default Header;