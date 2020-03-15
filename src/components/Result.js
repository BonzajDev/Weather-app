import React from 'react';
import '../assets/styles/Result.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faWind, faSun, faMoon, faArrowDown } from '@fortawesome/free-solid-svg-icons';



const Result = (props) => {
    const { city, date, temperature, sunrise, sunset, pressure, wind, weather, timezone, error } = props.data;
    let resultContent = null;
    const temperatureUnits = `${Math.floor(temperature)}°C`;
    const windUnits = `${wind} m/s`;
    const pressureUnits = `${pressure} hPa`;
    const sunriseUnits = new Date((sunrise + timezone - 3600) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetUnits = new Date((sunset + timezone - 3600) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    let weatherUnit = '';

    if (weather === 'Clear') {
        weatherUnit = 'sun';
    } else if (weather === 'Clouds') {
        weatherUnit = 'cloud';
    } else if (weather === 'Rain') {
        weatherUnit = 'rain';
    } else if (weather === 'Snow') {
        weatherUnit = 'snowing';
    } else if (weather === 'Thunderstorm') {
        weatherUnit = 'storm';
    }

    if (!error && city) {
        resultContent = (
            <div className="resultContainer">
                <div className="resultPanel">
                    <p className="resultCity">{city}</p>
                    <div className="resultDate row">
                        <FontAwesomeIcon icon={faClock} />
                        <p>{date}</p>
                    </div>
                    <div className="resultImage">
                        <img src={`./src/assets/images/${weatherUnit}.svg`} alt="weather condition" />
                    </div>
                    <p className="resultTemperature">{temperatureUnits}</p>

                    <div className="sideInfo">
                        <div className="rise row">
                            <FontAwesomeIcon icon={faSun} />
                            <p className="resultSunrise">{sunriseUnits}</p>
                        </div>
                        <div className="set row">
                            <FontAwesomeIcon icon={faMoon} />
                            <p className="resultSunset">{sunsetUnits}</p>
                        </div>
                        <div className="resultPressure row">
                            <FontAwesomeIcon icon={faArrowDown} />
                            <p>{pressureUnits}</p>
                        </div>
                        <div className="resultWind row">
                            <FontAwesomeIcon icon={faWind} />
                            <p>{windUnits}</p>
                        </div>
                    </div>

                </div>
            </div >
        )
    } else if (error) {
        const errorContent = `${city} does not exist in that data base`
        resultContent = (
            <div className="resultContainer">
                <div className="resultPanel">
                    <p className="resultError">{errorContent}</p>
                </div>
            </div>

        )
    }

    return (
        <React.Fragment>
            {resultContent}
        </React.Fragment>
    )
}

export default Result;

