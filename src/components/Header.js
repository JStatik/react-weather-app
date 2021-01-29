import React from 'react';
import PropTypes from 'prop-types';

const Header = ( { title } ) => {
    return (
        <nav>
            <div className="nav-wrapper indigo darken-4">
                <a href="#!" className="brand-logo">{ title }</a>
            </div>
        </nav>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
