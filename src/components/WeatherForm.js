import React, { useState } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';
import useForm from '../hooks/useForm';
import isValidWeatherForm from '../helpers/isValidWeatherForm';
import Error from './UserInterface/Error';
import InputCity from './WeatherForm/InputCity';
import SelectCountry from './WeatherForm/SelectCountry';
import SubmitButton from './WeatherForm/SubmitButton';

const WeatherForm = ( { setData, setLoading, disabled, setDisabled } ) => {
    const [ formValues, handleChange, reset ] = useForm( { country: '', city: '' } );
    const { country, city } = formValues;

    const [ msgError, setMsgError ] = useState( null );

    const handleSubmit = ( event ) => {
        event.preventDefault();

        setDisabled( true );

        const escapedCountry = validator.escape( country );
        const escapedCity = validator.escape( city );

        const { msgErrorWeather, isValid } = isValidWeatherForm( escapedCountry, escapedCity );
        setMsgError( msgErrorWeather );

        if( isValid ) {
            setLoading( true );

            setData( ( data ) => {
                if( data.country === escapedCountry && data.city === escapedCity ) {
                    setLoading( false );

                    return {
                        ...data,
                        city: ''
                    };
                }

                return {
                    ...data,
                    country: escapedCountry,
                    city: escapedCity
                };
            } );

            reset( {
                ...formValues,
                city: ''
            } );

            return;
        }

        setDisabled( false );
    };

    return (
        <>
            { msgError && <Error error={ msgError } height="auto" /> }

            <form autoComplete="off" onSubmit={ handleSubmit }>
                <SelectCountry
                    country={ country }
                    handleChange={ handleChange }
                />

                <InputCity
                    city={ city }
                    handleChange={ handleChange }
                />

                <SubmitButton disabled={ disabled } />
            </form>
        </>
    );
};

WeatherForm.propTypes = {
    setData: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    setDisabled: PropTypes.func.isRequired
};

export default WeatherForm;
