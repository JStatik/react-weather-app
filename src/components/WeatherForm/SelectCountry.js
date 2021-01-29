import React from 'react';
import PropTypes from 'prop-types';

const SelectCountry = ( { country, handleChange } ) => {
    return (
        <div className="input-field col s12">
            <select
                name="country"
                value={ country }
                onChange={ handleChange }
            >
                <option value="" defaultValue>Seleccione Un País</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="PE">Perú</option>
            </select>
        </div>
    );
};

SelectCountry.propTypes = {
    country: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default SelectCountry;
