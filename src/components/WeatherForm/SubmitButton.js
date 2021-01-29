import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ( { disabled } ) => {
    return (
        <div className="input-field col s12 center-align">
            <button
                type="submit"
                className="waves-effect waves-light btn indigo darken-4"
                disabled={ disabled }
            >
                Obtener clima
            </button>
        </div>
    );
};

SubmitButton.propTypes = {
    disabled: PropTypes.bool.isRequired
};

export default SubmitButton;
