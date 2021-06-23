import {Tstate} from "../Config/TypeScript/Types";

const initialState: Tstate = {

    error: "",
    temperature_unit: "celsius",
    length_unit: "km",
    isLoading: false,
    error_message: "",
    weatherData: {
        city: null,
        country: null,
        date: null,
        temperature: {
            actual: null,
            feelsLike: null,
            min: null,
            max: null
        },
        summary: {
            title: null,
            description: null
        },
        wind: {
            speed: null,
            deg: null
        },
        clouds: {
            all: null,
            visibility: null,
            humidity: null
        }
    }
}
export default initialState;