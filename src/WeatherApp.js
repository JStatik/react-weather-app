import React, { useState } from 'react';
import useFetch from './hooks/useFetch';
import showWeatherOrError from './helpers/showWeatherOrError';
import Loading from './components/UserInterface/Loading';
import Header from './components/Header';
import WeatherForm from './components/WeatherForm';

const WeatherApp = () => {
    const [ loading, setLoading ] = useState( false );
    const [ disabled, setDisabled ] = useState( false );
    const [ data, setData ] = useState( { country: '', city: '' } );

    const weather = useFetch( setLoading, setDisabled, { ...data } );

    return (
        <>
            <Header title="Clima App" />

            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <div className="col m6 s12">
                            <WeatherForm
                                setData={ setData }
                                setLoading={ setLoading }
                                disabled={ disabled }
                                setDisabled={ setDisabled }
                            />
                        </div>

                        <div className="col m6 s12">
                            {
                                loading
                                    ?
                                        <Loading />
                                    :
                                        showWeatherOrError( weather )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeatherApp;
