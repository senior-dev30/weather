import React from 'react';
import './Body.scss';
import WeatherDisplay from "../../Components/WeatherDisplay/WeatherDisplay";
import CountrySearch from "../../Components/CountrySearch/CountrySearch";

const Body = () => {
    return (
        <div className="Body">
            <CountrySearch/>
            <WeatherDisplay/>
        </div>
    );
};

export default Body;