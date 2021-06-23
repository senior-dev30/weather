import {IS_LOADING, FETCH_WEATHER_DATA, SET_TEMPERATURE_UNIT, SET_LENGTH_UNIT, SHOW_ERROR_MESSAGE} from "./actionTypes";
import {client, getCityByName} from '../Apollo/Apollo';
import {toName} from "../Utils/TranslateCountryISO";
import {IweatherData, TcountryISO} from "../Config/TypeScript/Types";
import {createAction} from "@reduxjs/toolkit";

export const showError = createAction<string>(SHOW_ERROR_MESSAGE)
export const setTemperatureUnit = createAction<string>(SET_TEMPERATURE_UNIT)
export const setLengthUnit = createAction<string>(SET_LENGTH_UNIT)
export const setLoading = createAction<boolean>(IS_LOADING)
export const setWeatherData = createAction<IweatherData>(FETCH_WEATHER_DATA)

export const fetchData = ({city, country}: { city: string, country?: TcountryISO }) => (dispatch: any) => {
    const now = new Date()
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    const date = `${weekday[now.getDay()]}, ${month[now.getMonth()]} ${now.getDate()}`

    dispatch(setLoading(true))
    client
        .query({query: getCityByName(city, country)})
        .then(({data}: { data: { getCityByName: { country: string, weather: {} } | null } }) => {
            if (data.getCityByName === null) {
                dispatch(showError((country === undefined) ? `No weather data for ${city} was found` : `No weather data ${city} in ${toName(country)} was found`))
                dispatch(setLoading(false))
                return;
            }
            // @ts-ignore fixme define shape of data from api
            dispatch(setWeatherData({
                ...data.getCityByName.weather,
                date,
                city,
                country: toName(data.getCityByName.country)
            }))
            dispatch(setLoading(false))
            dispatch(showError(""))

        })
        .catch(err => {
            console.log(err)
            showError("Sorry, there was problem retrieving the weather data. Please try again in a few minutes.")
        })
}



