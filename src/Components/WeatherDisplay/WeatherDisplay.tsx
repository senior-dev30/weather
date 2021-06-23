import React from 'react';
import {useSelector} from "react-redux";
import {Tstate} from "../../Config/TypeScript/Types";
import Conv from "../../Utils/unitConverter";
import './WeatherDisplay.scss';

const WeatherDisplay = () => {

    const {date, city, country, summary, wind, clouds, temperature} = useSelector((state: Tstate) => state.weatherData);


    const isLoading = useSelector((state: Tstate) => state.isLoading);
    const {length_unit, temperature_unit} = useSelector((state: Tstate) => ({
        length_unit: state.length_unit,
        temperature_unit: state.temperature_unit
    }))

    return (
        <div className={`WeatherDisplay ${+(city === null) && "WeatherDisplay--inactive"}`}>
            <div className="WeatherDisplay__Summary">
                <h2 className="WeatherDisplay__Summary__Title">{!isLoading ? `${city}, ${country}` : "Loading...."}</h2>
                <p>{date !== null && date}</p>
            </div>
            <div className="WeatherDisplay__TagLine">
                <h1>{summary.description != null && summary.description}</h1>
            </div>
            <div className="WeatherDisplay__Temperature">
                <h3>Temperatures</h3>
                <p>Feels like: {Conv(temperature.feelsLike, "celsius", temperature_unit)}</p>
                <p>Minimum Today: {Conv(temperature.min, "celsius", temperature_unit)}</p>
                <p>Maximum Today: {Conv(temperature.max, "celsius", temperature_unit)}</p>
            </div>
            <div className="WeatherDisplay__Wind">
                <h3>Wind</h3>
                <p>{Conv(wind.speed, "kmh", length_unit)}</p>
            </div>
            <div className="WeatherDisplay__MoreInfo">
                <h3>More Information</h3>
                <p>{`Humidity: ${Conv(clouds.humidity, "percent")}`}</p>
                <p>{`Visibility: ${Conv(clouds.visibility, "m", length_unit)}`}</p>
                <p>{`Cloud Coverage: ${Conv(clouds.all, "percent")}`}</p>
            </div>
        </div>
    );
};

export default WeatherDisplay;
