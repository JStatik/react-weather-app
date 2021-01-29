import { useEffect, useRef, useState } from 'react';
import fetchWeatherApp from '../helpers/fetchWeatherApp';

const useFetch = ( setLoading, setDisabled, { country, city } ) => {
    const isMounted = useRef( true );
    const [ weather, setWeather ] = useState( { status: '', name: '', weather: '' } );

    useEffect( () => {
        return () => {
            isMounted.current = false;
        };
    }, [] );

    useEffect( () => {
        const executeFetch = async() => {
            if( country !== '' && city !== '' ) {
                const weatherAPI = await fetchWeatherApp( country, city );
            
                isMounted.current && setWeather( weather => {
                                        return {
                                            ...weather,
                                            ...weatherAPI
                                        };
                                    } );

                setLoading( false );
            }

            setDisabled( false );
        };

        executeFetch();
    }, [ setLoading, setDisabled, country, city ] );

    return weather;
};

export default useFetch;
