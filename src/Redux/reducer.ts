import {Ttemperature_unit, Tlength_unit} from "../Config/TypeScript/Types";
// any change to state should be reflected in config/TypeScript/types file.
import initialState from "./initialState";
import {createReducer} from "@reduxjs/toolkit";
import {setTemperatureUnit, setLengthUnit, showError, setLoading, setWeatherData} from './actions';

const reducer = createReducer(initialState, builder => {
    builder.addCase(setTemperatureUnit, (state, action) => {
        state.temperature_unit = (action.payload as Ttemperature_unit)
    })
    builder.addCase(setLengthUnit, (state, action) => {
        state.length_unit = (action.payload as Tlength_unit)
    })
    builder.addCase(showError, (state, action) => {
        state.error = action.payload
    })
    builder.addCase(setLoading, (state, action) => {
        state.isLoading = action.payload
    })
    builder.addCase(setWeatherData, (state, action) => {
        state.weatherData = action.payload
    })
})

export default reducer;
