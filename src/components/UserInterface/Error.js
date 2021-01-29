import React from 'react';
import PropTypes from 'prop-types';

const Error = ( { error, height } ) => {
    return (
        <div style={ { alignItems: 'center', display: 'flex', height: height, justifyContent: 'center' } }>
            <p className="error">{ error }</p>
        </div>
    );
};

Error.propTypes = {
    error: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
};

export default Error;
