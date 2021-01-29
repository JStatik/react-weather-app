import React from 'react';
import PropTypes from 'prop-types';

const Weather = ( { name, weather } ) => {
    const { temp, humidity, feels_like, temp_max, temp_min } = weather;

    return (
        <div className="col s12 card-panel blue darken-2">
            <div className="white-text">
                <h2>{ name }</h2>
                <p className="temperatura">{ temp } ºC</p>
                <p>Humedad: { humidity } %</p>
                <p>Sensación térmica: { feels_like } ºC</p>
                <p>Temperatura Máxima: { temp_max } ºC</p>
                <p>Temperatura Mínima: { temp_min } ºC</p>
            </div>
        </div>
    );
};

Weather.propTypes = {
    name: PropTypes.string.isRequired,
    weather: PropTypes.object.isRequired
};

export default Weather;
