const fetchWeatherApp = async( country, city ) => {
    const apiKey = process.env.REACT_APP_API_KEY;

    const request = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ apiKey }&units=metric` );
    const response = await request.json();

    const weatherAPI = {
        status: response.cod,
        name: response?.name,
        weather: response?.main
    };

    return weatherAPI;
};

export default fetchWeatherApp;
