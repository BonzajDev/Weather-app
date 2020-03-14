import React from 'react';
import '../assets/styles/Result.scss';

const Result = (props) => {
    const { city, date, temperature, sunrise, sunset, pressure, wind, error } = props.data;
    let resultContent = null;

    if (!error && city) {
        resultContent = (
            <div className="resultContainer">
                <div className="resultCity">{city}</div>
                <div className="resultDate">{date}</div>
                <div className="resultTemperature">{temperature}</div>
                <div className="resultSunrise">{sunrise}</div>
                <div className="resultSunset">{sunset}</div>
                <div className="resultPressure">{pressure}</div>
                <div className="resultWind">{wind}</div>
            </div>
        )
    }

    return (
        <React.Fragment>
            {error ? `${city} does not exist in that data base` : resultContent}
        </React.Fragment>




    )
}

export default Result;

