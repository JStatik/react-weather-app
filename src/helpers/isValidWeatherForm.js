import validator from 'validator';

const isValidWeatherForm = ( country, city ) => {
    if( country.trim().length < 2 || validator.isEmpty( country ) || !validator.isAlpha( country, [ 'es-ES' ] ) || !validator.isUppercase( country ) ) {
        return {
            msgErrorWeather: 'Ingrese un país válido.',
            isValid: false
        };
    } else if( city.trim().length < 2 || validator.isEmpty( city ) || !validator.isAlpha( city, [ 'es-ES' ], { ignore: ' ' } ) ) {
        return {
            msgErrorWeather: 'Ingrese una ciudad válida.',
            isValid: false
        };
    }

    return {
        msgErrorWeather: null,
        isValid: true
    };
};

export default isValidWeatherForm;
