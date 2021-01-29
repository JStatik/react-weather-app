import Weather from '../components/Weather';
import Error from '../components/UserInterface/Error';

const showWeatherOrError = ( { status, name, weather } ) => {
    if( status === 200 ) {
        return <Weather name={ name } weather={ weather } />
    }

    if( status === '404' ) {
        return <Error error="No se pudo obtener el clima, de la ciudad especificada." height="200px" />
    }
};

export default showWeatherOrError;
