import React from 'react';
import PropTypes from 'prop-types';

const InputCity = ( { city, handleChange } ) => {
    return (
        <div className="input-field col s12">
            <input
                type="text"
                name="city"
                placeholder="Ciudad..."
                value={ city }
                onChange={ handleChange }
            />
        </div>
    );
};

InputCity.propTypes = {
    city: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default InputCity;
